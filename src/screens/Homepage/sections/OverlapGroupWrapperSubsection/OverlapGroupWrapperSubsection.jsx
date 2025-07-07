import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const OverlapGroupWrapperSubsection = () => {
  const performanceMetrics = [
    {
      title: "Transmission speed",
      value: "Fastest (8x)",
      progressWidth: "410px",
      progressColor:
        "bg-[linear-gradient(90deg,rgba(240,154,7,1)_0%,rgba(240,100,7,1)_100%)]",
    },
    {
      title: "Processing speed",
      value: "90(ms)",
      progressWidth: "410px",
      progressColor:
        "bg-[linear-gradient(90deg,rgba(7,240,170,1)_0%,rgba(240,154,7,1)_100%)]",
    },
    {
      title: "Lossless Quality",
      value: "100% (no loss)",
      progressWidth: "410px",
      progressColor:
        "bg-[linear-gradient(90deg,rgba(240,7,57,1)_0%,rgba(240,154,7,1)_100%)]",
    },
  ];

  return (
    <section className="relative w-full h-[848px] bg-[#010101]">
      <div className="relative w-full h-[735px] mx-auto px-12 ml-12">
        <img
          className="absolute w-[1080px] h-[735px] top-0 right-0 object-cover"
          alt="Element coll"
          src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/5672185-coll-wavebreak-animation-1920x1080-1.png"
        />

        <h2 className="absolute top-[120px] left-0 font-heading font-normal text-white text-6xl tracking-[0] leading-[60px]">
          Performance
          <br />
          snapshot
        </h2>

        <Card className="flex flex-col w-[660px] items-start gap-6 px-0 py-6 absolute top-[289px] left-0 bg-[#ffffff1a] rounded-xl backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] border-none">
          {performanceMetrics.map((metric, index) => (
            <React.Fragment key={index}>
              <CardContent className="flex flex-col items-start justify-center gap-6 px-6 py-0 relative self-stretch w-full">
                <div className="flex items-center justify-between relative self-stretch w-full">
                  <div className="relative w-fit mt-[-1.00px] font-semibold text-white text-2xl tracking-[0] leading-9 whitespace-nowrap">
                    {metric.title}
                  </div>
                  <div className="relative w-fit font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                    {metric.value}
                  </div>
                </div>
                <div
                  className={`relative w-[410px] h-3 rounded-[20px] ${metric.progressColor}`}
                />
              </CardContent>
              {index < performanceMetrics.length - 1 && (
                <Separator className="self-stretch w-full h-px bg-[#ffffff1f]" />
              )}
            </React.Fragment>
          ))}
        </Card>

        <p className="absolute top-[698px] left-0 opacity-60 font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
          Based on tests with 10,000+ files including 5.6GB satellite TIFs
        </p>
      </div>
    </section>
  );
};
