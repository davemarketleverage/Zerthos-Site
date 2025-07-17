import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DivWrapperSubsection = () => {
  // Feature comparison data
  const features = [
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/fi-tr-tachometer-fast-1.svg",
      title: "Transmission speed",
      description: "Process data in real-time without waiting",
      talonX: "Under 100ms",
      traditional: "5-10 seconds",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-6.svg",
      title: "Data integrity",
      description: "Zero data loss with perfect quality",
      talonX: "100% lossless",
      traditional: "Often lossy",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame.svg",
      title: "File size optimization",
      description: "Intelligent routing for maximum compression",
      talonX: "Up to 90%",
      traditional: "Up to 50%",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-4.svg",
      title: "Real-time data handling",
      description: "Stream data on-the-fly without batching",
      talonX: "Yes",
      traditional: "No",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-1.svg",
      title: "Encryption (in motion)",
      description: "1,000x stronger than industry standards",
      talonX: "Built-in",
      traditional: "Optional",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-2.svg",
      title: "Infrastructure compatibility",
      description: "Works on cloud, on-prem, or hybrid",
      talonX: "Universal",
      traditional: "Limited",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-5.svg",
      title: "Scalability",
      description: "Low resource overhead at scale",
      talonX: "Petabyte-ready",
      traditional: "Limited",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-7.svg",
      title: "Cloud optimization",
      description: "Reduce bandwidth and storage costs",
      talonX: "90% cost reduction",
      traditional: "Standard costs",
    },
    {
      icon: "https://c.animaapp.com/mcovvnm5V0Fxtk/img/frame-3.svg",
      title: "Developer experience",
      description: "Fast onboarding, simple integration",
      talonX: "Minimal-code API",
      traditional: "Complex",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  React.useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full max-w-[1000px] mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 mt-16">
      <Card className={`relative border border-solid border-[#cccccc] rounded-xl sm:rounded-2xl transition-all duration-1000 ease-out will-change-transform will-change-opacity delay-300 ${hasAnimated ? 'translate-y-0 opacity-100 visible' : 'translate-y-12 opacity-0 invisible'}`}>
        <CardContent className="p-0">

          {/* Column headers */}
          <div className="flex justify-between px-4 sm:px-6 pt-4 pb-3 relative z-10">
            <div className="w-1/3 sm:w-[300px] md:w-[400px] lg:w-[520px]"></div>
            <div className="flex flex-1 gap-2 sm:gap-4 md:gap-6 lg:gap-[40px]">
              <div className="flex-1 bg-[linear-gradient(90deg,rgba(229,108,21,1)_0%,rgba(238,85,34,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-sm sm:text-base md:text-lg lg:text-xl tracking-[0] leading-5 sm:leading-6 md:leading-7 whitespace-nowrap">
                TalonX
              </div>
              <div className="flex-1 font-bold text-[#202020] text-xs sm:text-sm md:text-base tracking-[0] leading-4 sm:leading-5 md:leading-6 whitespace-nowrap">
                Traditional Solutions
              </div>
            </div>
          </div>

          {/* Feature rows */}
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center px-4 sm:px-6 py-3 relative z-10">
                <div className="flex w-1/3 sm:w-[300px] md:w-[400px] lg:w-[520px] items-center gap-2 sm:gap-3">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    alt={feature.title}
                    src={feature.icon}
                  />
                  <div className="flex flex-col items-start gap-0.5 sm:gap-1">
                    <h3 className="font-bold text-[#202020] text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6">
                      {feature.title}
                    </h3>
                    <p className="hidden sm:block text-xs text-[#565a67] leading-4 sm:leading-5 font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-[40px] flex-1">
                  <div className="flex-1 font-bold text-[#202020] text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 whitespace-nowrap">
                    {feature.talonX}
                  </div>
                  <div className="flex-1 font-normal text-[#565b68] text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 whitespace-nowrap">
                    {feature.traditional}
                  </div>
                </div>
              </div>
              {index < features.length - 1 && (
                <Separator className="bg-[#cccccc]" />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
