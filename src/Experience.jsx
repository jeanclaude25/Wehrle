import { Canvas } from '@react-three/fiber'
import WebGLCanvas from './WebGLCanvas'
import { cameraState } from './store/index.js'
import { useEffect, useState, StrictMode } from 'react';

export default function Experience()
{
   
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowLogo(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return <>
        {/* {window.location.href.includes(debug_line)?<Leva/>:<Leva/>} */}

        {showLogo ? (
        <div className='introLogo'>
          <img src="./img/logo.png" alt="Logo" />
        </div>
      ) : null}

        <StrictMode>
        <Canvas
        shadows
        gl={{
            powerPreference: "high-performance",
            antialias: true
        }}
        camera={ {
            far: 2000,
            near: 0.5,
            fov: 31.42,
            position: cameraState.cameraInitialPosition,
            // rotation: [-0.52, -0.98, -0.44]
            // lookAt:[0,1,0]
        } }
        dpr={[1,2]}
        performance= {{ min: 0.2 }}
    >
        <WebGLCanvas/>
    </Canvas>
    </StrictMode>
    <img
    className='logo_wehrle'
    alt='logo_wehrle' src='./img/logo.png'
    draggable='false'/>

<h1 className='IntroTitle'>
    <span className='mbrIndustry'>MBR INDUSTRY</span> - <br/>
    <span className='biomembrat'>BIOMEMBRAT FOR INDUSTRIES</span>
</h1>


    {/* <img
    className='return_button'
    onClick={() => click("benefitsWehrle")}
    alt='plus' src='./img/Button_grau_minus.png'/> */}

    </>
}