import React from 'react'
import { useRef } from 'react'
import Button from './Button';
import {FaLocationArrow} from 'react-icons/fa'
import { useState } from 'react';
import { useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Nexus','Vault','Prologue','About','Contact'];
const Navbar = () => {
    const [isIndicatorActive,setIndicatorActive] = useState(null);
    const [isPlaying,setIsPlaying] = useState(false);
    const [isNavVisible,setIsNavVisible] = useState(true);
    const [lastScrollY,setLastScrollY]  = useState(0);
    const audioRef = useRef(null);
    const navContainerRef  = useRef(null);
    
    const toggleAudioIndicator=()=>{
        setIsPlaying((prev)=> !prev);

        setIndicatorActive((prev)=>!prev);
    }

    const {y:currentScrollY} = useWindowScroll();
    
    useEffect(()=>{
        if(currentScrollY === 0){
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav');
        }else if(currentScrollY>lastScrollY){
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav');
        }else{
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY)
    },[currentScrollY,lastScrollY]);

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y:isNavVisible?0 : -100,
            opacity:isNavVisible ? 1:0,
            duration:0.2
        })
    },[isNavVisible]);


    useEffect(()=>{
        if(isPlaying){
            audioRef.current.play()
        }else{
            audioRef.current.pause();
        }
    },[isPlaying]);

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 '>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
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
                        {navItems.map((item,index)=>(
                            <a key={index} href={`#${item.toLowerCase()}`} className='uppercase nav-hover-btn'>
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