"use client";

import React from "react";
import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

const FeatureBuildMomentum = () => {
  return (
    <Features featureColor="40,87,255" featureColorDark="48,58,117">
      <Features.Main
        imageSize="big"
        heading={
          <>
            Build momentum <br />
            with cycles
          </>
        }
        subheading="Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress."
        image="/cycles.webp"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Parent and sub-issues.",
            text: "Break larger takss into smaller issues",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Automated backlog.",
            text: "Linear will auto-close and auto-archive issues.",
          },
          {
            icon: WorkflowsIcon,
            title: "Custom workflows",
            text: "Define unique issue states for each team.",
          },
          {
            icon: CustomViewsIcon,
            title: "Filters and custom views.",
            text: "See only what's relevant for you.",
          },
          {
            icon: DiscussionIcon,
            title: "Discussion.",
            text: "Collaborate on issues without losing context.",
          },
          {
            icon: IssuesIcon,
            title: "Issue templates.",
            text: "Guide your team to write effective issues.",
          },
        ]}
      />
    </Features>
  );
};

export default FeatureBuildMomentum;
