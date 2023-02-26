import { Clone } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'

export default function Placeholder(props)
{
        // Curve
        
        const handlePos = [// X, Z, -Y
                            new THREE.Vector3(0, 2.0372, -0.86853),
                            new THREE.Vector3(0, 137975, -1.3441), 
                            new THREE.Vector3(0, 1.4261, -1.6033), 
                            new THREE.Vector3(0, 0.51606, -1.5632), 
                            new THREE.Vector3(0, -0.45248, -0.42935), 
                            new THREE.Vector3(0, -0.21516, 0.98235), 
                            new THREE.Vector3(0, 1.0773, 1.6579),
                            new THREE.Vector3(0, 1.6886, 1.4688), 
                            new THREE.Vector3(0, 2.072, 0.81787)
                            ]
        const curve = useMemo(() => new THREE.CatmullRomCurve3([...handlePos], false, 'centripetal'), [handlePos])
 
        const sample2 = useMemo(() => curve.getPoints(129),[])
        const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(sample2), new THREE.LineBasicMaterial({ color: 0x00ff00 }))
  
    return <mesh { ...props }>
        <boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } />
        <meshBasicMaterial wireframe color="red" />
        <Clone object={line} />
    </mesh>
}