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
    <group position={[15.73, 11.41, 62.42]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes.Mesh567.geometry} material={materials.lambert1}/>
      <mesh geometry={nodes.Mesh567_1.geometry} material={materials.tole} />
    </group>
  );
}

useGLTF.preload("./container.glb");
