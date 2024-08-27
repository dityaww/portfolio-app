import React from 'react'
import { useState } from 'react'
import { DarkMode } from '../context/DarkMode'
import { useContext } from 'react'

function Experience() {
    const [activeTabs, setActiveTabs] = useState('tab1')
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const handleClick = (tabId) => {
        setActiveTabs(tabId)
    }
return (
    <div className="container mx-auto mb-0">
        <div className="flex flex-col mb-5" data-aos="fade-right" data-aos-duration="1000">
            <h1 className={`text-2xl font-extrabold font-caveat ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>Experience</h1>
            <hr className='border-2 border-blue-600 w-10 rounded-full lg:ml-4'/>
        </div>    
        <div className="mb-5" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='200'>
            <button
                className={`py-2 px-4 ${activeTabs === 'tab1' ? 'text-blue-500 border-b-2 border-blue-500 font-semibold' : 'text-gray-600'} focus:outline-none transition duration-1000`}
                onClick={() => handleClick('tab1')}
                >
                Education
            </button>
            <button
                className={`py-2 px-4 ${activeTabs === 'tab2' ? 'text-blue-500 border-b-2 border-blue-500 font-semibold' : 'text-gray-600'} focus:outline-none transition duration-1000`}
                onClick={() => handleClick('tab2')}
                >
                Experience
            </button>
        </div>
        <div className={`${activeTabs !== 'tab1' ? "hidden" : "inline-block"}`}>
            <ol className="relative border-s border-gray-200">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Apr 2024</time>
                    <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Universitas Dian Nuswantoro</h2>
                    <p className='text-gray-400 mb-3 italic'>Bachelors of Computer Science</p>
                    <p className={`mb-4 text-base font-normal ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    I'm a graduate of Dian Nuswantoro University, Informatics Engineering study program, where I succeeded in obtaining a Bachelor's degree in Computer Science in 2024. During my studies, I focused on developing skills and knowledge in the field of information technology, which includes programming, data analysis and system development. For a deeper focus, I focus on Frontend Website Development and also UIUX Design. My education has provided a strong foundation for my career in the technology industry, preparing me to face challenges and innovations in the world of computers and information technology.
                    </p>
                    {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a> */}
                </li>
                {/* <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                    <h2 class="text-lg font-semibold text-gray-900">Marketing UI design in Figma</h2>
                    <p class="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li> */}
            </ol>
        </div>
        <div className={`${activeTabs !== 'tab2' ? "hidden" : "inline-block"}`}>
            <ol className="relative border-s border-gray-200">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Apr 2024</time>
                    <h2 className="text-lg font-semibold text-gray-900">PT Evolusi Bisnis Digital</h2>
                    <p className='text-gray-400 mb-3 italic'>Web Programmer</p>
                    <ul className="list-image-checkmark ms-4">
                        <li className="text-gray-600">
                            Collaborate with Backend Developer as Frontend Developer to create a responsive user interface using ReactJS.
                        </li>
                        <li className="text-gray-600">
                            Serve as a note takerand create MOM (Minutes of Meeting) documents during meetings with clients.
                        </li>
                        <li className="text-gray-600">
                            Create test script documents used for SIT, UAT, and TO activities
                        </li>
                        {/* <li className="text-gray-600">

                        </li> */}
                        {/* <li className="text-gray-600"></li> */}
                    </ul>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                    <h2 className="text-lg font-semibold text-gray-900">PT. Ruang Raya Indonesia</h2>
                    <p className='text-gray-400 mb-3 italic'>Front-End Engineering</p>
                    <ul className="list-image-checkmark ms-4">
                        <li className="text-gray-600">
                            Mempelajari Pengelolaan dan Manajemen Proyek Perangkat Lunak
                        </li>
                        <li className="text-gray-600">
                            Mempelajari dasar pembuatan website (HTML, CSS)
                        </li>
                        <li className="text-gray-600">
                            Mempelajari library CSS (Tailwind CSS)
                        </li>
                        <li className="text-gray-600">
                            Mempelajari dasar pemrograman Javascript seperti function, conditional, asynchronous Javascript, fetching data API (fetch, dan axios), menampilkan data dengan metode manipulasi DOM, REST API,
                        </li>
                        <li className="text-gray-600">
                            Mempelajari state management dengan menggunakan redux (redux-toolkit)
                        </li>
                        <li className="text-gray-600">
                            Mempelajari library Javascript ReactJS seperti react hooks, react router, state management redux dan context, fetching data API dengan axios dan fetch
                        </li>
                        <li className="text-gray-600">
                            Proyek: Aplikasi Ruang Perpus untuk mengelola data buku dengan sistem CRUD, Website Portfolio, Aplikasi Student Portal
                        </li>
                    </ul>
                    {/* <p class="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                    <h2 className="text-lg font-semibold text-gray-900">PT. Impactbyte Teknologi Edukasi (Skilvul)</h2>
                    <p className='text-gray-400 mb-3 italic'>Front-End Development</p>
                    <p className="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="mb-10 ms-4 siz">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                    <h2 className="text-lg font-semibold text-gray-900">Digital Talent Scholarship KOMINFO X Cisco Networking Academy</h2>
                    <p className='text-gray-400 mb-3 italic'>Fresh Graduate Academy Big Data using Python</p>
                    <p className="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                    <h2 className="text-lg font-semibold text-gray-900">PT Sadasa Academy Indonesia</h2>
                    <p className='text-gray-400 mb-3 italic'>Fresh Graduate Academy Big Data using Python</p>
                    <ul className='list-image-checkmark ms-4'>
                        <li className='text-gray-600'>
                            Mempelajari penggunaan R Programming
                        </li>
                        <li className='text-gray-600'>
                            Mempelajari preprocessing analisis media sosial
                        </li>
                        <li className='text-gray-600'>
                            Mempelajari penggunaan Igraph dan Gephi
                        </li>
                        <li className='text-gray-600'>
                            Mempelajari konsep Centrality dan Modularity
                        </li>
                    </ul>
                    {/* <p class="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Experience