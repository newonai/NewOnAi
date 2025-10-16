import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-white dark:bg-slate-900 min-h-screen overflow-hidden'>

        {/* Subtle particle animation layers */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        </div>

        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] text-white'>Create amazing content <br/> with <span className='text-primary'>AI tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-300'>Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
            <button className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>
        </div>
        <div className='flex items-center gap-4 mt-8 mx-auto text-gray-300'>
            <img src={assets.user_group} alt="" className='h-8'/> Trusted by 10k+ people
        </div>
      
    </div>
  )
}

export default Hero
