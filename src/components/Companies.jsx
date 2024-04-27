import companiesImg from "../assets/companies/companies.png";

export default function Companies() {
  return (
    <section className="companies">
      <img src={companiesImg} alt="" />
      <div className="text__box">
        <p className="subtitle">Core features</p>
        <h2 className="heading-secondary">
          Smart Jackpots that you may love this anytime & anywhere
        </h2>
        <p className="paragraph">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="btn btn_navy">Get Started</button>
      </div>
    </section>
  );
}
