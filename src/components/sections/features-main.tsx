import React from "react";
import FeatureIssueTracking from "./feature-issue-tracking";
import FeatureBuildMomentum from "./feature-build-momentum";
import FeatureSetDirection from "./feature-set-direction";
import FeatureWorkflows from "./feature-workflows";

const FeaturesMain = () => {
  return (
    <div>
      <FeatureIssueTracking />
      <FeatureBuildMomentum />
      <FeatureSetDirection />
      <FeatureWorkflows />
    </div>
  );
};

export default FeaturesMain;
