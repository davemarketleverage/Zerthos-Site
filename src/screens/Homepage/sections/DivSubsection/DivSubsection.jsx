import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import logoSvg from "../../../../assets/logo.svg";

export const DivSubsection = () => {
  // Social media links data
  const socialLinks = [
    { name: "Instagram" },
    { name: "LinkedIn" },
    { name: "Twitter" },
    { name: "Facebook" },
    { name: "Youtube" },
  ];

  // Legal links data
  const legalLinks = [
    { name: "Cookies policy" },
    { name: "Legal terms" },
    { name: "Privacy policy" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  React.useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full bg-[#202020]">
      {/* Top section with CTA */}
      <div className={`w-full h-[560px] bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/bg-mask-group.png)] bg-[100%_100%] transition-all duration-1000 ease-out will-change-transform will-change-opacity ${hasAnimated ? 'translate-y-0 opacity-100 visible' : 'translate-y-12 opacity-0 invisible'}`}>
        <div className="flex w-full max-w-[1344px] items-start gap-40 relative top-[180px] mx-auto px-12">
          <div className="relative w-fit mt-[-1.00px] font-heading font-normal text-[#202020] text-6xl tracking-[0] leading-[60px]">
            Need a tailored
            <br />
            solution?
          </div>

          <Card className="flex-1 bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-start gap-9 p-0">
              <p className="relative self-stretch mt-[-1.00px] font-sans font-normal text-[#202020] text-2xl tracking-[0] leading-9">
                Our TalonX and [vault_encrypt] technologies adapt to your
                specific needs with minimal code changes. Get enterprise-grade
                support from our expert team.
              </p>

              <Button className="px-9 py-4 h-auto rounded-xl bg-[linear-gradient(90deg,rgba(229,108,21,1)_0%,rgba(238,85,34,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(229,108,21,0.9)_0%,rgba(238,85,34,0.9)_100%)] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1">
                <span className="font-semibold text-white text-base transition-all duration-300 ease-in-out">
                  Contact out team
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer section */}
      <div className={`flex flex-col w-full max-w-[1344px] items-start gap-9 mx-auto px-12 py-12 transition-all duration-1000 ease-out will-change-transform will-change-opacity delay-200 ${hasAnimated ? 'translate-y-0 opacity-100 visible' : 'translate-y-12 opacity-0 invisible'}`}>
        <div className="items-start relative self-stretch w-full flex justify-between">
          <div className="inline-flex items-start gap-24 relative">
            {/* Logo */}
            <div className="relative w-32 h-16">
              <img
                className="w-full h-full object-contain"
                alt="Zerthos Logo"
                src={logoSvg}
              />
            </div>

            {/* Contact information */}
            <div className="inline-flex items-start gap-9 relative">
              <div className="inline-flex flex-col items-start gap-2 relative">
                <h3 className="relative w-fit mt-[-1.00px] font-sans font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                  Zerthos Corporate HQ
                </h3>
                <p className="relative w-fit opacity-70 font-sans font-normal text-white text-sm tracking-[0] leading-[22px]">
                  801 South Pointe Drive,
                  <br />
                  TH1 Miami Beach,
                  <br />
                  FL 33139
                </p>
              </div>

              <a
                href="mailto:hello@zerthos.com"
                className="relative w-fit mt-[-1.00px] font-sans font-normal text-white text-base tracking-[0] leading-6 underline whitespace-nowrap"
              >
                hello@zerthos.com
              </a>

              <a
                href="tel:(877)-60-Zerthos"
                className="relative w-fit mt-[-1.00px] font-sans font-normal text-white text-base tracking-[0] leading-6 underline whitespace-nowrap"
              >
                (877)-60-Zerthos
              </a>
            </div>
          </div>

          {/* Legal links */}
          <div className="inline-flex items-start gap-9 relative">
            {legalLinks.map((link, index) => (
              <a
                key={`legal-${index}`}
                href="#"
                className="relative w-fit mt-[-1.00px] font-sans font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <Separator className="w-full h-0.5 bg-white/20" />

        <div className="flex items-center justify-between relative self-stretch w-full">
          <div className="relative w-fit mt-[-1.00px] opacity-70 font-sans font-normal text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            ©Zerthos 2025. All rights reserved.
          </div>

          <div className="inline-flex items-center justify-center gap-3.5 relative">
            <span className="relative w-fit mt-[-1.00px] font-sans font-semibold text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              Connect:
            </span>

            {socialLinks.map((social, index) => (
              <a
                key={`social-${index}`}
                href="#"
                className="relative w-fit mt-[-1.00px] font-sans font-normal text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
