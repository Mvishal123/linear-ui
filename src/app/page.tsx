import Container from "@/components/container";
import AvailableToday from "@/components/sections/available-today";
import Companies from "@/components/sections/companies";
import FeaturesMain from "@/components/sections/features-main";
import HomePageHero from "@/components/sections/homepage-hero";
import WhyLinear from "@/components/sections/why-linear";
import Stars from "@/components/stars";
import clsx from "clsx";

const page = () => {
  return (
    <main>
      <Container className="pb-[16.4rem] pt-[6.4rem] text-center md:pb-[25.6rem]">
        <HomePageHero />
      </Container>
      <Container>
        <Companies />
      </Container>
      <div
        className={clsx(
          "after:stars-mask stars-mask relative z-[-1] -my-[12.8rem] h-[60rem] overflow-hidden [--color:#7877C6] after:absolute after:inset-0 after:z-[-1] after:bg-radial-faded after:opacity-65 after:blur-[20rem]",
          "before:absolute before:-left-1/2 before:top-1/2 before:h-[140%] before:w-[200%] before:rounded-[50%] before:border before:border-[rgba(120,_119,_198,_0.4)] before:bg-background",
        )}
      >
        <Stars />
      </div>
      <WhyLinear />
      <FeaturesMain />
      <div
        className={clsx(
          "after:stars-mask stars-mask relative z-[-1] -mb-[20rem] -mt-[8rem] h-[60rem] overflow-hidden [--color:#7876C5] after:absolute after:inset-0 after:z-[-1] after:bg-radial-faded after:opacity-65 after:blur-[20rem]",
          "before:absolute before:-left-1/2 before:bottom-1/2 before:h-[150%] md:before:h-[500%] before:w-[200%] before:rounded-[50%] before:border before:border-[rgba(120,_119,_198,_0.4)] before:bg-background",
        )}
      >
        <Stars className="relative -top-[10rem] lg:translate-x-1/2 -z-10 rotate-180" />
      </div>
      <AvailableToday />
    </main>
  );
};

export default page;
