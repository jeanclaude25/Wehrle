import CustomShaderMaterial from 'three-custom-shader-material'
import { patchShaders } from 'gl-noise/build/glNoise.m'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from "react";
import vertexShader from './Water/Water_vertex.js'
import fragmentShader from './Water/Water_fragment.js'
import { AdditiveBlending } from 'three';


export default function WaterOb({base})
{
    const thickness = 5
    const resolution = 256
    const material = useRef()

    useFrame((state) => {
        if (material?.current) {
            material.current.uniforms.uTime.value = -state.clock.elapsedTime / 5
            }
    })

    return (
        <group position={[-236, 8.1,-0.9]} scale={2.}>
        <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, Math.PI/2]}>

        <boxGeometry args={[20, 20, thickness, resolution, resolution, 1]} />

        <CustomShaderMaterial
          ref={material}
          baseMaterial={THREE.MeshStandardMaterial}
          vertexShader={patchShaders(vertexShader)}
          fragmentShader={fragmentShader}
          // side={THREE.DoubleSide}
          color={'blue'}
          roughness={0.5}
          metalness={0.2}
          flatShading={false}
          transparent={true}
          // blending={AdditiveBlending}
          uniforms={{
            uTime: { value: 0 },
            waterColor: {
              value: new THREE.Color('#52a7f7').convertLinearToSRGB(),
            },
            waterHighlight: {
              value: new THREE.Color('#b3ffff').convertLinearToSRGB(),
            },
            offset: {
              value: 0.5,
            },
            contrast: {
              value: 3.1,
            },
            brightness: {
              value: 1,
            },
            uHeight: {
              value: thickness,
            },
          }}
        />
      </mesh>
    </group>
    )
}