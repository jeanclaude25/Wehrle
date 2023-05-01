import { Html, Text } from '@react-three/drei';
import VideoPlane from './VideoPlane';

export default function Wehrle_text (props){
    const distanceFactor = 220;
    const distanceFactorLevel2 = 120;



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
            draggable={false}
            onClick={() => click("EasyUpgrade")}
            alt='plus' src='./img/Button_grau.png'/>
            Easy upgrade to water re-use
        </Html>
        <VideoPlane url="/path/to/your/video.mp4" width={40} height={30} pos={[-54.85, 7.54, 7.3]}/>


        <Html
        position={[-41.19, 7.54, 44.87]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img
            draggable={false}
            onClick={() => click("SmartAdaptive")}
            alt='plus' src='./img/Button_grau.png'/>
            Smart adaptive process
        </Html>
        <VideoPlane url="/path/to/your/video.mp4" width={40} height={30} pos={[-41.19, 7.54, 44.87]}/>


        <Html
        position={[-0.46, 7.54, 58.54]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactor}
        center>
            <img
            draggable={false}
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
            draggable={false}
            onClick={() => click("friendlyWehrle")}
            alt='plus' src='./img/Button_grau.png'/>
            Friendly remote handling
        </Html>
        <VideoPlane url="/path/to/your/video.mp4" width={40} height={30} pos={[24.23, 44.62, 100.45]}/>



        <Html
        position={[15, 8, 20]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactorLevel2}
        center>
            <img
            draggable={false}
            onClick={() => click("heavyDuty")}
            alt='plus' src='./img/Button_grau.png'/>
            Heavy Duty Biology
        </Html>

        <Html
        position={[8, 0, 45]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactorLevel2}
        center>
            <img
            draggable={false}
            onClick={() => click("ultraFiltration")}
            alt='plus' src='./img/Button_grau.png'/>
            Ultrafiltration Membranes
        </Html>
        <VideoPlane url="/path/to/your/video.mp4" width={16} height={12} pos={[8, 0, 45]}/>


        <Html
        position={[8, 0, 60]}
        wrapperClass="html3dText"
        distanceFactor={distanceFactorLevel2}
        center>
            <img
            draggable={false}
            onClick={() => click("cleaning")}
            alt='plus' src='./img/Button_grau.png'/>
            Cleaning
        </Html>
        <VideoPlane url="/path/to/your/video.mp4" width={16} height={12} pos={[8, 0, 60]}/>

</>
    )
}