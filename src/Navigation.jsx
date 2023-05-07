import { useCallback, useEffect } from "react";
import { cameraState, changeHash, pagesState, useLocationHash } from "./store";
import { pageData } from "./store/store";

export default function Navigation(){
    const hash = useLocationHash();
    
    const moveCameraTo = useCallback((position, target) => {
        console.log("move camera")
        cameraState.cameraPosition = position
        cameraState.cameraInitialPosition = position
        cameraState.cameraTarget = target
    },[cameraState])

    useEffect(() => {
        const timer = setTimeout(() => {
            //setStartCloseCam(true)
            pagesState.IntroTextVisibility = true;
            pagesState.containerVisibility = true;
            changeHash(pageData.Intro)
            //moveCameraTo(pageData.page_1.cameraPosition, pageData.page_1.cameraTarget)
        }, 10000);

        return () => clearTimeout(timer);
    }, [moveCameraTo]);

    useEffect(()=>{
        console.log("execute " + hash)
        // comparer le hash avec pageData et trouver l'action
    },[hash])


    return(
        <>
        </>
    )
}