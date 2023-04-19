import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { isMobile } from './store'
import { OrbitControls} from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))
const baseCameraPosition = [-626.73, 166.30, 186.11]

root.render(
    <>
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
            position: baseCameraPosition,
            // rotation: [-0.52, -0.98, -0.44]
            // lookAt:[0,1,0]
        } }
        dpr={[1,2]}
        performance= {{ min: 0.2 }}
    >
        <Experience />
    </Canvas>
    <img
    className='logo_wehrle'
    alt='logo_wehrle' src='./img/logo.png'/>

    <img
    className='return_button'
    onClick={() => click("benefitsWehrle")}
    alt='plus' src='./img/Button_grau_minus.png'/>

    </>
)
