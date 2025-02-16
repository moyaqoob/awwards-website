import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';

const Story = () => {
  const frameRef = useRef();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500,
      ease: 'power1.out',
    });
  };

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className='flex size-full flex-col items-center pb-24 px-20 mt-10'>
        <p className='font-general text-md uppercase md:text-[10px]'>the multiversal ip world</p>
        <div className='relative size-full'>
          <AnimatedTitle
            title={'The story of Hidden Realm'}
            containerClass={'mt-5 pointer-events-none mix-blend-difference relative z-10'}
            sectionId='#story'
          />
          <div className='story-img-container'>
            <div className='story-img-mask'>
              <div className='story-img-content'>
                <img
                  src='img/entrance.webp'
                  alt='entrance'
                  className='object-contain'
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseDown={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                />
              </div>
            </div>
          </div>

          <div className='-mt-8 '>
                <div className='flex flex-col items-center gap-2 justify-center md:justify-end'>
                    <p className='font-general'>Where realms converge, lies Zentry and the <br/> boundless pillar. Discover its secrets and shape <br/> your fate amidst infinite opportunities.</p>
                    <button className='rounded bg-white text-black p-2 px-1 font-robert-medium text-md'>Discover Prologue</button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;