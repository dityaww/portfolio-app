import React from 'react'
import ErrorPages from '../assets/404.png'
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className="flex flex-col items-center">
                <img srcSet={ErrorPages} alt="no-img" />
                <button 
                    onClick={() => {
                        navigate('/')
                        // console.log("exit")
                    }}
                    className='bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-md transition duration-500 ease-in-out font-semibold'    
                >Go Back</button>
            </div>
        </div>
    )
}

export default NotFound;