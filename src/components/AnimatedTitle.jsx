import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Element to trigger the animation
          start: 'top 80%', // Adjust start position
          end: 'bottom 20%', // Adjust end position
          scrub: 1, // Smooth scrubbing
          toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
      });

      // Animate each word
      titleAnimation.fromTo(
        '.animated-word',
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
          rotateY: 20,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          stagger: 0.02, // Stagger animation for each word
          ease: 'power2.inOut',
        }
      );
    }, containerRef); // Scope the context to the containerRef

    return () => ctx.revert(); // Cleanup
  }, [title]); // Re-run effect if `title` changes

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split('<br/>').map((line, index) => (
        <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
          {line.split(' ').map((word, i) => (
            <span
              key={i}
              className='animated-word inline-block'
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;