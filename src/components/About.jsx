import React from 'react'
import { DarkMode } from '../context/DarkMode'
import { useContext } from 'react'

function About() {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

  return (
    <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-gradient-to-r from-cyan-500 to-blue-600'} mb-10`}>
        <div className="container mx-auto py-10">
            <div className="flex flex-col mb-5" data-aos="fade-right" data-aos-duration="1000">
                <h1 className={`text-2xl font-extrabold font-caveat ${isDarkMode ? 'text-white' : 'text-white'}`}>About Me</h1>
                <hr className='border-2 border-yellow-400 w-10 rounded-full lg:ml-4'/>
            </div>
            <div className="flex flex-col gap-2">
                <p className={`${isDarkMode ? 'text-white' : 'text-white'}`} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                    Hello, I'm Aditya Widyatmoko, a passionate web developer with a keen interest in frontend development. 
                    I pursue this career with a dedication to create amazing and captivating user experiences through responsive
                    and innovative design. In terms of experience and skills, I have a solid background in developing reliable 
                    and efficient web applications. My primary expertise lies in frontend development, mastering languages such 
                    as HTML, CSS, and JavaScript. I thrive on the challenges of crafting intuitive and appealing user interfaces.
                </p>         
            </div>
            <br />
            {/* <div className="flex flex-col gap-4">
                <div className="">
                    <label className='font-semibold' htmlFor="">Nama</label>
                    <p>Aditya Widyatmoko</p>
                </div>
                <div className="">
                    <label className='font-semibold' htmlFor="">Age</label>
                    <p>21 years</p>
                </div>
                <div className="">
                    <label className='font-semibold' htmlFor="">Phone</label>
                    <p>+6287834991814</p>
                </div>
                <div className="">
                    <label className='font-semibold' htmlFor="">Email</label>
                    <p>widyatmokoaditya1@gmail.com</p>
                </div>
                <div className="">
                    <label className='font-semibold' htmlFor="">Addres</label>
                    <p>Magelang, Indonesia</p>
                </div>
                <div className="">
                    <label className='font-semibold' htmlFor="">Availability</label>
                    <p>Freelaance, Full-time</p>
                </div>
                <div className="">
                    <label className='font-semibold' htmlFor="">Experience</label>
                    <p>2 years</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default About