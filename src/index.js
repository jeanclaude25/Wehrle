import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { isMobile } from './store'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        gl={{
            powerPreference: "high-performance",
            antialias: true
        }}
        camera={ {
            far: 1000,
            near: 0.1,
            fov: 31.42,
            position: [-340.48, 153.65, 245.87],
            rotation: [-0.52, -0.98, -0.44]
            // lookAt:[0,1,0]
        } }
        dpr={[1,2]}
        performance= {{ min: 0.2 }}
    >
        <Experience />
    </Canvas>
)
