import * as THREE from 'three'
import { useEffect, useState } from "react";
import { cameraState } from "../store";
import { useSnapshot } from "valtio";


export default function MouseMove({orbitRef, allow}) {
    const snap = useSnapshot(cameraState);

    function moveCameraByMouse(offsetX, offsetY) {
        const sensitivity = 0.2; // Ajustez la sensibilité pour contrôler la vitesse de déplacement de la caméra
        const maxOffset = 50; // Ajustez cette valeur pour contrôler la distance maximale de déplacement de la caméra
      
        const newPositionX = snap.cameraInitialPosition[0] + (offsetX * sensitivity * maxOffset);
        const newPositionY = snap.cameraInitialPosition[1] - (offsetY * sensitivity * maxOffset);
        cameraState.cameraPosition[0] = newPositionX;
        cameraState.cameraPosition[1] = newPositionY;
      }
      
      
      
      useEffect(() => {
        const handleMouseMove = (e) => {
          const halfWidth = window.innerWidth / 2;
          const halfHeight = window.innerHeight / 2;
          const offsetX = (e.clientX - halfWidth) / halfWidth;
          const offsetY = (e.clientY - halfHeight) / halfHeight;
      
          if (allow) {
            moveCameraByMouse(offsetX, offsetY);
          }
        };
      
        if (allow) {
          window.addEventListener("mousemove", handleMouseMove);
        } else {
          window.removeEventListener("mousemove", handleMouseMove);
        }
      
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, [allow]);
      

      
    return(
        <>
        
        </>
    )
}