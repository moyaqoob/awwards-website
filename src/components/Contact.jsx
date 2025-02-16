import React from 'react'

const ImageClipBox = ({src,clipClass}) =>{
  return (
  <div className={clipClass}>
      <img src={src} alt=""/>
  </div>

  )
}
const Contact = () => {
  return (
    <div id='contact' className='min-h-96 my-20 w-screen  px-10'>
       <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
          <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
              <ImageClipBox clipClass={"contact-clip-path-1"} src={"img/about.webp"}/>
              <ImageClipBox clipClass={"contact-clip-path-2 lg:translate-y-20 translate-x-20"} src={"img/about.webp"}/>

          </div>
          <div className='absolute left-28 -top-44 translate-x-7  sm:top-1/2 md:left-auto md:right-20 lg:top-20 lg:w-80'>
                <ImageClipBox
                 src={"img/swordman.webp"}
                  clipClass={"sword-man-clip-path w-60 "}
                />
          </div>

          <div className='flex flex-col items-center text-center'>
              <p className='mb-10 font-general text-[10px] uppercase'>
                Join Zentry
              </p>

              <p className='special-font mt-10 w-full font-zentry
              text-5xl leading-[0.9] md:text-[6rem]'>
                  Lets b<b>u</b>ild the new era of g<b>a</b>ming t<b>o</b>gether
              </p>

              <button className='bg-white text-black rounded-full px-1 py-0.5 mt-4 font-general'>
                  Contact us
              </button>

          </div>
       </div>
    </div>
  )
}

export default Contact