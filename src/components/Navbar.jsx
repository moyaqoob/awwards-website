import React from 'react'
import { useRef } from 'react'

const Navbar = () => {
    const navContainerRef  = useRef(null);

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-zinc-600'>
        <header className='absolute top-1/2 w-full transition-all duration-700 sm:inset-x-6'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img src="/img/logo.png" alt=""/>

                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar