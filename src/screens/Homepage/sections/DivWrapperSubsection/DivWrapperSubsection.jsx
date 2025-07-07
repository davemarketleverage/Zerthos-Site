import React from "react";
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

  return (
    <section className="relative w-full max-w-[1344px] mx-auto py-16">
      <header className="flex flex-col items-center gap-6 mb-16">
        <h2 className="text-6xl text-[#202020] leading-[60px] font-heading font-normal text-center">
          The Zerthos advantage
        </h2>
        <p className="text-2xl text-[#565a67] leading-9 font-normal text-center">
          Engineered to outperform on every metric that matters.
        </p>
      </header>

      <Card className="relative border border-solid border-[#cccccc] rounded-3xl">
        <CardContent className="p-0">
          {/* Background rectangle */}
          <img
            className="absolute w-[332px] h-[916px] -top-20 left-[634px] z-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-23.svg"
          />

          {/* Column headers */}
          <div className="flex justify-between px-9 pt-6 pb-4 relative z-10">
            <div className="w-[640px]"></div>
            <div className="flex flex-1 gap-[60px]">
              <div className="flex-1 bg-[linear-gradient(90deg,rgba(229,108,21,1)_0%,rgba(238,85,34,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-2xl tracking-[0] leading-9 whitespace-nowrap">
                TalonX
              </div>
              <div className="flex-1 font-bold text-[#202020] text-lg tracking-[0] leading-7 whitespace-nowrap">
                Traditional Solutions
              </div>
            </div>
          </div>

          {/* Feature rows */}
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center px-9 py-4 relative z-10">
                <div className="flex w-[640px] items-center gap-4">
                  <img
                    className="w-9 h-9"
                    alt={feature.title}
                    src={feature.icon}
                  />
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="font-bold text-[#202020] text-lg leading-7">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#565a67] leading-6 font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[60px] flex-1">
                  <div className="flex-1 font-bold text-[#202020] text-lg leading-7 whitespace-nowrap">
                    {feature.talonX}
                  </div>
                  <div className="flex-1 font-normal text-[#565b68] text-lg leading-7 whitespace-nowrap">
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
