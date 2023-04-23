import { Html, Text } from '@react-three/drei';

export default function Wehrle_text (props){
    const distanceFactor = 220;


    const click = (e) => {
        // console.log(e)
        props.props(e)
     }

    return(
        <>
        
        <Html
        position={[-54.85, 7.54, 7.3]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img
            onClick={() => click("EasyUpgrade")}
            alt='plus' src='./img/Button_grau.png'/>
            Easy upgrade to water re-use
        </Html>

        <Html
        position={[-41.19, 7.54, 44.87]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img
            onClick={() => click("SmartAdaptive")}
            alt='plus' src='./img/Button_grau.png'/>
            Smart adaptive process
        </Html>

        <Html
        position={[-0.46, 7.54, 58.54]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img
            onClick={() => click("MembraneBio")}
            alt='plus' src='./img/Button_grau.png'/>
            Membrane Bioreactor
        </Html>

        <Html
        position={[24.23, 44.62, 100.45]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img
            onClick={() => click("friendlyWehrle")}
            alt='plus' src='./img/Button_grau.png'/>
            Friendly remote handling
        </Html>

</>
    )
}