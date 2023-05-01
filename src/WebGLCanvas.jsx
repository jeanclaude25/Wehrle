import * as THREE from 'three'
import { AccumulativeShadows, OrbitControls, RandomizedLight, Stage} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useRef, useState } from 'react'
// import Placeholder from './Placeholder.js'
import Effects from './Effects.jsx'
// import Model from './Wehrle_cuve.jsx'
import Model from './component/Wehrle_cuve_retopo.jsx'
import Wehrle_text from './component/Wehlre_text.jsx'
import WaterOb from './shaderMaterials/WaterOb.js'
import Watch from './Watch.js'
import { debug_line } from './store/store.js'
import Camera from './component/Camera.jsx'
import { Lights } from './component/Lights.jsx'
import { useSnapshot } from "valtio";
import { cameraState } from './store/index.js'
import Debug from './component/Debug.jsx'
import Container from './component/Container.jsx'
import VideoPlane from './component/VideoPlane.jsx'



export default function WebGLCanvas()
{
    const cameraSnap = useSnapshot(cameraState);
    const [startCloseCam, setStartCloseCam] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartCloseCam(true)
            moveCameraTo(cameraState.pageData.page_1.cameraPosition, cameraState.pageData.page_1.cameraTarget)
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    // const orbitRef = useRef();

    // const [exploreWehrle, setExploreWehrle] = useState(false);
    // const [intelligentWehrle, setIntelligentWehrle] = useState(false);
    // const [easyWehrle, setEasyWehrle] = useState(false);
    // const [benefitsWehrle, setBenefitsWehrle] = useState(false);
    // const [friendlyWehrle, setFriendlyWehrle] = useState(false);

    //DEBUG
    
    //   useEffect(()=>{
    //     orbitRef.current.target.x = controls.targetX
    //   },[controls.targetX])
    //   useEffect(()=>{
    //     orbitRef.current.target.y = controls.targetY
    //   },[controls.targetY])
    //   useEffect(()=>{
    //     orbitRef.current.target.z = controls.targetZ
    //   },[controls.targetZ])


    // const resetAllView = () => {
    //     setExploreWehrle(false)
    //     setIntelligentWehrle(false)
    //     setEasyWehrle(false)
    //     setBenefitsWehrle(false)
    //     setFriendlyWehrle(false)
    // }

    
    const moveCameraTo = (position, target) => {
        console.log("move camera")
        cameraState.cameraPosition = position
        cameraState.cameraInitialPosition = position
        cameraState.cameraTarget = target

    }

    const video = (value) => {
        console.log("start video "+ value)
    }

    const goToThis = (e) => {
        console.log("execute " + e)
        switch(e){
            case "MembraneBio": moveCameraTo(cameraState.pageData.page_4.cameraPosition, cameraState.pageData.page_4.cameraTarget)
                break;
            default: video(e);
            break;
            
        }
    }
    // const goToThis = (e) => {
    //     console.log("go to this " + e)
    //     resetAllView()
    //     switch(e){
    //         case "exploreWehrle": 
    //         orbitRef.current.target = new THREE.Vector3(-299, 0, 0);
    //         console.log(orbitRef.current)
    //         orbitRef.current.object.position.set( -638,172,128);
    //         setExploreWehrle(true)
    //             break;

    //         case "intelligentWehrle": 
    //         orbitRef.current.target = new THREE.Vector3(-280, 18.7, 56.1);
    //         orbitRef.current.object.position.set( -638,168,126);
    //         setIntelligentWehrle(true)
    //             break;

    //         case "easyWehrle": 
    //         orbitRef.current.target = new THREE.Vector3(-224, 18.7, 56.1);
    //         setEasyWehrle(true)
    //             break;

    //         case "benefitsWehrle": 
    //         orbitRef.current.target = new THREE.Vector3(-205, 37.4, 74.8);
    //         setBenefitsWehrle(true)
    //             break;

    //         case "friendlyWehrle": 
    //         orbitRef.current.target = new THREE.Vector3(-205, 37.4, 93.5);
    //         setFriendlyWehrle(true)
    //             break;

    //         default: console.log("cas non traité")
    //             break;
    //     }
    // }

    return <>
        {/* {window.location.href.includes(debug_line)?<Leva/>:<Leva/>} */}
       
        <Perf position="top-left" />

        <color args={ [ '#fff' ] } attach="background" />

        <Camera />

        

        <Suspense fallback={<></>}>
        <Container props={startCloseCam}/>
            <Lights/>
            <Model/>
            {startCloseCam?(<Wehrle_text props={goToThis}/>):<></>}
            

            {/* <WaterOb base={0}/> */}
            
        </Suspense>
        

        {/* <Effects /> */}
        <Debug/>
    </>
}