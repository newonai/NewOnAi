import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {SignIn, useUser } from '@clerk/clerk-react'
import ThemeToggle from '../components/ThemeToggle'

const Layout = () => {

  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser()

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen bg-theme-background'>

      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-theme bg-theme-surface-secondary'>
        <img className='cursor-pointer w-20 sm:w-20' src={assets.logo} alt="" onClick={()=>navigate('/')} />
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
            sidebar ? <X onClick={()=> setSidebar(false)} className='w-6 h-6 text-theme-secondary sm:hidden'/>
            : <Menu onClick={()=> setSidebar(true)} className='w-6 h-6 text-theme-secondary sm:hidden'/>
          }
        </div>
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
          <div className='flex-1 bg-theme-surface'>
            <Outlet />
          </div>
      </div>
      
      
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen bg-theme-background'>
      <div className='bg-theme-surface-secondary p-8 rounded-xl shadow-lg border border-theme'>
        <SignIn />
      </div>
    </div>
  )
}

export default Layout
