import React from 'react'
import Instagram from "../assets/insta.png"
import Linkedin from "../assets/linkedin.png"
import Gmail from "../assets/gmail.png"
import moment from 'moment/moment'

function Footer() {
  return (
    <div className='bg-neutral-700 flex flex-col justify-center items-center py-4'>
        <p className='text-[14px] text-neutral-300'>Copyright &copy; {moment().format('YYYY')} by <span className='font-semibold text-blue-500'>Aditya Widyatmoko</span>. All rights reserved.</p>
        {/* <p className='text-sm text-neutral-100'>Allright Reserved</p> */}
        <div className="flex gap-2 mt-4">
            <img srcSet={Gmail} alt="gmail" className='w-6 h-6 grayscale hover:grayscale-0 transition duration-700'/>
            <img srcSet={Instagram} alt="instagram" className='w-6 h-6 grayscale hover:grayscale-0 transition duration-700'/>
            <img srcSet={Linkedin} alt="linkedin" className='w-6 h-6 grayscale hover:grayscale-0 transition duration-700'/>
        </div>
    </div>
  )
}

export default Footer