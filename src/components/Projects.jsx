import React from 'react'
import Porto from '../assets/projects/portfolio.jpg'
import Reservation from '../assets/projects/reservation.png'
import SPay from '../assets/projects/spay.jpg'
import BMI from '../assets/projects/bmi.jpg'
import AYOBANTU from '../assets/projects/ab.jpg'
import Movies from '../assets/projects/movies.jpg'
import Batik from '../assets/projects/batik.jpg'

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
                    <div className="flex gap-2 items-center hover:underline hover:underline-offset-2 w-fit">
                      <a href="http://adityawmoko.vercel.app" target="_blank" rel="noopener noreferrer" className='text-blue-500 font-semibold'>view project</a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#1d4ed8" className="size-4 text-red-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={Reservation} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Mount Reservation App</p>
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
                    <div className="flex gap-2 items-center hover:underline hover:underline-offset-2 w-fit">
                      <a href="https://bmi-calc-project.netlify.app" target="_blank" rel="noopener noreferrer" className='text-blue-500 font-semibold'>view project</a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#1d4ed8" className="size-4 text-red-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
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
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={Movies} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Movies App</p>
                    <div className="flex gap-2 mb-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>React JS</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>Tailwind CSS</p>
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>TMDB API</p>
                    </div>
                    <div className="flex gap-2 items-center hover:underline hover:underline-offset-2 w-fit">
                      <a href="https://moviefilms-base.netlify.app" target="_blank" rel="noopener noreferrer" className='text-blue-500 font-semibold'>view project</a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#1d4ed8" className="size-4 text-red-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md w-full">
                <div className="p-6">
                  <img src={Batik} alt="" className='border'/>  
                  <div className="mt-2">
                    <p className='text-2xl font-bold pb-2'>Batik App</p>
                    <div className="flex gap-2">
                      <p className='bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 font-normal'>PHP</p>
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