import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PlaneGeometry, VideoTexture } from "three";
import * as THREE from 'three'


export default function VideoPlane({ url, width, height, pos }) {
    const videoRef = useRef();
    const meshRef = useRef();
    const { gl } = useThree();
    const [videoTexture, setVideoTexture] = useState();
  
    useEffect(() => {
      if (videoRef.current) {
        const texture = new VideoTexture(videoRef.current);
        setVideoTexture(texture);
      }
    }, [videoRef]);
  
    useFrame(() => {
      if (videoTexture) {
        videoTexture.update(gl);
      }
    });
  
    return (
      <>
        <mesh ref={meshRef} scale={[width, height, 1]} position={pos} rotation={[0,-Math.PI/2,0]}>
          <planeGeometry args={[1, 1]} lookAt={[-626.72, 166.3, 186.1]}/>
          {/* <boxGeometry /> */}
          <meshBasicMaterial transparent={true} opacity={1}/>
          {/* {videoTexture && <meshBasicMaterial map={videoTexture} />} */}
        </mesh>
        
      </>
    );
  }
  