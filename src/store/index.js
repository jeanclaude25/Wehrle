import { proxy } from "valtio";

export const cameraState = proxy({
  cameraTarget: [0, 0, 0],
  cameraPosition: [-626.72, 166.3, 186.1],
  cameraInitialPosition: [-626.72, 166.3, 186.1],

  pageData: {
    page_1:{
      name: "intro",
      cameraTarget: [0, 0, 0],
      cameraPosition: [-626.72, 166.3, 186.1],

    },
    page_2:{
      name: "Easy upgrade",
      // cameraTarget: [0, 0, 0],
      // cameraPosition: [-626.72, 166.3, 186.1],
      
    },
    page_3:{
      name: "Adaptive process",
      // cameraTarget: [0, 0, 0],
      // cameraPosition: [-626.72, 166.3, 186.1],
      
    },
    page_4:{
      name: "Membrane Bioreactor",
      cameraTarget: [10, 8, 35],
      cameraPosition: [-10, 8, 70],
      
    }
  }
});
