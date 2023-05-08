import { Html, Text } from '@react-three/drei';
import VideoPlane from './VideoPlane';
import { pageData } from '../store/store';
import { changeHash, pagesState } from '../store';
import { useSnapshot } from 'valtio';
import React from 'react';

export default function Wehrle_text (){
    
    const pagesSnap = useSnapshot(pagesState);


    const click = (e) => {
        Object.keys(pageData).map((key) => {
            if(pageData[key].name === e){
                changeHash(pageData[key])
            }
        })
     }
 

    return(
        <>
        {/* {pagesSnap.IntroTextVisibility?<></>:<></>} */}
        
        {Object.keys(pageData).map((key) => {
        return (
            <React.Fragment key={pageData[key].name}>
            <Html
            key={pageData[key].name}
            position={pageData[key].button.position}
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
            </React.Fragment>
        );
      })}




</>
    )
}