import { proxy } from "valtio";

export const cameraState = proxy({
  cameraTarget: [0, 0, 0],
  cameraPosition: [-626.72, 166.3, 186.1],
  cameraInitialPosition: [-626.72, 166.3, 186.1],
  cameraType: "perspective"
});