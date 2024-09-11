import React from 'react'
import Porto from '../assets/projects/portfolio.jpg'
import Reservation from '../assets/projects/reservation.png'
import SPay from '../assets/projects/spay.jpg'
import BMI from '../assets/projects/bmi.jpg'
import AYOBANTU from '../assets/projects/ab.jpg'

function Projects() {
  return (
    <div className="bg-neutral-100 pb-20">
        <div className="container mx-auto mb-0">
            <div className="flex flex-col mb-5" data-aos="fade-right" data-aos-duration="1000">
                <h1 className='text-2xl font-extrabold font-caveat'>Projects</h1>
                <hr className='border-2 border-blue-600 w-10 rounded-full lg:ml-4'/>
            </div>  
            <div className="grid gap-5 lg:grid-cols-2 grid-cols-1">
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={Porto} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Portfolio Website</p>
                    <div className="flex gap-2 pb-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>ReactJS</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Tailwind CSS</p>
                    </div>
                    <a href="http://adityawmoko.vercel.app" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline hover:underline-offset-2 font-semibold'>view project</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={Reservation} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Reservation App: Ungaran Mount</p>
                    <div className="flex gap-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>React Native</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={SPay} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Sunrise Pay</p>
                    <div className="flex gap-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Code Igniter</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Bootstraps CSS</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>MySQL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={BMI} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>BMI Calculator</p>
                    <div className="flex gap-2 pb-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>HTML</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>CSS Native</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Javascript</p>
                    </div>
                    <a href="https://bmi-calc-project.netlify.app" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline hover:underline-offset-2 font-semibold'>view project</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={AYOBANTU} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Ayo Bantu App</p>
                    <div className="flex gap-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>React JS</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>

            </div> 
        </div>
    </div>
  )
}

export default Projects