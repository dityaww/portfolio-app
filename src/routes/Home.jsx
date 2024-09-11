import React from 'react'

// import komponen
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

import People from "../assets/people.png"
import { useContext } from 'react'
import { DarkMode } from '../context/DarkMode'
import Image from '../assets/my-img.png'
import Resume from '../assets/Aditya Widyatmoko-Resume.pdf'
import Blob from '../assets/blob.png'

function Home() {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    console.log(isDarkMode);

  return (
    <div className={`${isDarkMode && 'bg-neutral-700'} transition duration-700 overflow-hidden`}>
        {/* START NAVBAR */}
        <Navbar />
        {/* END NAVBAR */}

        {/* START HERO SECTION */}
        <section className="container lg:mx-auto py-24">
            <div className="flex lg:flex-row flex-col-reverse lg:justify-between relative">
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <p className={`font-sans text-sm ${isDarkMode ? 'text-neutral-200' : 'text-neutral-500'} font-light`}>My <span className='text-red-500 font-bold font-caveat text-2xl'>Name</span></p>
                    <h1 className={`font-alumni-sans font-bold text-7xl uppercase ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>Aditya Widyatmoko</h1>
                    <div className="flex gap-2 mt-3">
                        <p className='text-teal-500 border border-teal-400 px-4 py-1 rounded-full font-semibold text-[13px]'>ReactJS Developer</p>
                        <p className='text-cyan-500 border border-cyan-400 px-4 py-1 rounded-full font-semibold text-[13px]'>Front-End Web Developer</p>
                    </div>
                    <div className="mt-3">
                        <p className={`${isDarkMode ? 'text-neutral-300' : 'text-neural-500'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio accusantium reprehenderit ab ullam incidunt non rerum sit, nesciunt cum doloremque, id, adipisci voluptate odit ipsum ea voluptatem illum tempore?</p>
                    </div>
                    <div className="flex gap-3 mt-5">
                        {/* <button className='px-6 transition duration-700 hover:scale-[1.05] py-2 text-center text-sm bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-md shadow-md shadow-violet-500/50'>Connect with me</button> */}
                        <a href={Resume} target='_blank' className='px-7 transition duration-700 hover:scale-[1.05] py-2 text-center text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md uppercase shadow-md shadow-indigo-500/50 flex items-center gap-2 group'>
                            <p>Resume</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="w-full h-full">
                        <div className="bg-blue-500 pt-10 overflow-hidden rounded-full w-72 h-72 top-2 right-4 absolute">
                            <img src={Image} alt="" />
                        </div>
                        <div className="w-[20rem] top-0 right-2 absolute -z-10 opacity-70">
                            <img src={Blob} alt="" />
                        </div>
                        <div className="border-2 border-blue-500 rounded-full w-72 h-72 lg:top-0 right-0 -z-40 absolute"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* END HERO SECTION */}

        {/* START ABOUT ME */}

        <About />

       {/* END ABOUT ME */}

        {/* START EXPERIENCE */}
        <Experience />
        <Skills />
        {/* END EXPERIENCE */}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f5f5f5" fillOpacity="1" d="M0,224L21.8,192C43.6,160,87,96,131,90.7C174.5,85,218,139,262,170.7C305.5,203,349,213,393,224C436.4,235,480,245,524,229.3C567.3,213,611,171,655,181.3C698.2,192,742,256,785,240C829.1,224,873,128,916,112C960,96,1004,160,1047,181.3C1090.9,203,1135,181,1178,176C1221.8,171,1265,181,1309,170.7C1352.7,160,1396,128,1418,112L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
        </svg>

        <Projects />

        {/* START FOOTER */}
        <Footer />
        {/* END FOOTER */}
    </div>
  )
}

export default Home