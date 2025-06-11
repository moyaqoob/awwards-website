import { useEffect, useRef, useState } from "react";
import React from "react";
import Button from "./Button";
import {FaLocationArrow} from "react-icons/fa"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [videosLoaded, setVideosLoaded] = useState(new Set());
  const [preloadedVideos, setPreloadedVideos] = useState({});
  
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const miniVideoRef = useRef(null);
  
  const totalVideos = 4;

  // Preload videos progressively
  useEffect(() => {
    const preloadVideo = (index) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = getVideoSrc(index);
        video.preload = 'metadata'; // Only load metadata first
        video.muted = true;
        
        const onCanPlay = () => {
          video.removeEventListener('canplaythrough', onCanPlay);
          video.removeEventListener('error', onError);
          resolve({ index, video });
        };
        
        const onError = () => {
          video.removeEventListener('canplaythrough', onCanPlay);
          video.removeEventListener('error', onError);
          reject(new Error(`Failed to load video ${index}`));
        };
        
        video.addEventListener('canplaythrough', onCanPlay);
        video.addEventListener('error', onError);
        
        // Start loading
        video.load();
      });
    };

    // Load first video immediately, others progressively
    const loadVideosSequentially = async () => {
      try {
        // Load current video first
        const firstVideo = await preloadVideo(currentIndex);
        setPreloadedVideos(prev => ({ ...prev, [currentIndex]: firstVideo.video }));
        setVideosLoaded(prev => new Set([...prev, currentIndex]));
        setLoading(false); // Allow user interaction as soon as first video is ready
        
        // Load remaining videos in background
        for (let i = 1; i <= totalVideos; i++) {
          if (i !== currentIndex) {
            try {
              const video = await preloadVideo(i);
              setPreloadedVideos(prev => ({ ...prev, [i]: video.video }));
              setVideosLoaded(prev => new Set([...prev, i]));
            } catch (error) {
              console.warn(`Failed to preload video ${i}:`, error);
            }
          }
        }
      } catch (error) {
        console.error('Failed to load initial video:', error);
        setLoading(false); // Show content even if video fails
      }
    };

    loadVideosSequentially();
  }, []);

  const getVideoSrc = (index) => {
    // Your video source logic here
    return `videos/hero-${index}.mp4`;
  };

  const handleMiniVdClick = () => {
    const nextIndex = (currentIndex % totalVideos) + 1;
    
    if (videosLoaded.has(nextIndex)) {
      setCurrentIndex(nextIndex);
      
      // Preload next video if not already loaded
      const preloadNext = ((nextIndex % totalVideos) + 1);
      if (!videosLoaded.has(preloadNext)) {
        // Trigger preload of next video
      }
    }
  };

  const handleVideoLoad = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Mini Video Preview */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              {preloadedVideos[(currentIndex % totalVideos) + 1] ? (
                <video
                  ref={miniVideoRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  className="size-64 origin-center scale-150 object-cover object-center"
                  preload="metadata"
                />
              ) : (
                <div className="size-64 bg-gray-300 animate-pulse flex items-center justify-center">
                  <span className="text-gray-500">Loading...</span>
                </div>
              )}
            </div>
          </div>

          {/* Next Video (Hidden) */}
          {preloadedVideos[currentIndex] && (
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              preload="metadata"
            />
          )}

          {/* Main Background Video */}
          {preloadedVideos[currentIndex === totalVideos - 1 ? 1 : currentIndex] ? (
            <video
              ref={currentVideoRef}
              src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoadedData={() => handleVideoLoad(currentVideoRef)}
              preload="auto"
            />
          ) : (
            <div className="absolute left-0 top-0 size-full bg-blue-75 animate-pulse flex items-center justify-center">
              <span className="text-white">Loading video...</span>
            </div>
          )}
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 z-40 right-5 text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 -top-3 z-40 size-auto">
          <div className="mt-24 px-5">
            <h1 className="special-font hero-heading text-blue-100">
              refi<b>n</b>e
            </h1>
            <p className="mb-2 max-w-56 font-robert-regular text-blue-100">
              Enter the Metagame Layer <b>Unleash the player Economy</b>
            </p>
            <div>
              <Button
                id="1"
                title="Watch trailer"
                leftIcon={<FaLocationArrow />}
                containerClass="!bg-yellow-300 flex gap-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
