import React, { useState } from 'react'
import { DarkMode } from '../context/DarkMode'
import { useContext } from 'react'

function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

  return (
    <div className={`${isDarkMode ? "bg-neutral-700" : "bg-white"} transition duration-700 lg:shadow-md`}>
        <div className={`container mx-auto py-3`}>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className={`${isDarkMode ? "text-white" : "text-neutral-800"} text-xl font-roboto font-extrabold`}>Aditya</h1>
                </div>
                <div className="hidden lg:block">
                    <ul className='flex gap-8'>
                        <li className={`${isDarkMode ? "text-white hover:text-neutral-200" : "text-neutral-500 hover:text-neutral-900"} text-sm hover:cursor-pointer`}>Home</li>
                        <li className={`${isDarkMode ? "text-white hover:text-neutral-200" : "text-neutral-500 hover:text-neutral-900"} text-sm hover:cursor-pointer`}>About</li>
                        <li className={`${isDarkMode ? "text-white hover:text-neutral-200" : "text-neutral-500 hover:text-neutral-900"} text-sm hover:cursor-pointer`}>Projects</li>
                        <li className={`${isDarkMode ? "text-white hover:text-neutral-200" : "text-neutral-500 hover:text-neutral-900"} text-sm hover:cursor-pointer`}>Certificate</li>
                    </ul>
                </div>
                <div className="flex items-center gap-10">
                    <button onClick={() => setIsDarkMode(!isDarkMode)} id={isDarkMode ? 'dark' : 'light'} aria-label={isDarkMode ? 'darkmode' : 'lightmode'}>
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" className="size-6">
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>                      
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0369a1" className="size-6">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>

                    <button 
                        className={`border-2 py-1 px-4 text-sm rounded-full font-semibold 
                        ${isDarkMode ? "text-white border-neutral-300" : "text-neutral-500 border-neutral-400"} 
                        hover:border-blue-500 hover:bg-blue-500 hover:text-white transition duration-700`}>
                            Contact Us
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar