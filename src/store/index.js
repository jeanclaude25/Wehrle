import { proxy } from "valtio";

export const cameraState = proxy({
  cameraTarget: [0, 0, 0],
  cameraType: "perspective"
});