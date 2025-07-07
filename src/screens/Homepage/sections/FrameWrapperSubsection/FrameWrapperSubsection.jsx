import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperSubsection = () => {
  return (
    <Card className="flex flex-col w-full max-w-[432px] h-auto min-h-[600px] items-start justify-center gap-12 px-9 py-12 bg-[#f8f8f8] rounded-3xl">
      <CardContent className="p-0 space-y-12 w-full">
        <h2 className="w-fit font-heading font-normal text-[#202020] text-6xl tracking-[0] leading-[60px]">
          Watch
          <br />
          Zerthos
          <br />
          in action
        </h2>

        <p className="w-full font-normal text-[#565a67] text-2xl tracking-[0] leading-9">
          Watch our technology
          <br />
          demo to see how Zerthos transform data transmission with unmatched
          speed and
          <br />
          security.
        </p>
      </CardContent>
    </Card>
  );
};
