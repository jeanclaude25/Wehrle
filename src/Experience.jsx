import * as THREE from 'three'
import { OrbitControls, Stage} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useRef, useState } from 'react'
// import Placeholder from './Placeholder.js'
import Effects from './Effects.jsx'
// import Model from './Wehrle_cuve.jsx'
import Model from './component/Wehrle_cuve_retopo.jsx'
import Wehrle_text from './Wehrle_text.jsx'
import { useControls } from "leva";
import WaterOb from './shaderMaterials/WaterOb.js'
import Watch from './Watch.js'


export default function Experience()
{
    const orbitRef = useRef();

    const [exploreWehrle, setExploreWehrle] = useState(false);
    const [intelligentWehrle, setIntelligentWehrle] = useState(false);
    const [easyWehrle, setEasyWehrle] = useState(false);
    const [benefitsWehrle, setBenefitsWehrle] = useState(false);
    const [friendlyWehrle, setFriendlyWehrle] = useState(false);

    //DEBUG
    const controls = useControls({
        targetX: {value:0, min:-1000, max:1000, step:0.1},
        targetY: {value:0, min:-1000, max:1000, step:0.1},
        targetZ: {value:0, min:-1000, max:1000, step:0.1}

      })
    
      useEffect(()=>{
        orbitRef.current.target.x = controls.targetX
      },[controls.targetX])
      useEffect(()=>{
        orbitRef.current.target.y = controls.targetY
      },[controls.targetY])
      useEffect(()=>{
        orbitRef.current.target.z = controls.targetZ
      },[controls.targetZ])

    // useFrame((state) => {
    //     console.log(state.camera.position)
    // })

    const resetAllView = () => {
        setExploreWehrle(false)
        setIntelligentWehrle(false)
        setEasyWehrle(false)
        setBenefitsWehrle(false)
        setFriendlyWehrle(false)
    }


    const goToThis = (e) => {
        console.log("go to this " + e)
        resetAllView()
        switch(e){
            case "exploreWehrle": 
            orbitRef.current.target = new THREE.Vector3(-299, 0, 0);
            console.log(orbitRef.current)
            orbitRef.current.object.position.set( -638,172,128);
            setExploreWehrle(true)
                break;

            case "intelligentWehrle": 
            orbitRef.current.target = new THREE.Vector3(-280, 18.7, 56.1);
            orbitRef.current.object.position.set( -638,168,126);
            setIntelligentWehrle(true)
                break;

            case "easyWehrle": 
            orbitRef.current.target = new THREE.Vector3(-224, 18.7, 56.1);
            setEasyWehrle(true)
                break;

            case "benefitsWehrle": 
            orbitRef.current.target = new THREE.Vector3(-205, 37.4, 74.8);
            setBenefitsWehrle(true)
                break;

            case "friendlyWehrle": 
            orbitRef.current.target = new THREE.Vector3(-205, 37.4, 93.5);
            setFriendlyWehrle(true)
                break;

            default: console.log("cas non traité")
                break;
        }
    }

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
            {/* <Wehrle_text props={goToThis}/> */}
            </Stage>

            {/* <WaterOb base={0}/> */}
        </Suspense>
        

        {/* <Effects /> */}
    </>
}