import { useDepthBuffer } from '@react-three/drei'
import { SMAA, EffectComposer, Bloom, Vignette, Noise, SSAO, Depth, DepthOfField } from '@react-three/postprocessing'
import { isMobile } from './store/store'
import { BlendFunction } from 'postprocessing'
// import { useControls } from 'leva'



export default function Effects()
{
    // const param=useControls({
    //     intensity:{value:1.0, min:0., max: 500},
    //     luminanceInfluence:{value:1.0, min: 0., max: 50.},
    //     samples:{value:1, min: 0, max: 50, step: 1},
    //     rings:{value:1.0, min: 0., max: 50.},
    //     distanceThreshold:{value:1.0, min: 0., max: 50.},
    //     distanceFalloff:{value:1.0, min: 0., max: 50.}


    
    // })
    const depthBuffer = useDepthBuffer()
    return <EffectComposer>

        <SMAA />
        <Noise
        premultiply
        opacity={0.5}
        blendFunction={ BlendFunction.SOFT_LIGHT }
        />
        {/* <Bloom mipmapBlur intensity={1.5}
        luminanceThreshold={0.9} /> */}

{/* <DepthOfField
          focusDistance={0.01}
          focalLength={0.005}
          bokehScale={2}
        //   height={480}
        /> */}
        <Bloom intensity={.2}
        luminanceThreshold={0.8} 
        luminanceSmoothing={0.1} />
        

        <Vignette offset={0.2} darkness={0.6} />


        
        
        
        
    </EffectComposer>
}