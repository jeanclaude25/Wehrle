import * as THREE from 'three'
import { AccumulativeShadows, OrbitControls, RandomizedLight, Stage} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
// import Placeholder from './Placeholder.js'
import Effects from './Effects.jsx'
import Model from './component/Wehrle_cuve_retopo.jsx'
import Wehrle_text from './component/Wehlre_text.jsx'
import WaterOb from './shaderMaterials/WaterOb.js'
import Camera from './component/Camera.jsx'
import { Lights } from './component/Lights.jsx'
import { useSnapshot } from "valtio";
import { cameraState, pagesState } from './store/index.js'
import Debug from './component/Debug.jsx'
import Container from './component/Container.jsx'
import Navigation from './Navigation.jsx'



export default function WebGLCanvas()
{
    const cameraSnap = useSnapshot(cameraState);
    const pagesSnap = useSnapshot(pagesState);


    return <>
        {/* {window.location.href.includes(debug_line)?<Leva/>:<Leva/>} */}
        <Navigation/>
       
        <Perf position="top-left" />

        <color args={ [ '#fff' ] } attach="background" />

        <Camera />

        

        <Suspense fallback={<></>}>
        <Container visible={pagesSnap.containerVisibility}/>
            <Lights/>
            <Model/>
            {pagesSnap.IntroTextVisibility?(<Wehrle_text />):<></>}
            

            {/* <WaterOb base={0}/> */}
            
        </Suspense>
        

        {/* <Effects /> */}
        {/* <Debug/> */}
    </>
}