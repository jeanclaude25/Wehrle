import { Html, Text } from '@react-three/drei';
import VideoPlane from './VideoPlane';
import { pageData } from '../store/store';

export default function Wehrle_text (props){
    const distanceFactor = 220;
    const distanceFactorLevel2 = 120;



    const click = (e) => {
        // console.log(e)
        //props.props(e)
     }
 

    return(
        <>
        {Object.keys(pageData).map((key) => {
        return (
            <>
            <Html
            key={pageData[key].name}
            position={pageData[key].button.posision}
            wrapperClass= {pageData[key].button.wrapperClass}
            distanceFactor={pageData[key].button.distanceFactor}
            center>
                <img
                draggable={pageData[key].button.draggable}
                onClick={() => click(pageData[key].name)}
                alt={pageData[key].button.alt} src={pageData[key].button.src}/>
                {pageData[key].button.textContent}
            </Html>
            {
                pageData[key].video?
            <VideoPlane url={pageData[key].video.src} width={pageData[key].video.width} height={pageData[key].video.height} pos={pageData[key].video.position}/>
            :<></>
            }
            </>
        );
      })}


</>
    )
}