import React from "react";
import FeatureIssueTracking from "./feature-issue-tracking";
import FeatureBuildMomentum from "./feature-build-momentum";
import FeatureSetDirection from "./feature-set-direction";

const FeaturesMain = () => {
  return (
    <div>
      <FeatureIssueTracking />
      <FeatureBuildMomentum />
      <FeatureSetDirection />
    </div>
  );
};

export default FeaturesMain;
