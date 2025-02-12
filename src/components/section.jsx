import { useGSAP } from '@gsap/react'
import React from 'react' 
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)
import AnimatedTitle from './AnimatedTitle'

const Section = () => {

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpacing:true
            }
        })
        clipAnimation.to(".mask-clip-path",{
            width:"100vw",
            height:"100vh",
            borderRadius:0,
        
        })
    })
    


  return (
    <div id='about' className='min-h-screen w-screen' >
       <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <p className='font-general text-sm uppercase md:text-[10px]'>WELCOME TO ZENTRY</p>
            <AnimatedTitle title={"<p>Disc<b>o</b>ver the  world's <br/> l<b>a</b>rgest shared <br/> <b>a</b>dventure</p>"} containerClass={'mt-5 md:text[6rem] text-black'}/>

            <div className='about-subtext'>
                <p>The Game of Games begins-your life, now an epic MMPORG</p>
                <p>Zentry unites every playe later that bridges players, agentic AI, and blockchains, creating a new economic paradigm</p>
            </div>
       </div>
       <div className="h-dvh w-screen" id='clip'>   
            <div className='mask-clip-path about-image '>
                <img 
                src="img/about.webp"
                alt=""
                className='absolute left-0 top-0 size-full object-cover'
                />
            </div>
            <img src="img/stones.webp" alt="" className='absolute top-0 size-full -bottom-5 z-50 gap-4 translate-x-13 -translate-y-9 -inset-16'/>
       </div>
    </div>
  )
}

export default Section