import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Footer } from "../../../../components/ui/footer";

export const DivSubsection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  React.useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full bg-[#202020] h-screen flex flex-col">
      {/* Top section with CTA */}
      <div className={`w-full flex-1 bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/bg-mask-group.png)] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out will-change-transform will-change-opacity flex items-center pt-32 sm:pt-20 md:pt-0 ${hasAnimated ? 'translate-y-0 opacity-100 visible' : 'translate-y-12 opacity-0 invisible'}`}>
        <div className="flex flex-col lg:flex-row w-full max-w-[1344px] items-start gap-6 sm:gap-8 md:gap-12 lg:gap-40 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="relative w-fit mt-[-1.00px] font-heading font-normal text-[#202020] text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-[0] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[60px]">
            Need a tailored
            <br />
            solution?
          </div>

          <Card className="flex-1 bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 lg:gap-9 p-0 pb-4">
              <p className="relative self-stretch mt-[-1.00px] font-sans font-normal text-[#202020] text-sm sm:text-base md:text-lg lg:text-2xl tracking-[0] leading-5 sm:leading-6 md:leading-7 lg:leading-9">
                Our TalonX and [vault_encrypt] technologies adapt to your
                specific needs with minimal code changes. Get enterprise-grade
                support from our expert team.
              </p>

              <Button className="px-4 sm:px-5 md:px-6 lg:px-9 py-2.5 sm:py-3 md:py-3.5 lg:py-4 h-auto rounded-lg sm:rounded-xl bg-[linear-gradient(90deg,rgba(229,108,21,1)_0%,rgba(238,85,34,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(229,108,21,0.9)_0%,rgba(238,85,34,0.9)_100%)] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1">
                <span className="font-semibold text-white text-xs sm:text-sm md:text-base transition-all duration-300 ease-in-out">
                  Contact out team
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </section>
  );
};
