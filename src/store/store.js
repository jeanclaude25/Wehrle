const randomVector = (r) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r]
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const data = Array.from({ length: 1000 }, (r = 10) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const debug_line = '?debug'


const pageData = {
  Intro:{
    hash: "#intro_wehrle.html",
    name: "Intro",
    cameraTarget: [0, 0, 0],
    cameraPosition: [-300, 140, 100],
  },
  EasyUpgrade:{
    hash: "#easy_upgrade_to_water_reuse.html",
    name: "EasyUpgrade",
    camera:{
      cameraTarget: [0, 0, 0],
      cameraPosition: [-300, 140, 100],
    },
    button:{
      position: [-54.85, 7.54, 7.3],
      wrapperClass: "html3dText",
      distanceFactor: 220,
      src: "./img/Button_grau.png",
      alt: "plus",
      textContent: "Easy upgrade to water re-use",
      draggable: false
    },
    video:{
        width: 30,
        height: 40,
        position: [-54.85, 7.54, 7.3],
        src: "/path/to/your/video.mp4",
    }
    //state?
  },
  SmartAdaptive:{
      hash: "#smart_adaptive_process.html",
      name: "SmartAdaptive",
      // cameraTarget: [0, 0, 0],
      // cameraPosition: [-626.72, 166.3, 186.1],
    },
  friendlyWehrle:{
      hash: "#friendly_remote_handling.html",
      name: "friendlyWehrle",
      // cameraTarget: [0, 0, 0],
      // cameraPosition: [-626.72, 166.3, 186.1],
      
    },
  MembraneBio:{
      hash: "#membrane_bioreactor.html",
      name: "Membrane Bioreactor",
      cameraTarget: [10, 8, 35],
      cameraPosition: [-10, 8, 70],
    },
  heavyDutyBiology:{
    hash: "#heavy_duty_biology.html",
    name: "heavyDutyBiology",
    cameraTarget: [10, 8, 35],
    cameraPosition: [-10, 8, 70],
  },
  ultraFiltration:{
    hash: "#ultra_filtration.html",
    name: "ultra Filtration",
    cameraTarget: [10, 8, 35],
    cameraPosition: [-10, 8, 70],
  },
  cleaning:{
    hash: "#cleaning.html",
    name: "cleaning",
    cameraTarget: [10, 8, 35],
    cameraPosition: [-10, 8, 70],
  },
  
  }

export { data, isMobile, debug_line, pageData }