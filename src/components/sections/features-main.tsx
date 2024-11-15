import FeatureBuildMomentum from "./feature-build-momentum";
import FeatureIssueTracking from "./feature-issue-tracking";
import FeatureWorkflows from "./feature-workflows";

const FeaturesMain = () => {
  return (
    <div>
      <FeatureIssueTracking />
      <FeatureBuildMomentum />
      {/* Removed for lesser sections */}
      {/* <FeatureSetDirection /> */}
      <FeatureWorkflows />
    </div>
  );
};

export default FeaturesMain;
