import { Canvas } from '@react-three/fiber'
import WebGLCanvas from './WebGLCanvas'
import { cameraState } from './store/index.js'
import { useEffect, useState, StrictMode } from 'react';
import { useRef } from 'react';

export default function Experience()
{
   
    const [showLogo, setShowLogo] = useState(true);
    const videoRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowLogo(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return <>

        {showLogo ? (
        <div className='introLogo'>
          <img src="./img/logo.png" alt="Logo" draggable='false'/>
        </div>
      ) : 
      <>
      <img
    className='logo_wehrle'
    alt='logo_wehrle' src='./img/logo.png'
    draggable='false'/>

    <h1 className='IntroTitle'>
        <span className='mbrIndustry'>MBR INDUSTRY</span> - <br/>
        <span className='biomembrat'>BIOMEMBRAT FOR INDUSTRIES</span>
    </h1>

    <video ref={videoRef} src={""} autoPlay loop muted style={{ display: "none" }} />
      </>
      }

      <StrictMode>
        <Canvas
        className='canvas'
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
        } }
        dpr={[1,2]}
        performance= {{ min: 0.2 }}
        >
        <WebGLCanvas/>
    </Canvas>
    </StrictMode>
    


    {/* <img
    className='return_button'
    onClick={() => click("benefitsWehrle")}
    alt='plus' src='./img/Button_grau_minus.png'/> */}

    </>
}