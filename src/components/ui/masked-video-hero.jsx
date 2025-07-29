import React, { useRef, useEffect, useState } from 'react';
import imgPng from '../../assets/img_png.png';
import maskingBg from '../../assets/masking_bg.svg';
import fiberVideo from '../../assets/fiber_video.mp4';

const MaskedVideoHero = ({ className = '', showHeroImage = false }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      // Ensure video plays when loaded
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    };

    const handleError = () => {
      console.error('Video failed to load');
      setVideoError(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const maskStyle = {
    // Standard mask properties
    maskImage: `url(${maskingBg})`,
    maskSize: 'cover',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    // WebKit mask properties for Safari
    WebkitMaskImage: `url(${maskingBg})`,
    WebkitMaskSize: 'cover',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    // Additional properties for better compatibility
    maskMode: 'match-source',
    WebkitMaskMode: 'match-source',
  };

  return (
    <div className={`relative overflow-hidden ${className || 'w-[779px] h-[636px] sm:w-[120px] sm:h-[120px] md:w-[400px] md:h-[320px] lg:w-[779px] lg:h-[636px] xl:w-[779px] xl:h-[636px] 2xl:w-[900px] 2xl:h-[736px]'}`}>
      {/* Background Image */}
      <img
        src={imgPng}
        alt="Person background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none select-none"
      />
      
      {/* Masked Video */}
      {!videoError && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-[2] mix-blend-color-dodge"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={maskStyle}
        >
          <source src={fiberVideo} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      )}
      
      {/* Loading indicator */}
      {!videoLoaded && !videoError && (
        <div className="absolute top-0 left-0 w-full h-full z-[3] flex items-center justify-center bg-black bg-opacity-20">
          <div className="text-white text-sm">Loading video...</div>
        </div>
      )}
    </div>
  );
};

export default MaskedVideoHero; 