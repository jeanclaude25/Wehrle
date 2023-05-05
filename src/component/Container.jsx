import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function Container({visible}) {

  const { nodes, materials } = useGLTF("./container.glb");
  const [shouldUnmount, setShouldUnmount] = useState(false);

  const { opacity } = useSpring({
    opacity: visible ? 0 : 1,
    config: { duration: 3000 },
    onRest: () => {
      if (visible) {
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
      <animated.meshBasicMaterial transparent={true} opacity={opacity}/>
    </mesh>
    </>
  );
}

useGLTF.preload("./container.glb");
