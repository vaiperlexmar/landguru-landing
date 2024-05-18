import companiesImg from "../assets/companies/companies.png";

export default function Companies() {
  return (
    <section className="companies">
      <img className="companies__image" src={companiesImg} alt="" />
      <div className="companies__text-box">
        <p className="subtitle">Core features</p>
        <h2 className="heading-secondary">
          Smart Jackpots that you may love this anytime & anywhere
        </h2>
        <p className="companies__text paragraph paragraph_high-line">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="btn btn_dark-navy">Get Started</button>
      </div>
    </section>
  );
}
