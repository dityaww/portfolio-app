import { useState } from 'react';
import { ListSkill } from '../utils/ListSkill'

function Skills() {
  return (
    <div className="container mx-auto mb-10">
        <div className="flex flex-col mb-5" data-aos="fade-right" data-aos-duration="1000">
            <h1 className='text-2xl font-extrabold font-caveat'>My Skils</h1>
            <hr className='border-2 border-blue-600 w-10 rounded-full lg:ml-4'/>
        </div> 
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
            {ListSkill?.map((result, index) => (
                <div 
                    key={index} 
                    className="border rounded-lg flex flex-col items-center hover:cursor-pointer hover:bg-gray-100 justify-center py-6" 
                    data-aos='fade-up' 
                    data-aos-delay={result?.delay} 
                    data-aos-duration='1500'
                    >
                    <div className="flex flex-col items-center gap-4">
                        <img srcSet={result?.image} alt="" className='w-20 h-20'/>
                        <p className='text-gray-800 font-bold'>{result?.name}</p>
                    </div>
                </div>    
            ))}
        </div>   
    </div>
  )
}

export default Skills