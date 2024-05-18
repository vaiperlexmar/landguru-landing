import FeatureList from "./FeatureList/FeatureList";
import smartFeaturesIcon from "../assets/quality-features_2/smart-features.svg";
import fastPerformanceIcon from "../assets/quality-features_2/fast-performance.svg";
import unlimitedContentIcon from "../assets/quality-features_2/unlimited-content.svg";
import ultimateCustomizationIcon from "../assets/quality-features_2/ultimate-customization.svg";
import boostProductivityIcon from "../assets/quality-features_2/boost-productivity.svg";
import customerSupportIcon from "../assets/quality-features_2/customer-support.svg";

export default function QualityFeatures_2() {
  const qualityFeatures = [
    {
      name: "Smart Features",
      description:
        "Get your blood tests delivered at let home collect sample from the victory of the managments.",
      img: smartFeaturesIcon,
    },

    {
      name: "Fast Performance",
      description:
        "Get your blood tests delivered at let home collect sample from the victory of the managments.",
      img: fastPerformanceIcon,
    },

    {
      name: "Unlimited Content",
      description:
        "Get your blood tests delivered at let home collect sample from the victory of the managments.",
      img: unlimitedContentIcon,
    },

    {
      name: "Ultimate Customization",
      description:
        "Get your blood tests delivered at let home collect sample from the victory of the managments.",
      img: ultimateCustomizationIcon,
    },

    {
      name: "Boost Productivity",
      description:
        "Get your blood tests delivered at let home collect sample from the victory of the managments.",
      img: boostProductivityIcon,
    },

    {
      name: "Customer Support",
      description:
        "Get your blood tests delivered at let home collect sample from the victory of the managments.",
      img: customerSupportIcon,
    },
  ];

  return (
    <section className="features-list quality-features_2">
      <p className="features-list__section-name subtitle">Quality features</p>
      <h3 className="features-list__heading heading-tertiary">
        Meet exciting feature of app
      </h3>

      <FeatureList items={qualityFeatures} listName="features-list" />
    </section>
  );
}
