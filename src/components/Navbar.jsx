import React from 'react'
import { useRef } from 'react'
import Button from './Button';
import {FaLocationArrow} from 'react-icons/fa'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const navContainerRef  = useRef(null);
    const navItems = ['Nexus','Vault','Prologue','About','Contact'];
    const [isIndicatorActive,setIndicatorActive] = useState(null);
    const [isPlaying,setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudioIndicator=()=>{
        setIsPlaying((prev)=> !prev);

        setIndicatorActive((prev)=>!prev);
    }
    useEffect(()=>{
        if(isPlaying){
            audioRef.current.play()
        }else{
            audioRef.current.pause();
        }
    },[isPlaying])

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 sm:-inset-3'>
        <header className='absolute top-1/2 w-full transition-all duration-700 sm:inset-x-6'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-6 '>
                    <img
                    src="/img/logo.png" 
                    alt='logo'
                    className='w-10'
                    />

                    <Button
                    id={"product-button"} 
                    title={"Products"}
                    rightIcon={<FaLocationArrow/>}
                    containerClass={"bg-blue-50 md:flex hidden items-center justify-center gap-1 "}
                    />
                </div>

                <div className='flex items-center h-full'>
                    <div className='hidden md:block'>
                        {navItems.map((item)=>(
                            <a key={item} href={`#${item.toLowerCase()}`} className='uppercase nav-hover-btn'>
                                {item}
                            </a>
                        ))}
                    </div>
                    
                <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                    <audio src="/audio/loop.mp3" ref={audioRef} loop  
                    className='hidden'/>
                    {[1,2,3,4].map((bar)=>(
                        <div key={bar}
                         className={`indicator-line ${isIndicatorActive ? 'active':''}`}
                        style={{animationDelay:`${bar*0.2}s`}}/>
                    ))}
                </button>
                </div>


            </nav>
        </header>
    </div>
  )
}

export default Navbar