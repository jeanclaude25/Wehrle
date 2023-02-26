// import * as THREE from 'three'

import { shaderMaterial } from '@react-three/drei'
import vertexShader from './CubeSphere_vertex.js'
import fragmentShader from './CubeSphere_fragment.js'



export const CubeSphereMaterial = shaderMaterial(
    {
        // uTexture: null,
        uAlpha: 0.13,
        // blending: THREE.MultiplyBlending,
        // blending: THREE.Blend,


        transparent: true,
        depthWrite: false,
    },
    vertexShader,
    fragmentShader
)