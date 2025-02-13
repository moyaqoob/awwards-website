import React from 'react'
import AnimatedTitle from './AnimatedTitle'

const Features = () => {

    const BentoCard = ({src,title,description})=>{
        return(
            <div className='relative w-full'>
                <video src={src}
                autoPlay
                className='absolute left-0 top-0  object-cover object-center'
                loop 
                muted
                ></video>
                <div className='absolute text-4xl uppercase ml-9 font-circular-web mt-4'>
                    <h1>{title}</h1>
                </div>

            </div>

            
        )
    }
    
   
  return (
    <section className='bg-black pb-52 text-white'>
            <div className='container mx-auto' >
        `       <div className='px-5 py-10' >
                <p>Explore the Zentry Universe</p>
                <p className='max-w-md font-circular-web text-lg text-blue-50'>Immerse yourself in an IP-rich porudct universe where <br/> 
                    AI-driven gamification and hyper-personalization lead <br/>
                    the human-agentic economy.
                </p>
                </div>
                <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] '>
                   <BentoCard src={"videos/feature-1.mp4"} title={<>radi<b>n</b>t</>} description={"A cross platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."} />
                </div>

             </div>

    </section>
  )
}

export default Features