import { OrbitControls, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense, useRef } from 'react'
// import Placeholder from './Placeholder.js'
import Effects from './Effects.js'
import CubeSphere from './CubeSphereOb.js'
import Wehrle_curve from './Wehrle_cuve.js'
// import { useFrame } from '@react-three/fiber'

export default function Experience()
{
    const orbitRef = useRef();

    // useFrame((state) => {
    //     console.log(state.camera)
    //     console.log(orbitRef.current)
    // })

    return <>

        <Perf position="top-left" />

        <color args={ [ '#3a322c' ] } attach="background" />

        <OrbitControls ref={orbitRef} makeDefault regress/>

        <directionalLight castShadow position={ [ 0, 10, 0 ] } intensity={ 10.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 0.5 } />


        <Suspense fallback={<></>}>
        
            <Stage 
                    adjustCamera = {false}
                    intensity={10.5}
                    shadows="contact"
                    preset='portrait'
                    environment="city">

            <Wehrle_curve/>
            </Stage>
            {/* <CubeSphere/> */}
        </Suspense>
        

        {/* <Effects /> */}
    </>
}