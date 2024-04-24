import vectorEditingIcon from "../assets/quality-features_1/vector-editing.svg";
import customizeIcon from "../assets/quality-features_1/customize-monitoring.svg";
import qualityShortPeriodIcon from "../assets/quality-features_1/quality-short-period.svg";

export default function QualityFeatures_1() {
  return (
    <section className="quality-features_1">
      <p className="quality-features_1__section-name subtitle">
        Quality features
      </p>
      <h3 className="quality-features_1__heading heading_tertiary">
        Meet exciting feature of app
      </h3>

      <ul className="quality-features_1__feature-list">
        <li className="quality-features_1__feature">
          <div className="quality-features_1__feature-container">
            <img
              className="quality-features_1__feature-icon"
              src={vectorEditingIcon}
              alt=""
            />
            <h4 className="quality-features_1__feature-heading heading_fourth">
              Vector editing
            </h4>

            <p className="quality-features_1__feature-text paragraph">
              Get your blood tests delivered at let home collect a sample from
              the your blood tests.
            </p>
          </div>
        </li>

        <li className="quality-features_1__feature">
          <div className="quality-features_1__feature-container">
            <img
              className="quality-features_1__feature-icon"
              src={customizeIcon}
              alt=""
            />
            <h4 className="quality-features_1__feature-heading heading_fourth">
              Customize & Monitoring
            </h4>

            <p className="quality-features_1__feature-text paragraph">
              Get your blood tests delivered at let home collect a sample from
              the your blood tests.
            </p>
          </div>
        </li>

        <li className="quality-features_1__feature">
          <div className="quality-features_1__feature-container">
            <img
              className="quality-features_1__feature-icon"
              src={qualityShortPeriodIcon}
              alt=""
            />
            <h4 className="quality-features_1__feature-heading heading_fourth">
              Quality & short-period
            </h4>

            <p className="quality-features_1__feature-text paragraph">
              Get your blood tests delivered at let home collect a sample from
              the your blood tests.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
