import { Environment } from '@react-three/drei'

export const Lights = () => {

    return(

        <>
        <ambientLight/>
        <directionalLight/>
        <pointLight/>
                    
        <Environment
            adjustCamera = {false}
            intensity = {0.4}
            shadows = {false}
            preset = 'forest'/>
    </>
    )
}