import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";


export default function Container(props) {

  const { nodes, materials } = useGLTF("./container.glb");
  const [shouldUnmount, setShouldUnmount] = useState(false);

  const { opacity } = useSpring({
    opacity: props.props ? 0 : 1,
    config: { duration: 3000 },
    onRest: () => {
      if (props.props) {
        setShouldUnmount(true);
      }
    },
  });



    if (shouldUnmount) {
        return null;
      }

  return (
    <>
    <mesh position={[15.73, 8.5, 62.42]} scale={[13, 15, 62]}>
      <boxGeometry/>
      <meshBasicMaterial transparent={true} opacity={1}/>
    </mesh>
    </>
  );
}

useGLTF.preload("./container.glb");
