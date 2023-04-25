import { useControls } from "leva";
import { cameraState } from "../store";

export default function Debug(){
    const controls = useControls("Camera Target MembraneBioreactor", {
        targetX: {
                value: 10, min: -80, max: 80, step: 0.01,
                onChange: (value) => cameraState.pageData.page_4.cameraTarget[0] = value,
                },
        targetY: {
                value: 8, min: -80, max: 80, step: 0.01,
                onChange: (value) => cameraState.pageData.page_4.cameraTarget[1] = value,
                },
        targetZ: {
                value: 35, min: -80, max: 80, step: 0.01,
                onChange: (value) => cameraState.pageData.page_4.cameraTarget[2] = value,
                },
      
        positionX: {
                    value: -10, min: -1000, max: 1000, step: 0.01,
                    onChange: (value) => {
                      cameraState.pageData.page_4.cameraPosition[0] = value;
                      },
                    },
        positionY: {
                    value: 8, min: -1000, max: 1000, step: 0.01,
                    onChange: (value) => {
                      cameraState.pageData.page_4.cameraPosition[1] = value;
                    }
                    },
        positionZ: {
                    value: 70, min: -1000, max: 1000, step: 0.01,
                    onChange: (value) => {
                      cameraState.pageData.page_4.cameraPosition[2] = value;
                    }
                    }
      });

    return<></>
}