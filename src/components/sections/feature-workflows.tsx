"use client";

import clsx from "clsx";
import Button, { IconWrapper } from "../button";
import { Features } from "../features";
import FLogo from "../icons/features/f-logo";
import FigmaLogo from "../icons/features/figma-logo";
import GithubLogo from "../icons/features/github-logo";
import GitlabLogo from "../icons/features/gitlab-logo";
import RadioLogo from "../icons/features/radio-logo";
import ZLogo from "../icons/features/z-logo";
import WorkflowMainIcon from "../logos/workflow-main";
import { useInView } from "react-intersection-observer";

const FeatureWorkflows = () => {
  const { inView, ref } = useInView({ threshold: 0.4 });
  return (
    <Features featureColor="62, 36, 118" featureColorDark="62, 36, 118">
      <div
        className={clsx(
          "w-full px-8",
          "relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]",
        )}
      >
        <h2
          className={clsx(
            "text-gradient mb-10 text-center text-6xl md:text-8xl",
            "translate-y-[40%] transition-transform duration-700 ease-in-out [.in-view_&]:translate-y-0",
          )}
        >
          Linear workflows. <br /> Exponential results.
        </h2>

        <div
          className={clsx(
            "flex items-center justify-center gap-4 [&_svg]:h-full [&_svg]:w-full [&_svg]:rounded-full [&_svg]:fill-white/80",
            "duration-200 [&_.feature]:opacity-0 [&_.move-left]:transition-[transform,opacity]",
            inView ? "[&_.feature]:animate-feature-slide" : "",
          )}
          ref={ref}
        >
          <WorkflowIcon
            icon={FigmaLogo}
            className="feature p-2 [--index:3] [--size:4rem] [--translate:2rem]"
          />
          <WorkflowIcon
            icon={GitlabLogo}
            className="feature p-3 [--index:2] [--size:5.6rem] [--translate:2rem]"
          />
          <WorkflowIcon
            icon={ZLogo}
            className="feature p-4 [--index:1] [--size:7.2rem] [--translate:2rem]"
          />
          <div
            className={clsx(
              "relative z-10 mx-6 [mask-composite:exclude] after:absolute after:left-1/2 after:top-1/2 after:z-0 after:size-[12.8rem] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-transparent-white after:bg-[linear-gradient(rgba(108,_56,_255,_0.3)_0%,_rgba(139,_98,_255,_0.3)_100%)]",
              "before:absolute before:inset-0 before:left-1/2 before:top-1/2 before:z-20 before:size-[7.2rem] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-brand/80 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] [&_svg]:size-[7.2rem]",
            )}
          >
            <WorkflowMainIcon />
          </div>
          <WorkflowIcon
            icon={FLogo}
            className="feature p-4 [--index:1] [--size:7.2rem] [--translate:-2rem]"
          />
          <WorkflowIcon
            icon={GithubLogo}
            className="feature p-3 [--index:2] [--size:5.6rem] [--translate:-2rem]"
          />
          <WorkflowIcon
            icon={RadioLogo}
            className="feature p-2 [--index:3] [--size:4rem] [--translate:-2rem]"
          />
        </div>
      </div>
      <div className="mt-[9.6rem] flex max-w-[65rem] flex-col items-center gap-14 text-center text-2xl font-normal md:text-4xl">
        <p>
          From customer support integrations to powerful Git automations, Linear
          streamlines the entire product development process.
        </p>
        <Button variant="secondary" size="small">
          Discover intergrations
          <IconWrapper>→</IconWrapper>
        </Button>
      </div>
    </Features>
  );
};

export default FeatureWorkflows;

type WorkflowIconProps = {
  icon: React.FC;
  className?: string;
};

const WorkflowIcon = ({ icon: Icon, className }: WorkflowIconProps) => {
  return (
    <div
      className={clsx(
        "bg-[rgb(247, 248, 248)] flex size-[var(--size)] items-center justify-center rounded-full border border-transparent-white",
        className,
      )}
    >
      <Icon />
    </div>
  );
};
