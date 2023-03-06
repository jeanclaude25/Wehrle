import { OrbitControls, Stage} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense, useRef } from 'react'
// import Placeholder from './Placeholder.js'
import Effects from './Effects.jsx'
import Watch from './Watch.js'
import Model from './Wehrle_cuve.jsx'
import Wehrle_text from './Wehrle_text.jsx'
// import { useFrame } from '@react-three/fiber'

export default function Experience()
{
    const orbitRef = useRef();

    // useFrame((state) => {
    //     console.log(state.camera.position)
    //     // console.log(orbitRef.current.position0)
    // })

    return <>

        <Perf position="top-left" />

        <color args={ [ '#fff' ] } attach="background" />

        <OrbitControls ref={orbitRef} makeDefault regress/>

        {/* <directionalLight castShadow position={ [ 0, 10, 0 ] } intensity={ 10.5 } shadow-normalBias={ 0.04 } /> */}
        {/* <ambientLight intensity={ 0.5 } /> */}


        <Suspense fallback={<></>}>
        
            <Stage 
                    adjustCamera = {false}
                    intensity = {0.4}
                    shadows = {false}
                    preset = 'portrait'
                    environment="forest">

            <Model/>
            <Wehrle_text/>
            
            </Stage>
            
            {/* <CubeSphere/> */}
        </Suspense>
        

        {/* <Effects /> */}
    </>
}