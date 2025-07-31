import React, { useRef, useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import feature1 from "../../../../assets/feature-1.png";
import feature2 from "../../../../assets/feature-2.png";
import feature3 from "../../../../assets/feature-3.png";
import feature4 from "../../../../assets/feature-4.png";

// Custom hook for lazy loading images
const useLazyImage = (src) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadImage = useCallback(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      setError(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
    img.src = src;
  }, [src]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  const reload = useCallback(() => {
    setIsLoading(true);
    setError(false);
    loadImage();
  }, [loadImage]);

  return { imageSrc, isLoading, error, reload };
};

// LazyImage component
const LazyImage = ({ src, alt, className, onLoad, onError }) => {
  const { imageSrc, isLoading, error, reload } = useLazyImage(src);

  if (error) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-2">Failed to load image</div>
          <button 
            onClick={reload}
            className="text-[#F09A07] text-sm hover:underline"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      className={`${className} transition-opacity duration-300`}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export const OverlapWrapperSubsection = ({ animate, activeFeature, setActiveFeature, setFeaturesListHovered, windowWidth }) => {
  const features = [
    {
      id: 1,
      title: "Next-Gen Transmission Engine",
      description:
        "Built from the ground up, our ZRT protocol propels data up to 4x faster, even under constrained bandwidth or remote conditions.",
      image: feature1
    },
    {
      id: 2,
      title: "[vault_encrypt] Security",
      description:
        "Security isn't an afterthought—it's baked in. With 1,000x higher bitrate than industry standards, [bloc_encrypt] ensures airtight delivery without compromising speed.",
      image: feature2
    },
    {
      id: 3,
      title: "AI-Powered Optimization",
      description:
        "Our adaptive transmission engine learns and adjusts in real-time, delivering blazing performance while consuming minimal system resources.",
      image: feature3
    },
    {
      id: 4,
      title: "Plug-and-Play Deployment",
      description:
        "Deploy across cloud, on-prem, or hybrid environments with a single lightweight API—no deep re-architecting required.",
      image: feature4
    },
  ];

  const featureRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const [isFeatureScrolling, setIsFeatureScrolling] = useState(false);

  // Fade animation for image
  const [imageVisible, setImageVisible] = useState(true);
  const [displayedFeature, setDisplayedFeature] = useState(activeFeature);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all feature images
  useEffect(() => {
    const preloadAllImages = () => {
      setTimeout(() => {
        features.forEach((feature, index) => {
          const img = new Image();
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, index]));
          };
          img.src = feature.image;
        });
      }, 100); // Small delay to prioritize active image
    };

    preloadAllImages();
  }, [features]);

  // Handle feature change with smooth transition
  const handleFeatureChange = useCallback((newIndex) => {
    setIsTransitioning(true);
    setActiveFeature(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [setActiveFeature]);

  useEffect(() => {
    setImageVisible(false); // Start fade out
    const timeout = setTimeout(() => {
      setDisplayedFeature(activeFeature); // Change image after fade out
      setImageVisible(true); // Fade in new image
    }, 200); // 300ms fade duration
    return () => clearTimeout(timeout);
  }, [activeFeature]);

  // Scroll to active feature on click
  const scrollToFeature = (idx) => {
    if (featureRefs.current[idx] && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const ref = featureRefs.current[idx];
      const containerRect = container.getBoundingClientRect();
      const refRect = ref.getBoundingClientRect();
      const scrollTop = container.scrollTop + (refRect.top - containerRect.top) - (containerRect.height / 2 - refRect.height / 2);
      container.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // When animate becomes true, scroll to the first feature
    if (animate && scrollContainerRef.current) {
      scrollToFeature(activeFeature);
    }
  }, [animate, activeFeature]);

  // Wheel handler for feature-by-feature scroll with lock
  const handleWheel = (e) => {
    e.preventDefault();
    if (isFeatureScrolling) return;
    const delta = e.deltaY;
    if (Math.abs(delta) > 10) {
      if (delta > 0 && activeFeature < features.length - 1) {
        setActiveFeature((prev) => prev + 1);
      } else if (delta < 0 && activeFeature > 0) {
        setActiveFeature((prev) => prev - 1);
      }
      setIsFeatureScrolling(true);
      setTimeout(() => setIsFeatureScrolling(false), 300);
    }
  };

  return (
    <section className="relative py-12 mt-24 sm:ml-0 sm:mt-16 md:ml-0 md:mt-0 lg:ml-0">
      <div className="mx-auto">
        {/* Mobile View - 2x2 Grid Layout */}
        <div className="md:hidden">
          <div className="px-1 py-4">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-1">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={`p-3 rounded-lg transition-all duration-300 cursor-pointer h-52 sm:h-48 flex flex-col justify-between border-2 ${
                    activeFeature === idx
                      ? "bg-white shadow-md border-[#F09A07]"
                      : "bg-gray-50 border-transparent"
                  }`}
                  onClick={() => handleFeatureChange(idx)}
                >
                  <div>
                    <h3 className={`text-base font-semibold mb-3 transition-all duration-300 leading-tight ${
                      activeFeature === idx ? "text-[#202020]" : "text-[#b0b0b0]"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-5 transition-all duration-300 line-clamp-5 ${
                      activeFeature === idx ? "text-[#565a67]" : "text-[#d0d0d0]"
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet View - Original Layout */}
        <div className="hidden md:block">
          <div className="flex flex-col xl:flex-row xl:gap-8 md:px-4 lg:px-8 ">
            {/* Features List - Top on tablet, left on desktop */}
            <div className="flex flex-col justify-start xl:w-[600px] xl:flex-shrink-0 tp:pt-10" style={{ maxWidth: windowWidth < 1280 ? '100%' : 600 }}>
              {/* Heading is now shared, not rendered here */}
              <div
                className="w-full flex flex-col pr-2 custom-scrollbar overflow-y-auto xl:items-start md:items-center xl:items-start"
                style={{
                  height: windowWidth < 1024 ? 300 : windowWidth >= 1279 && windowWidth <= 1300 ? 280 : 420, // adjusted height for tp screens
                  gap: windowWidth < 1024 ? 24 : windowWidth >= 1279 && windowWidth <= 1300 ? 10 : 48, // adjusted gap for tp screens
                  scrollSnapType: 'y mandatory',
                }}
                ref={scrollContainerRef}
              >
                {features.map((feature, idx) => (
                  <Card
                    key={feature.id}
                    className={`mb-3 md:mb-2 border-none shadow-none cursor-pointer transition-all duration-300 w-full scroll-snap-align-center ${
                      activeFeature === idx
                        ? "bg-white"
                        : "bg-transparent opacity-60"
                    }`}
                    onClick={() => {
                      handleFeatureChange(idx);
                      scrollToFeature(idx);
                    }}
                    ref={el => featureRefs.current[idx] = el}
                    style={{ 
                      minHeight: windowWidth < 1024 ? 140 : windowWidth >= 1279 && windowWidth <= 1300 ? 120 : 140, 
                      maxHeight: windowWidth < 1024 ? 200 : windowWidth >= 1279 && windowWidth <= 1300 ? 190 : 180 
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col items-start md:items-center xl:items-start gap-2">
                        <h3 className={`font-semibold text-2xl md:text-xl leading-9 md:leading-7 transition-all duration-300 md:text-center xl:text-left tp:text-lg tp:leading-6 ${
                          activeFeature === idx ? "text-[#202020]" : "text-[#b0b0b0]"
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`font-normal text-lg md:text-base leading-7 md:leading-6 transition-all duration-300 lg:max-w-[500px] md:max-w-full md:text-center xl:text-left tp:text-sm tp:leading-5 ${
                          activeFeature === idx ? "text-[#565a67]" : "text-[#d0d0d0]"
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Image - Bottom on tablet, right on desktop */}
            <div className="flex items-center xl:justify-start md:justify-center md:flex xl:flex-1" style={{ marginTop: windowWidth >= 768 && windowWidth < 1280 ? '48px' : windowWidth >= 1279 && windowWidth <= 1300 ? '0px' : '0px' }}>
              <LazyImage
                src={features[displayedFeature]?.image}
                alt={features[displayedFeature]?.title}
                className={`rounded-2xl h-[500px] w-[1000px] xl:h-[500px] xl:w-[800px] 2xl:h-[500px] 2xl:w-[1000px] md:h-[400px] md:w-[800px] object-cover shadow-lg md:mr-0 transition-opacity duration-300 ${imageVisible ? 'opacity-100' : 'opacity-0'} tp:h-[350px] tp:w-[600px]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
