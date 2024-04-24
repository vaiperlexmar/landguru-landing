import phoneMockup from "../assets/phone mockup.png";
import playCircle from "../assets/play circle.svg";
import dotPattern from "../assets/dot-pattern.png";
import paypalIcon from "../assets/paypal.svg";
import googleIcon from "../assets/google.svg";
import dropboxIcon from "../assets/dropbox.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img className="hero__mockup" src={phoneMockup} alt="" />
        <img className="hero__dot-pattern" src={dotPattern} alt="" />
      </div>
      <div className="hero__textbox">
        <h1 className="heading-primary hero__heading">
          Experience your ultimate mobile application
        </h1>
        <p className="paragraph hero__text">
          Get your blood tests delivered at let home collect sample from the
          victory of the managments that supplies best design system guidelines
          ever.
        </p>

        <div className="hero__cta">
          <a className="hero__cta-btn btn btn_white">Get Started</a>
          <a href="#" className="hero__cta-video link">
            <img src={playCircle} alt="" /> Watch video
          </a>
        </div>

        <p className="hero__sponsored paragraph">
          Sponsored by:{" "}
          <ul className="hero__sponsored-list">
            <li className="hero__sponsored-item">
              <img className="hero__sponsored-img" src={paypalIcon} alt="" />
            </li>
            <li className="hero__sponsored-item">
              <img className="hero__sponsored-img" src={googleIcon} alt="" />
            </li>
            <li className="hero__sponsored-item">
              <img className="hero__sponsored-img" src={dropboxIcon} alt="" />
            </li>
          </ul>{" "}
        </p>
      </div>
    </section>
  );
}
