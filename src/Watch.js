/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import React, { useMemo, useRef, useState, useEffect } from "react";
import { Clone, useGLTF, useMatcapTexture, Text3D, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ObjectInstance from './ObjectInstance';


const textMaterial = new THREE.MeshMatcapMaterial()


export default function Watch(props) {
  const { nodes, materials } = useGLTF("./watch-set.glb");
  
  const aig_mn = useRef()
  const aig_h = useRef()
  const aig_s = useRef()
  const [appSecond, setAppSeconds] = useState(0)
  const updateAppSeconds = (newValue) => {
    setAppSeconds(newValue);
  }

  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91',256)

  const radToDeg = (radians) => 180 * radians / Math.PI;
  const degToRad = (degree) => degree * Math.PI / 180 ;//return radians
  const arrayRot = (number, part, array) => {
      for(let i = 0; i<number; i++){
        array.push(i * part)
      }
    }
    
  const circleArrayModifier = (angle, numberOfElement) => {
    const array = []
    const part = degToRad(angle) / numberOfElement;
    arrayRot(numberOfElement, part, array)
    return array
  }

  const createRotationArray = (rot, angle) => {
    const array = []
    rot.map((value, i)=>{
      const ar = [0,0,0]
      ar[angle] = rot[i]
      array.push(ar)
    })
    return array
  }

  const arrRotValue = useMemo(()=> createRotationArray(circleArrayModifier(360, 60),1) )
  const arrRotValueRadial1 = useMemo(()=> createRotationArray(circleArrayModifier(360, 20),1) )
  const arrRotValueRadial2 = useMemo(()=> createRotationArray(circleArrayModifier(360, 12),1) )
  const arrRotValueRadial3 = useMemo(()=> createRotationArray(circleArrayModifier(360, 12),1) )

 
  const sample = useMemo(() => [
    new THREE.Vector3(0, 0.388425,0),
    new THREE.Vector3(0.05, 0.388425,0),
    new THREE.Vector3(0.1, 0.388425,0),
    new THREE.Vector3(0.15, 0.388425,0),
    new THREE.Vector3(0.2, 0.388425,0),
    new THREE.Vector3(0.25, 0.388425,0),
    new THREE.Vector3(0.3, 0.388425,0),
    new THREE.Vector3(0.35, 0.388425,0),
    new THREE.Vector3(0.4, 0.388425,0),
    new THREE.Vector3(0.45, 0.388425,0),
    new THREE.Vector3(0.5, 0.388425,0),
    new THREE.Vector3(0.55, 0.388425,0),
    new THREE.Vector3(0.6, 0.388425,0),
    new THREE.Vector3(0.65, 0.388425,0),
    new THREE.Vector3(0.7, 0.388425,0),
    new THREE.Vector3(0.75, 0.388425,0)
  ])

  const updateWatch = () =>{
    const dTime = new Date();
    const minutes = dTime.getMinutes()
    aig_s.current.rotation.set(0, degToRad((dTime.getSeconds() * -36) / 6),0)
    aig_mn.current.rotation.set(0, degToRad((minutes * -36) / 6),0)
    
    const pourcentage = minutes *10/6 ;
    const valueHour = Math.PI/6
    const addValue = pourcentage * valueHour /100

    aig_h.current.rotation.set(0,-addValue + degToRad((dTime.getHours() * -360) / 12),0)
  }

  useEffect(()=> updateWatch(), [appSecond])
  useEffect(()=>{
    matcapTexture.encoding = THREE.sRGBEncoding
    matcapTexture.needsUpdate = true

    textMaterial.matcap = matcapTexture
    textMaterial.needsUpdate = true

  },[])

  useFrame((canvas)=>{
    updateAppSeconds(Math.floor(canvas.clock.elapsedTime%60))
  })

  return (
    
    <group {...props} dispose={null}>
      

      {/* <Clone name="Button_1" object={nodes.Button_1} />
      <Clone name="Button_3" object={nodes.Button_1} rotation={[0,-1.05,0]} /> */}
      <ObjectInstance 
        name="Button_1"
        object = {nodes.Button_1}
        Rotations = {[
          [0,0,0],
          [0,-1.05,0]
        ]} />

      <mesh
        name="anneau"
        geometry={nodes.anneau.geometry}
        material={materials["metal_hands"]}
      />
      <mesh
        name="Center_Button_2"
        geometry={nodes.Center_Button_2.geometry}
        material={materials["metal_hands"]}
      />


      <ObjectInstance 
        name="Attache"
        object = {nodes.Attache}
        Rotations = {[
          [0,0,0],
          [0,Math.PI,0]
        ]} />
      <ObjectInstance 
        name="Attache1"
        object = {nodes.Attache_1}
        Rotations = {[
          [0,0,0],
          [0,Math.PI,0]
        ]} />

      <mesh
        name="tick_center"
        geometry={nodes.tick_center.geometry}
        material={materials.metal_hands}
        />

        <ObjectInstance 
        name="m_tick"
        object = {nodes.m_tick}
        Rotations = {arrRotValue} />
        <ObjectInstance 
        name="m_tick_radial_1"
        position={[0, 0, -0.27861]}
        object = {nodes.m_tick_radial_1} 
        Rotations = {arrRotValueRadial1} />
        <ObjectInstance 
        name="m_tick_radial_2"
        position={[0, 0, 0.28688]} 
        object = {nodes.m_tick_radial_2}
        Rotations = {arrRotValueRadial2} />
        <ObjectInstance 
        name="m_tick_radial_3"
        position={[-0.28291, 0, 0]} 
        object = {nodes.m_tick_radial_3}
        Rotations = {arrRotValueRadial3} />

      {/* Aiguilles */}
      <group ref={aig_h}>
      <Clone name="rotator_central_Heures" object={nodes.rotator_central} />
      <Clone name="Heures" castShadow object={nodes.Minutes} position={[0,0.005,0]} scale={[1,1,0.8]} />
      </group>

      <group ref={aig_mn}>
      <Clone name="rotator_central_Minutes" object={nodes.rotator_central} position={[0,0.005,0]} scale={[0.8,1,0.8]} />
      <Clone name="Minutes" castShadow object={nodes.Minutes} />
      </group>

      <group ref={aig_s}>
      <Clone name="rotator_central_Secondes" object={nodes.rotator_central} position={[0,0.01,0]} scale={[0.6,1,0.6]} />
      <mesh name="Secondes" castShadow geometry={nodes.Secondes.geometry} material={materials.metal_hands} />
      </group>

      <Clone name="mini_aiguille_chrono" castShadow object={nodes.mini_aiguille} position={[-0.28291, 0, 0]} />
      <Clone name="mini_aiguille_boussole" castShadow object={nodes.mini_aiguille} position={[0, 0, 0.286876]} scale={[1.1, 1, 1.1]} />
      <Clone name="mini_aiguille_ms" castShadow object={nodes.mini_aiguille} position={[0, 0, -0.27861]} scale={[1.1, 1, 1.1]} />
      
      {/* Aiguilles_FIN */}

      {/* Cadran et props */}
      
      <mesh
        name="cadran_1"
        geometry={nodes.cadran_1.geometry}
        material={materials.blue_metal_smooth}
      />
      <mesh
        name="cadran_2"
        geometry={nodes.cadran_2.geometry}
        material={materials.glossy_black}
      />

          <mesh
            name="Glass_2"
            geometry={nodes.Glass_2.geometry}
            position={[0, -0.44, 0]}>
            <meshPhysicalMaterial 
              thickness= { 0.01 }
              roughness= { 0 }
              clearcoat= { 0 }
              clearcoatRoughness= { 0 }
              transmission= { 1.0 }
              ior= { 1.45 }
              envMapIntensity= { 2.5 }
              color= {'#ffffff'}
              attenuationTint= {'#ffe79e'}
              attenuationDistance= { 0.0001 }
               />
          </mesh>

      {/* Les Barres */}
      <Clone object={nodes.Barre} rotation={[0, 1.047, 0]} />
      <Clone object={nodes.Barre} rotation={[0, -1.047, 0]} />
      <Clone object={nodes.Barre} rotation={[0, 0.5231, 0]} />
      <Clone object={nodes.Barre} rotation={[0, -0.5231, 0]} />
      <Clone object={nodes.Barre} rotation={[0, -2.0943, 0]} />
      <Clone object={nodes.Barre} rotation={[0, 2.0943, 0]} />
      <Clone object={nodes.Barre} rotation={[0, -2.6217, 0]} />
      <Clone object={nodes.Barre} rotation={[0, 2.6217, 0]} />
      <Clone object={nodes.Barre} position={[0.02, 0, -0.02]} rotation={[0, 0, 0]} />
      <Clone object={nodes.Barre} position={[0.06, 0, -0.01]} rotation={[0, 0, 0]} />
      <Clone object={nodes.Barre} position={[0, 0, 0.04]} rotation={[0, -Math.PI/2, 0]} />
      <Clone object={nodes.Barre} position={[0, 0, 0]} rotation={[0, -Math.PI/2, 0]} />
      <Clone object={nodes.Barre} position={[0, 0, -0.04]} rotation={[0, -Math.PI/2, 0]} />
      <Clone object={nodes.Barre} position={[0, 0, 0.06]} rotation={[0, Math.PI/2, 0]} />
      <Clone object={nodes.Barre} position={[0.08, 0, 0.03]} rotation={[0, Math.PI, 0]} />
      
      <mesh
        name="letter_V"
        geometry={nodes.letter_V.geometry}
        material={materials.metal_hands}
      />
      <Clone name="letter_X" object={nodes.letter_X} />
      <Clone name="letter_X_L" object={nodes.letter_X} rotation={[0, -Math.PI/2,0]} position={[-1.12, 0, 0.05]} />

      <ObjectInstance 
        name="Radial"
        Positions={[
          new THREE.Vector3(0, 0, -0.27861),
          new THREE.Vector3(0, 0, 0.286876),
          new THREE.Vector3(-0.28291, 0, 0)
          ]}
        Scales={[ [1,1,1], [1,1,1], [0.85,1,0.85], ]}
        object={nodes.Radial}
        />

      <mesh
        name="Button_2"
        geometry={nodes.Button_2.geometry}
        material={materials["metal_hands"]}
      />
      <mesh
        name="Center_part"
        geometry={nodes.Center_part.geometry}
        material={materials["metal_hands"]}
      />

      
      

    

    {/* PartiDuBracelet */}

    {/* <Clone object={line} /> */}
      
      
         <ObjectInstance
            name="maillon"
            Positions={sample} 
            object={nodes.maillon}
            />

      {/* DAYS */}
    <mesh 
    position={[0,2.05,0]}
    rotation={[-Math.PI/2,0,0]}
    >

    </mesh>

    <mesh
        name="Shadow_circle"
        geometry={nodes.Shadow_circle.geometry}
        material={materials.white_part}
        position={[0.3, 2.07, 0.31]}
        scale={[0.7,0.7,0.7]}
      />


    <Center position={[0.3, 2.075, 0.3]}>
    <Text3D
                material={ textMaterial }
                font="./fonts/helvetiker_regular.typeface.json"
                size={ 0.05 }
                height={ 0.007 }
                curveSegments={ 12 }
                rotation={[-Math.PI/2, 0, 0]}
            >
                23
            </Text3D>
            </Center>
    
    </group>
    
  );
          
        
  
}

useGLTF.preload("./watch-set.glb");
