import phoneMockup from "../assets/core-features_1/core-mockup.png";
import securityIcon from "../assets/core-features_1/security-contents.svg";
import smartFeaturesIcon from "../assets/core-features_1/smart-features.svg";

export default function CoreFeatures_1() {
  return (
    <section className="core-features_1">
      <p className="subtitle">Core Features</p>
      <h2 className="heading-secondary">
        Smart Jackpotsthat you may love this anytime & anywhere
      </h2>

      <img className="core-features_1__image" src={phoneMockup} alt="" />

      <ul className="core-features_1__feature-list">
        <li className="core-features_1__feature">
          <div className="core-features_1__feature-container">
            <img
              className="core-features_1__feature-icon"
              src={smartFeaturesIcon}
              alt=""
            />
            <div className="core-features_1__feature-content">
              <h4 className="core-features_1__feature-heading heading-fourth">
                Smart Features
              </h4>

              <p className="core-features_1__feature-text paragraph">
                Get your blood tests delivered at let home collect a sample from
                the your blood tests.
              </p>
            </div>
          </div>
        </li>

        <li className="core-features_1__feature">
          <div className="core-features_1__feature-container">
            <img
              className="core-features_1__feature-icon"
              src={securityIcon}
              alt=""
            />
            <div className="core-features_1__feature-content">
              <h4 className="core-features_1__feature-heading heading-fourth">
                Secure Contents
              </h4>

              <p className="core-features_1__feature-text paragraph">
                Get your blood tests delivered at let home collect a sample from
                the your blood tests.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
