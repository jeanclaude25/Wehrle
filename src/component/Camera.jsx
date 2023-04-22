import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";


export default function Camera() {
    const orbitRef = useRef();
    
    return(<>
    <OrbitControls ref={orbitRef} makeDefault regress/>
    </>)
}