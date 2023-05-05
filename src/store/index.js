import { proxy, useSnapshot } from "valtio";

export const cameraState = proxy({
  cameraTarget: [0, 0, 0],
  cameraPosition: [-626.72, 166.3, 186.1],
  cameraInitialPosition: [-626.72, 166.3, 186.1]
});

const winHash = proxy({
  hash: window.location.hash,
});

window.addEventListener("hashchange",()=>{winHash = window.location.hash})
export const useLocationHash = () => {
  const {hash} = useSnapshot(winHash)
  return hash
}