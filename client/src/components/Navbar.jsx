import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

    const navigate = useNavigate()
    const {user} = useUser()
    const { openSignIn } = useClerk()


  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32' style={{backgroundColor: 'var(--color-navbar-bg)', boxShadow: 'var(--shadow-navbar)'}}>
      <img src={assets.logo} alt="logo" className='w-20 sm:w-20 cursor-pointer' onClick={()=> navigate('/')}/>
      {/* Centered multicolor title */}
      <div className='absolute left-1/2 -translate-x-1/2 pointer-events-none select-none'>
        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold tracking-tight'>
          <span className='text-red-400'>N</span>
          <span className='text-blue-400'>e</span>
          <span className='text-green-400'>w</span>
          <span className='text-yellow-400'>O</span>
          <span className='text-red-400'>n</span>
          <span className='text-blue-400'>A</span>
          <span className='text-green-400'>I</span>
        </h1>
      </div>
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        {
          user ? <UserButton /> 
          : 
          (
            <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/> </button>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
