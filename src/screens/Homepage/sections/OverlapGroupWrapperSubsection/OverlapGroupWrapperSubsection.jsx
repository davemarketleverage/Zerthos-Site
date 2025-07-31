import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import performanceSnapshotBg from "../../../../assets/performance-snapshot-bg.jpg";
import performanceSpeedometer from "../../../../assets/performance-speedometer.mp4";

export const OverlapGroupWrapperSubsection = () => {
  const [barWidths, setBarWidths] = useState([0, 0, 0]);
  const [showPerformanceCard, setShowPerformanceCard] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      setShowPerformanceCard(true);
      
      // Staggered animation for each progress bar with different max values
      const maxWidths = [
        80, // Transmission speed: 80%
        90, // Processing speed: 90%
        100, // Lossless Quality: 100%
      ];
      
      [0, 1, 2].forEach((i) => {
        setTimeout(() => {
          setBarWidths((prev) => {
            const next = [...prev];
            next[i] = maxWidths[i];
            return next;
          });
        }, i * 300 + 500); // 500ms delay before first bar, then 300ms between each
      });
    }
  }, [inView, isAnimating]);

  useEffect(() => {
    console.log('barWidths:', barWidths);
  }, [barWidths]);

  const performanceMetrics = [
    {
      title: "Transmission speed",
      value: "Fastest (8x)",
      progressColor:
        "bg-[linear-gradient(90deg,rgba(240,154,7,1)_0%,rgba(240,100,7,1)_100%)]",
    },
    {
      title: "Processing speed",
      value: "90(ms)",
      progressColor:
        "bg-[linear-gradient(90deg,rgba(7,240,170,1)_0%,rgba(240,154,7,1)_100%)]",
    },
    {
      title: "Lossless Quality",
      value: "100% (no loss)",
      progressColor:
        "bg-[linear-gradient(90deg,rgba(240,7,57,1)_0%,rgba(240,154,7,1)_100%)]",
    },
  ];

  return (
    <section ref={ref} className="relative w-full h-screen bg-[#010101] flex items-start justify-start">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={performanceSpeedometer}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pt-[100%] lg:pt-0 lg:pl-[30%]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center mt-12 lg:mt-12 -mt-[20%] tp:mt-0">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 w-full">
          
          {/* Left Side - Title and Performance Card */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:max-w-[600px] xl:gap-4 2xl:gap-16">
            
            {/* Title */}
            <h2 className={`font-heading font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0] leading-[48px] sm:leading-[52px] md:leading-[56px] lg:leading-[60px] transition-all duration-[1200ms] ease-out will-change-transform will-change-opacity ${showPerformanceCard ? 'translate-y-0 opacity-100 visible' : 'translate-y-16 opacity-0 invisible'} tp:text-5xl tp:leading-[50px]`}>
              Performance
              <br />
              snapshot
            </h2>

            {/* Performance Card */}
            <Card className={`flex flex-col w-full sm:w-[400px] md:w-[500px] lg:w-[600px] items-start gap-4 sm:gap-5 md:gap-6 px-0 py-4 sm:py-5 md:py-6 bg-[#ffffff1a] rounded-xl backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] border-none transition-all duration-[1200ms] ease-out will-change-transform will-change-opacity ${showPerformanceCard ? 'translate-y-0 opacity-100 visible' : 'translate-y-16 opacity-0 invisible'} tp:w-[450px] tp:gap-2`}>
              {performanceMetrics.map((metric, index) => (
                <React.Fragment key={index}>
                  <CardContent className="flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-5 md:px-6 py-0 relative self-stretch w-full">
                    <div className="flex items-center justify-between relative self-stretch w-full">
                      <div className="relative w-fit mt-[-1.00px] font-semibold text-white text-lg sm:text-xl md:text-2xl tracking-[0] leading-7 sm:leading-8 md:leading-9 whitespace-nowrap tp:text-base tp:leading-5">
                        {metric.title}
                      </div>
                      <div className="relative w-fit font-normal text-white text-base sm:text-lg tracking-[0] leading-6 sm:leading-7 whitespace-nowrap tp:text-sm tp:leading-5">
                        {metric.value}
                      </div>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-[20px] h-2 sm:h-2.5 md:h-3 overflow-hidden tp:h-1">
                      <div
                        className={`relative h-full rounded-[20px] ${metric.progressColor} shadow-lg`}
                        style={{
                          width: `${barWidths[index]}%`,
                          transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          opacity: barWidths[index] > 0 ? 1 : 0,
                          transform: barWidths[index] > 0 ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left',
                          maxWidth: '100%', // Ensure bar doesn't overflow on small screens
                        }}
                      />
                    </div>
                  </CardContent>
                  {index < performanceMetrics.length - 1 && (
                    <Separator className="self-stretch w-full h-px bg-[#ffffff1f]" />
                  )}
                </React.Fragment>
              ))}
            </Card>

            {/* Bottom Text */}
            <p className="md:opacity-60 font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-5 sm:leading-6 md:leading-7 tp:text-sm tp:leading-5">
              Based on tests with 10,000+ files including 5.6GB satellite TIFs
            </p>
          </div>

          {/* Right Side - Empty space for layout balance */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <div className="w-[400px] h-[400px] flex items-center justify-center">
              {/* Video is now in background */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
