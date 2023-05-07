import { proxy, useSnapshot } from "valtio";

export const cameraState = proxy({
  cameraTarget: [0, 0, 0],
  cameraPosition: [-626.72, 166.3, 186.1],
  cameraInitialPosition: [-626.72, 166.3, 186.1]
});

export const pagesState = proxy({
  IntroTextVisibility: false,
  containerVisibility: true
});

const winHash = proxy({
  hash: window.location.hash,
});

window.addEventListener("hashchange",()=>{winHash.hash = window.location.hash})
export const useLocationHash = () => {
  const {hash} = useSnapshot(winHash)
  return hash
}

export function changeHash(page) {
  //const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${newHash}`;
  history.pushState(page, '', page.hash);
  
  // Appeler la fonction handleHashChange manuellement
  winHash.hash = window.location.hash
}