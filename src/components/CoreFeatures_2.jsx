import phoneMockup from "../assets/core-features_2/phone-mockup.png";

export default function CoreFeatures_2() {
  return (
    <section className="core-features_2">
      <img className="core-features_2__image" src={phoneMockup} alt="" />

      <div className="core-features_2__text-box">
        <p className="subtitle">Core Features</p>
        <h2 className="heading-secondary">
          Secure Payment Transaction System with #1 Ranking
        </h2>
        <p className="paragraph">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="btn btn_navy">Learn more</button>
      </div>
    </section>
  );
}
