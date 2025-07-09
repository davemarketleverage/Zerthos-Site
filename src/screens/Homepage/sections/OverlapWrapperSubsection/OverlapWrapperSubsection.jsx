import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperSubsection = ({ animate, activeFeature, setActiveFeature, setFeaturesListHovered }) => {
  const features = [
    {
      id: 1,
      title: "Next-Gen Transmission Engine",
      description:
        "Built from the ground up, our ZRT protocol propels data up to 4x faster, even under constrained bandwidth or remote conditions.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=900&q=80"
    },
    {
      id: 2,
      title: "[vault_encrypt] Security",
      description:
        "Security isn't an afterthought—it's baked in. With 1,000x higher bitrate than industry standards, [bloc_encrypt] ensures airtight delivery without compromising speed.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=900&q=80"
    },
    {
      id: 3,
      title: "AI-Powered Optimization",
      description:
        "Our adaptive transmission engine learns and adjusts in real-time, delivering blazing performance while consuming minimal system resources.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=900&q=80"
    },
    {
      id: 4,
      title: "Plug-and-Play Deployment",
      description:
        "Deploy across cloud, on-prem, or hybrid environments with a single lightweight API—no deep re-architecting required.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=900&q=80"
    },
  ];

  const featureRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const [isFeatureScrolling, setIsFeatureScrolling] = useState(false);

  // Fade animation for image
  const [imageVisible, setImageVisible] = useState(true);
  const [displayedFeature, setDisplayedFeature] = useState(activeFeature);

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
    <section className="relative py-12 mt-24 ml-20">
      <div className="mx-auto">
        <div className="flex">
          {/* Left: Features List */}
          <div className="flex-1 flex flex-col justify-start" style={{ maxWidth: 750 }}>
            {/* Heading is now shared, not rendered here */}
            <div
              className="w-full flex flex-col pr-2 custom-scrollbar overflow-y-auto items-center"
              style={{
                height: 420, // enough to show 1.5 features above and below
                gap: 48, // large vertical gap between features
                scrollSnapType: 'y mandatory',
              }}
              ref={scrollContainerRef}
            >
              {features.map((feature, idx) => (
                <Card
                  key={feature.id}
                  className={`border-none shadow-none cursor-pointer transition-all duration-300 w-full scroll-snap-align-center ${
                    activeFeature === idx
                      ? "bg-white"
                      : "bg-transparent opacity-60"
                  }`}
                  onClick={() => {
                    setActiveFeature(idx);
                    scrollToFeature(idx);
                  }}
                  ref={el => featureRefs.current[idx] = el}
                  style={{ minHeight: 140, maxHeight: 180 }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start gap-2">
                      <h3 className={`self-stretch mt-[-1px] font-semibold text-2xl leading-9 transition-all duration-300 ${
                        activeFeature === idx ? "text-[#202020]" : "text-[#b0b0b0]"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`self-stretch font-normal text-lg leading-7 transition-all duration-300 max-w-[500px] ${
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
          {/* Right: Image */}
          <div className="flex-1 flex items-center">
            <img
              className={`rounded-2xl h-[500px] w-[1000px] max-w-[1000px] object-cover shadow-lg mr-14 transition-opacity duration-300 ${imageVisible ? 'opacity-100' : 'opacity-0'}`}
              alt={features[displayedFeature].title}
              src={features[displayedFeature].image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
