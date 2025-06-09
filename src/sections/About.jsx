import {useState} from 'react'
import Globe from "react-globe.gl"
import Button from "../components/Button.jsx"

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopied = () => {
    navigator.clipboard.writeText("arhumfaysal07@gmail.com")
     setHasCopied(true);
     setTimeout(() => {
      setHasCopied(false);

     }, 2000)
  }

  return (
    <section className='c-space my-20' id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-1 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className='grid-container'>
                    <img src="./assets/grid1.png" alt='grid-1' className='w-full sm:h-[576px] h-fit object-contain'>

                    </img>
                     <p className="grid-headtext ">Hi I am Arhum!</p>
                <p className="grid-subtext ">I am a Passionate Web Developer who love to create new things and take on any challenges! I am a student at McMaster University currently in their Computer Science Program. I love learning Mathematics and applying my skills to Machine Learning Projects as well as teaching others those skills as well. </p>

                </div>
               
            </div>
            <div className="col-span-2 xl:row-span-3">
              <div className="grid-container">
                <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[376px] h-fit object-contain" />
                <p className="grid-headtext">My Tech Stack</p>
                <p className="grid-subtext"> I specialize in a variety of programming languages and frameworks for front-end and back-end development such as ReactJS, TypeScript, Three.js, and TailwindCSS.
                  I'm also beginning my journey in Python for Data Analytics and building Machine Learning models. 
                </p>
              </div>

            </div>
        </div>
        <div className="col-span-1 xl:row-span-1 mt-3 mb-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

               <Globe
                height={326}
                width={326}
                backgroundColor="rgba(40, 119, 255, 0.33)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    
              />
            </div>
                          <p className="grid-headtext">Flexible with Time Zones and Locations</p>
                          <p className="grid-subtext"> I'm based in Milton, ON, Canada with remote work available</p>
                          <Button name="Contact Me"  isBeam containerClass="w-full mt-10"/>


          </div>
          <div className="xl:col-span-2 xl:row-span-3 my-3">
            <div className="grid-container">
              <img src='/assets/grid3.png' alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
              <div>
                <p className='grid-headtext'>My Passion for Coding</p>
                <p className="grid-subtext"> I'm always ready to solve problems and build applications through code. I may not know everything but I'm ready to give any challenge my best effort and problem solve things along the way 😄 </p>
              </div>
            </div>

          </div>

          <div className="xl:col-span-1 xl:row-span-2 my-2">
            <div className="grid-container">
              <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[420px] sm:h-[276px] h-fit object-cover sm:object-top my-4" />
              <div className='space-y-2'>
                <p className='grid-subtext '>
                  Contact Me
                </p>
                <div className="copy-container" onClick={handleCopied}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                </div>
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>arhumfaysal07@gmail.com</p>

              </div>

            </div>


          </div>
        </div>
    </section>
  )
}

export default About;