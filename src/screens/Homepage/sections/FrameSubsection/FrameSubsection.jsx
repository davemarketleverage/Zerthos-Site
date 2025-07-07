import React from "react";
import { Button } from "../../../../components/ui/button";

export const FrameSubsection = () => {
  return (
    <section className="flex flex-col w-full max-w-[689px] items-start gap-12">
      <div className="flex flex-col items-start gap-6 w-full">
        <h1 className="w-full mt-[-1.00px] font-heading font-light text-[#202020] text-[80px] tracking-[0] leading-[80px] break-words">
          Delivering data,
          <br />
          driving innovation
        </h1>

        <p className="w-full font-normal text-[#202020] text-2xl tracking-[0] leading-6">
          <span className="leading-9">At </span>
          <span className="font-bold italic leading-9">Zerthos</span>
          <span className="leading-9">
            , we&apos;re redefining how data moves.
          </span>
        </p>
      </div>

      <Button className="w-auto h-auto px-6 py-4 bg-[linear-gradient(90deg,#E56C15_0%,#EE5522_100%)] overflow-hidden rounded-xl justify-center items-center gap-2.5 inline-flex">
        <span className="text-white text-base font-semibold leading-6 break-words">
          See TalonX in Action
        </span>
      </Button>
    </section>
  );
};
