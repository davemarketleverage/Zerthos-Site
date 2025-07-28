import React from "react";
import { Button } from "../../../../components/ui/button";

export const FrameSubsection = () => {
  return (
    <section className="flex flex-col w-full max-w-[689px] md:max-w-[500px] sm:max-w-full items-start gap-12 md:gap-8 sm:gap-6 px-4 sm:px-6 md:px-0 pt-8 sm:pt-6 md:pt-0">
      <div className="flex flex-col items-start gap-6 md:gap-4 sm:gap-3 w-full">
        <h1 className="w-full xs:w-[60%] md:w-full mt-16 lg:mt-12 md:mt-8 sm:mt-6 font-heading font-light text-[#202020] text-[80px] xs:text-[50px] md:text-[60px] sm:text-[36px] tracking-[0] leading-[80px] xs:leading-[60px] md:leading-[60px] sm:leading-[36px] break-words">
          Delivering data,
          <br />
          driving innovation
        </h1>

        <p className="w-[90%] font-normal text-[#202020] text-2xl md:text-xl sm:text-lg tracking-[0] leading-6 md:leading-5 sm:leading-4">
          <span className="leading-9 md:leading-7 sm:leading-6">At </span>
          <span className="font-bold italic leading-9 md:leading-7 sm:leading-6">Zerthos</span>
          <span className="leading-9 md:leading-7 sm:leading-6">
            , we&apos;re redefining how data moves.
          </span>
        </p>
      </div>

      <Button className="w-auto h-auto px-6 py-4 md:px-5 md:py-3 sm:px-4 sm:py-3 bg-[linear-gradient(90deg,#E56C15_0%,#EE5522_100%)] overflow-hidden rounded-xl justify-center items-center gap-2.5 inline-flex">
        <span className="text-white text-base md:text-sm sm:text-sm font-semibold leading-6 md:leading-5 sm:leading-4 break-words">
          See TalonX in Action
        </span>
      </Button>
    </section>
  );
};
