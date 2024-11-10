import React from "react";
import BlazingFast from "../illustrations/blazing-fast";
import LinearLogo from "../illustrations/linear-log";

const WhyLinear = () => {
  return (
    <div className="text-center">
      <h2 className="mb-7 text-4xl md:text-7xl">
        Unlike any tool <br /> you've used before
      </h2>
      <p className="mx-auto mb-7 max-w-[68rem] text-lg text-secondary-text md:text-xl">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden px-6 md:flex-wrap">
        <div className="bg-glass-gradient snap-center md:p-14 col-span-4 flex h-full min-h-[48rem] max-w-full shrink-0 flex-col rounded-[4.8rem] border border-transparent-white p-8 md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)]">
          <div className="justify-">
            <h3 className="mb-4 text-3xl">Built for your keyboard</h3>
            <p className="text-md text-secondary-text">
              Fly through your tasks with rapid-fire keyboard shortcuts for
              everything. Literally everything.
            </p>
          </div>
        </div>
        <div className="bg-glass-gradient snap-center md:p-14 group relative col-span-2 flex h-full min-h-[48rem] max-w-full shrink-0 overflow-hidden rounded-[4.8rem] border border-transparent-white p-8 md:max-w-[calc(33.33%-12px)] md:basis-[calc(33.33%-12px)]">
          <div className="linear-faded-mask absolute inset-0 -top-1/4 transition-[filter] duration-300 group-hover:brightness-150">
            <BlazingFast />
          </div>
          <div className="flex flex-col items-center justify-end">
            <h3 className="mb-4 text-3xl">Breathtakingly fast</h3>
            <p className="text-md text-secondary-text">
              Built for speed with 50ms interactions and real-time sync.
            </p>
          </div>
        </div>
        <div className="bg-glass-gradient snap-center md:p-14 group relative col-span-2 flex h-full min-h-[48rem] max-w-full shrink-0 rounded-[4.8rem] border border-transparent-white p-8 max-md:max-w-[100vw] md:max-w-[calc(33.33%-12px)] md:basis-[calc(33.33%-12px)]">
          <div className="pointer-events-none absolute inset-0 transition-[filter] duration-300 group-hover:brightness-150">
            <LinearLogo />
          </div>
          <div className="flex flex-col items-center justify-end">
            <h3 className="mb-4 text-3xl">
              Designed for modern software teams
            </h3>
            <p className="text-md text-secondary-text">
              Comes with built-in workflows that create focus and routine.
            </p>
          </div>
        </div>
        <div className="bg-glass-gradient snap-center md:p-14 col-span-4 flex h-full min-h-[48rem] max-w-full shrink-0 justify-center rounded-[4.8rem] border border-transparent-white p-8 md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)]">
          <div className="">
            <h3 className="mb-4 text-3xl">Meet your command line</h3>
            <p className="text-md text-secondary-text">
              Complete any action in seconds with the global command menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLinear;
