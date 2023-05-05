const randomVector = (r) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r]
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const data = Array.from({ length: 1000 }, (r = 10) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const debug_line = '?debug'

const pageData = {
    page_1:{
      name: "intro",
      cameraTarget: [0, 0, 0],
      cameraPosition: [-300, 140, 100],

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

export { data, isMobile, debug_line, pageData }