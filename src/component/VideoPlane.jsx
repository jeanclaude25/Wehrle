import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PlaneGeometry, VideoTexture } from "three";


export default function VideoPlane({ url, width, height }) {
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
        <mesh ref={meshRef} scale={[width, height, 1]}>
          <planeGeometry args={[1, 1]} />
          {/* {videoTexture && <meshBasicMaterial map={videoTexture} />} */}
        </mesh>
      </>
    );
  }
  