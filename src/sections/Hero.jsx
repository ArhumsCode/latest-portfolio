import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Ring from "../components/Ring.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  // const x = useControls("Room", {
  //   scale : {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   },
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 25

  //   },
  //    positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 25

  //   },
  //    positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10

  //    },
  //    rotationX: {
  //       value: 0, 
  //       min: -10,
  //       max: 10

  //    },
  //    rotationY: {
  //       value: 0, 
  //       min: -10,
  //       max: 10
  //    },
  //    rotationZ: {
  //       value: 0, 
  //       min: -10, 
  //       max: 10
  //    },
  // });
  const isSmall = useMediaQuery({maxWidth: 480});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({ minWidth: 770 ,maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  console.log(sizes.deskPosition)
  console.log(sizes.deskScale);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-22 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Arhum! <span className="waving-hand">👋🏽</span>
        </p>
        <p className="hero_tag text-gray_gradient mb-15">
          Building Projects and Learning New Things!
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
    
        <Canvas className="w-full h-[150vh]">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[40, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
            <Room
              //scale={7.5}
              position={sizes.deskPosition}
              rotation={[0, 8.2, 0]}
              scale={sizes.deskScale}
            />
             </HeroCamera>
            <group>
                <Target position={[12,-9,5]} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Ring position={sizes.ringPosition} />
            </group>
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
          
        </Canvas>
      </div>
      <div className='absolute bottom-4 left-0 right-0 w-full z-10 c-space mt-30'>

      <a href="#about" className="w-fit">
        <Button name="Let's Work Together"  isBeam containerClass="sm:w-fit w-full sm:min-w-96 " />

      </a>
      </div>
    </section>
  );
};

export default Hero;
