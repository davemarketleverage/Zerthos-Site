import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperSubsection = () => {
  const features = [
    {
      id: 1,
      title: "Next-Gen Transmission Engine",
      description:
        "Built from the ground up, our ZRT protocol propels data up to 4x faster, even under constrained bandwidth or remote conditions.",
      active: true,
    },
    {
      id: 2,
      title: "[vault_encrypt] Security",
      description:
        "Security isn't an afterthought—it's baked in. With 1,000x higher bitrate than industry standards, [bloc_encrypt] ensures airtight delivery without compromising speed.",
      active: false,
    },
    {
      id: 3,
      title: "AI-Powered Optimization",
      description:
        "Our adaptive transmission engine learns and adjusts in real-time, delivering blazing performance while consuming minimal system resources.",
      active: false,
    },
    {
      id: 4,
      title: "Plug-and-Play Deployment",
      description:
        "Deploy across cloud, on-prem, or hybrid environments with a single lightweight API—no deep re-architecting required.",
      active: false,
    },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[432px] flex flex-col gap-16">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={`border-none shadow-none ${!feature.active ? "opacity-30" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="self-stretch mt-[-1px] font-semibold text-[#202020] text-2xl leading-9">
                      {feature.title}
                    </h3>
                    <p className="self-stretch font-normal text-[#565a67] text-lg leading-7">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex-1">
            <img
              className="w-px h-[552px]"
              alt="Mask group"
              src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/mask-group-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
