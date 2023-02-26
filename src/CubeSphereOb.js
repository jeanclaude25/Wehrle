
import { Sphere } from "@react-three/drei";
import { CubeSphereMaterial } from "./shaderMaterials/CubeSphere/CubeSphere.js"
import { extend } from '@react-three/fiber'
import React, { useRef } from "react";


extend({ CubeSphereMaterial })

export default function CubeSphere(props)
{
    const sphereMaterial = useRef()

    return (
        <mesh {...props}>
                <Sphere
                name="sphere"
                args={[15,8,8,8]}
                position={[-1,1,-1]}
                >
                    <cubeSphereMaterial ref={sphereMaterial}/>
                </Sphere>
            
            </mesh>
    )
}