import { Html, Text } from '@react-three/drei';

export default function Wehrle_text (){
    const distanceFactor = 220;

    return(
        <>
        <Html
        position={[18.19, 23.21, 89.65]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img alt='plus' src='./img/Button_grau.png'/>
            All benefits at a glance
        </Html>

        <Html
        position={[-54.85, 7.54, 7.3]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img alt='plus' src='./img/Button_grau.png'/>
            Explore WEHRLE's adaptive process
        </Html>

        <Html
        position={[-41.19, 7.54, 44.87]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img alt='plus' src='./img/Button_grau.png'/>
            Intelligent modular plant design
        </Html>

        <Html
        position={[-0.46, 7.54, 58.54]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img alt='plus' src='./img/Button_grau.png'/>
            Easy to upgrade to water re-use
        </Html>

        <Html
        position={[24.23, 44.62, 100.45]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img alt='plus' src='./img/Button_grau.png'/>
            Friendly remote handling
        </Html>

        {/* <Text
      position={[24.23, 44.62, 100.45]}
      rotation={[0,-Math.PI/2,0]}
      scale={[generalScale,generalScale,generalScale]}
      maxWidth={maxWidth}
            textAlign="center"
      font="./fonts/Font_Gibson/GibsonRegular.OTF"
      color={textColor}
      >
        Friendly remote handling
        </Text> */}
</>
    )
}