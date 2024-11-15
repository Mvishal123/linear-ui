import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/cashapp";
import { DescriptLogo } from "../logos/description";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { OpenSeaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";

const Companies = () => {
  return (
    <div>
      <p className="mb-[4.8rem] text-center text-2xl">
        <span className="text-white/80">
          Powering the world’s best product teams.
        </span>{" "}
        <br />
        From next-gen startups to established enterprises.
      </p>
      <div className="grid grid-cols-2 place-items-center gap-x-[2.4rem] gap-y-[3.2rem] md:grid-cols-6 [&_svg]:max-w-[16rem]">
        <RampLogo />
        <LoomLogo />
        <VercelLogo />
        <DescriptLogo />
        <CashAppLogo />
        <RaycastLogo />
        <MercuryLogo className="hidden md:block" />
        <RetoolLogo className="hidden md:block" />
        <AlanLogo className="hidden md:block" />
        <ArcLogo className="hidden md:block" />
        <OpenSeaLogo className="hidden md:block" />
        <PitchLogo className="hidden md:block" />
      </div>
    </div>
  );
};

export default Companies;
