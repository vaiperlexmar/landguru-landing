import FeatureList from "./FeatureList.jsx/FeatureList";
import vectorEditingIcon from "../assets/quality-features_1/vector-editing.svg";
import customizeIcon from "../assets/quality-features_1/customize-monitoring.svg";
import qualityShortPeriodIcon from "../assets/quality-features_1/quality-short-period.svg";

export default function QualityFeatures_1() {
  const qualityFeatures = [
    {
      name: "Vector editing",
      description:
        "Get your blood tests delivered at let home collect a sample from the your blood tests.",
      img: vectorEditingIcon,
    },

    {
      name: "Customize monitoring",
      description:
        "Get your blood tests delivered at let home collect a sample from the your blood tests.",
      img: customizeIcon,
    },

    {
      name: "Quality short period",
      description:
        "Get your blood tests delivered at let home collect a sample from the your blood tests.",
      img: qualityShortPeriodIcon,
    },
  ];

  return (
    <section className="features-list quality-features_1">
      <p className="features-list__section-name subtitle">Quality features</p>
      <h3 className="features-list__heading heading_tertiary">
        Meet exciting feature of app
      </h3>

      <FeatureList items={qualityFeatures} listName="features-list" />
    </section>
  );
}
