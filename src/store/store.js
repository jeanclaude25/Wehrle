const randomVector = (r) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r]
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const data = Array.from({ length: 1000 }, (r = 10) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const debug_line = '?debug'


const pageData = {
  Intro:{
    hash: "#intro_wehrle.html",
    name: "Intro",
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
      textContent: "Intro",
      draggable: false
    },
    
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
      camera:{
        cameraTarget: [0, 0, 0],
        cameraPosition: [-300, 140, 100],
      },
      button:{
        position: [-41.19, 7.54, 44.87],
        wrapperClass: "html3dText",
        distanceFactor: 220,
        src: "./img/Button_grau.png",
        alt: "plus",
        textContent: "Smart adaptive process",
        draggable: false
      },
      video:{
          width: 30,
          height: 40,
          position: [-41.19, 7.54, 44.87],
          src: "/path/to/your/video.mp4",
      }
    },
  friendlyWehrle:{
      hash: "#friendly_remote_handling.html",
      name: "friendlyWehrle",
      camera:{
        cameraTarget: [0, 0, 0],
        cameraPosition: [24.23, 40.62, 100.45],
      },
      button:{
        position: [24.23, 44.62, 100.45],
        wrapperClass: "html3dText",
        distanceFactor: 220,
        src: "./img/Button_grau.png",
        alt: "plus",
        textContent: "Friendly remote handling",
        draggable: false
      },
      video:{
          width: 30,
          height: 40,
          position: [24.23, 44.62, 100.45],
          src: "/path/to/your/video.mp4",
      }
      
    },
  MembraneBio:{
      hash: "#membrane_bioreactor.html",
      name: "MembraneBioreactor",
      camera:{
        cameraTarget: [10, 8, 35],
        cameraPosition: [-10, 8, 70],
      },
      button:{
        position: [-0.46, 7.54, 58.54],
        wrapperClass: "html3dText",
        distanceFactor: 220,
        src: "./img/Button_grau.png",
        alt: "plus",
        textContent: "Membrane Bioreactor",
        draggable: false
      },
    },
  heavyDutyBiology:{
    hash: "#heavy_duty_biology.html",
    name: "heavyDutyBiology",
    camera: {
      cameraTarget: [10, 8, 35],
      cameraPosition: [15, 8, 20],
    },
    button:{
      position: [15, 8, 20],
      wrapperClass: "html3dText",
      distanceFactor: 120,
      src: "./img/Button_grau.png",
      alt: "plus",
      textContent: "Heavy Duty Biology",
      draggable: false
    },
    
  },
  ultraFiltration:{
    hash: "#ultra_filtration.html",
    name: "ultraFiltration",
    camera:{
      cameraTarget: [10, 8, 35],
      cameraPosition: [-10, 8, 70],
    },
    button:{
      position: [8, 0, 45],
      wrapperClass: "html3dText",
      distanceFactor: 120,
      src: "./img/Button_grau.png",
      alt: "plus",
      textContent: "Ultrafiltration Membranes",
      draggable: false
    },
    video:{
        width: 30,
        height: 40,
        position: [8, 0, 45],
        src: "/path/to/your/video.mp4",
    }
  },
  cleaning:{
    hash: "#cleaning.html",
    name: "cleaning",
    camera:{
      cameraTarget: [10, 8, 35],
      cameraPosition: [-10, 8, 70],
    },
    button:{
      position: [8, 0, 60],
      wrapperClass: "html3dText",
      distanceFactor: 120,
      src: "./img/Button_grau.png",
      alt: "plus",
      textContent: "Cleaning",
      draggable: false
    },
    video:{
        width: 30,
        height: 40,
        position: [8, 0, 60],
        src: "/path/to/your/video.mp4",
    }
  },
  
  }

export { data, isMobile, debug_line, pageData }