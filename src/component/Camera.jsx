import * as THREE from 'three'

import { OrbitControls, TransformControls } from "@react-three/drei";

import { useEffect, useRef, useState } from "react";
import { useControls } from "leva";
import { cameraState } from "../store";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { useSpring, animated } from "@react-spring/three";
import MouseMove from './MouseMove';

export default function Camera() {
    const orbitRef = useRef();
    const transferObjectRef = useRef();
    const snap = useSnapshot(cameraState);
    const [targetCameraPosition, setTargetCameraPosition] = useState(new THREE.Vector3(snap.cameraPosition[0], snap.cameraPosition[1], snap.cameraPosition[2]));
    const [mousePressed, setMousePressed] = useState(false);

    const [scrollCount, setScrollCount] = useState(0);
    const [objectIndex, setObjectIndex] = useState(0);

    const scrollStepValue = 3;
    const objectPositions = [
        { cameraPosition: new THREE.Vector3(0, 0, 10), cameraTarget: new THREE.Vector3(0, 0, 0) },
        { cameraPosition: new THREE.Vector3(10, 0, 10), cameraTarget: new THREE.Vector3(10, 0, 0) },
        { cameraPosition: new THREE.Vector3(20, 0, 10), cameraTarget: new THREE.Vector3(20, 0, 0) },
        // Ajoutez autant d'objets que nécessaire
      ];

      
    const controls = useControls("Camera", {
        seeCameraTarget: true,
        targetX: {
                value: 0, min: -80, max: 80, step: 0.01,
                onChange: (value) => cameraState.cameraTarget[0] = value,
                },
        targetY: {
                value: 0, min: -80, max: 80, step: 0.01,
                onChange: (value) => cameraState.cameraTarget[1] = value,
                },
        targetZ: {
                value: 0, min: -80, max: 80, step: 0.01,
                onChange: (value) => cameraState.cameraTarget[2] = value,
                },

        positionX: {
                    value: snap.cameraPosition[0], min: -1000, max: 1000, step: 0.01,
                    onChange: (value) => {
                      cameraState.cameraPosition[0] = value;
                      cameraState.cameraInitialPosition[0] = value;
                      },
                    },
        positionY: {
                    value: snap.cameraPosition[1], min: -1000, max: 1000, step: 0.01,
                    onChange: (value) => {
                      cameraState.cameraPosition[1] = value;
                      cameraState.cameraInitialPosition[1] = value;
                    }
                    },
        positionZ: {
                    value: snap.cameraPosition[2], min: -1000, max: 1000, step: 0.01,
                    onChange: (value) => {
                      cameraState.cameraPosition[2] = value;
                      cameraState.cameraInitialPosition[2] = value;
                    }
                    }
      });

      const cameraSpring = useSpring({
        target: [
          snap.cameraTarget[0],
          snap.cameraTarget[1],
          snap.cameraTarget[2],
        ],
        position: [
            snap.cameraPosition[0],
            snap.cameraPosition[1],
            snap.cameraPosition[2],
          ],
        config: { tension: 150, friction: 20 },
      });


      function moveCamera(delta) {
        const camera = orbitRef.current.object;
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
      
        const newPosition = camera.position.clone().add(direction.multiplyScalar(delta));
        const newTarget = orbitRef.current.target.clone().add(direction.multiplyScalar(delta));
      
        camera.position.copy(newPosition);
        orbitRef.current.target.copy(newTarget);
      
        cameraState.cameraTarget = [
          newTarget.x,
          newTarget.y,
          newTarget.z,
        ];
        console.log(camera.position)
      }

      

      const handleTargetChange = () => {
        cameraState.cameraTarget = {
          0: transferObjectRef.current.position.x,
          1: transferObjectRef.current.position.y,
          2: transferObjectRef.current.position.z,
        };
      };

      useEffect(() => {
        const handleMouseDown = () => {
          setMousePressed(true);
        };
      
        const handleMouseUp = () => {
          setMousePressed(false);
        };
      
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
      
        return () => {
          window.removeEventListener("mousedown", handleMouseDown);
          window.removeEventListener("mouseup", handleMouseUp);
        };
      }, []);
      
      useEffect(() => {
        const camera = orbitRef.current.object;
        camera.position.set(snap.cameraPosition[0], snap.cameraPosition[1], snap.cameraPosition[2]);
      }, [snap.cameraPosition]);

      
      useEffect(() => {
        const handleWheel = (e) => {
          e.preventDefault();
          const delta = e.deltaY;
        //   console.log(scrollCount)
      
          if (delta > 0) {
            setScrollCount((prev) => prev + 1);
          } else {
            setScrollCount((prev) => (prev > -scrollStepValue ? prev - 1 : 0));
          }
          
          const sens = scrollCount > 0 ? true:false;
          if (scrollCount >= scrollStepValue || scrollCount <= -scrollStepValue) {
                setScrollCount(0);
                setObjectIndex((prev) => {
                    console.log(prev)
                const newIndex = 
                    sens?
                    prev + 1 < objectPositions.length ? prev + 1 : prev:
                    prev > 0 ? prev - 1 : prev;
                
                setTargetCameraPosition(objectPositions[newIndex].cameraPosition);
                cameraState.cameraTarget = objectPositions[newIndex].cameraTarget.toArray();
                return newIndex;
                });
          }
        };
      
        window.addEventListener("wheel", handleWheel, { passive: false });
      
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
      }, [scrollCount]);
      

      useFrame(() => {
        if (orbitRef.current) {
          orbitRef.current.target.lerp(
            new THREE.Vector3(
              cameraSpring.target.get()[0],
              cameraSpring.target.get()[1],
              cameraSpring.target.get()[2]
            ),
            0.1
          );

          orbitRef.current.object.position.lerp(
            new THREE.Vector3(
              cameraSpring.position.get()[0],
              cameraSpring.position.get()[1],
              cameraSpring.position.get()[2]
            ),
            0.03
          );

        }
      });

    return(
    <>
        <mesh
            ref={transferObjectRef}
            scale={0.5}
            position={[
            snap.cameraTarget[0],
            snap.cameraTarget[1],
            snap.cameraTarget[2],
            ]}
            visible={controls.seeCameraTarget}
        >
            <boxGeometry />
            <meshStandardMaterial
            transparent
            wireframe
            opacity={0.9}
            color={"yellow"}
            />
        </mesh>
        {controls.seeCameraTarget ? (
        <TransformControls
          object={transferObjectRef}
          onChange={handleTargetChange}
        />
      ) : (
        <></>
      )}
        <MouseMove orbitRef={orbitRef} allow={!mousePressed}/>
        <OrbitControls enableZoom={false} enableRotate={!mousePressed} enablePan={!mousePressed} ref={orbitRef} makeDefault regress/>
    </>
    )
}