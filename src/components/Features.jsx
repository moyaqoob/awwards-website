import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
const Features = () => {

    const BentoTilt = ({children,className=''})=>{
        const [transformStyle,setTransformStyle] = useState('');
        const itemRef = useRef();
        const handleMouseMove = (e)=>{
            if(!itemRef.current) return;
            const {left, top, width, height} = itemRef.current.getBoundingClientRect()
            
            const relativeX = (e.clientX - left)/width;
            const relativeY = (e.clientY -top) /height;
            
            const tiltX = (relativeY - 0.5) *10;
            const tiltY = (relativeX - 0.5) *-10;

            setTransformStyle(`perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`)
        }

        const handleMouseLeave = ()=>{
            setTransformStyle('')
        }
        

        return(
            <div className={className}
            ref={itemRef} onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} style={{transform:transformStyle}}
            >
                {children}
            </div>
        )
    }

    const BentoCard = ({src,title,description})=>{
       
        return(
            <div className='relative w-full  '>
                <video src={src}
                autoPlay
                className='absolute left-0 top-0 object-cover object-center'
                loop 
                muted
                
                ></video>

                <div className='absolute ml-9 font-circular-web mt-4 text-white'>
                    <h1 className='text-4xl uppercase'>{title}</h1>
                    <p className='mt-2 max-w-sm'>{description} </p>
                </div>

                

            </div>

            
        )
    }
    
   
  return (
    <section className='bg-black pb-52 px-20 text-white'>
            <div className='container mx-auto' >
               <div className='px-5 py-10' >
                <p>Explore the Zentry Universe</p>
                <p className='max-w-md font-circular-web text-lg text-blue-50'>Immerse yourself in an IP-rich porudct universe where <br/> 
                    AI-driven gamification and hyper-personalization lead <br/>
                    the human-agentic economy.
                </p>
                </div>
                <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md-[65vh]'>
                   <BentoCard src={"videos/feature-1.mp4"} title={<>radi<b>a</b>nt</>} description={"A cross platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."} />
                </BentoTilt>
                <div className='grid h-[135vh] grid-rows-3  grid-cols-2 gap-7'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:row-span-2 md:col-span-1'>

                        <BentoCard src={"videos/feature-2.mp4"}  title={<>ZIG <b>M</b>A</>} description={"The NFT collection merging Zentry's IP,AI, and gaming- pushing the boundaries of NFT innovation"} />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 '>

                        <BentoCard  src={"videos/feature-3.mp4"}  title={<>N<b>E</b>XUS</>} description={"The player portal uniting humans & AI to play, compete,earn and showcase- gamifying social & Web3 experiences"} />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                         <BentoCard  src={"videos/feature-4.mp4"} title={<>AZ<b>U</b>L</>} description={"The agent of agents elevation agentic AI experience to be more fun and productive"} />

                    </BentoTilt>
                    <BentoTilt className='bento-tilt_2'>
                            <div className='bg-blue-700 flex size-full flex-col justify-between p-5'>
                                  <div className='bento-title max-w-[10px]'>
                                        <h1>MORE  COMING SOON</h1>
                                    </div>  
                                    <div className=''>
                                        <img src="img/play.svg" alt=""/>
                                    </div>
                            </div>
                    </BentoTilt>
                </div>

             </div>

    </section>
  )
}

export default Features