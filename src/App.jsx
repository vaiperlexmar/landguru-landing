import Header from "./components/Header";
import phoneMockup from "../src/assets/phone mockup.png";
import playCircle from "../src/assets/play circle.svg";
import dotPattern from "../src/assets/dot-pattern.png";
import shape_1 from "../src/assets/Rectangle 1.png";
import shape_2 from "../src/assets/Rectangle 1.1.png";
import circle_shape_1 from "../src/assets/circle.png";
import circle_shape_2 from "../src/assets/circle-2.png";
import paypalIcon from "../src/assets/paypal.svg";
import googleIcon from "../src/assets/google.svg";
import dropboxIcon from "../src/assets/dropbox.svg";

function App() {
  return (
    <>
      <div className="header__shapes-container">
        <img className="header__shapes-1" src={shape_1} alt="" />
        <img className="header__shapes-2" src={shape_2} alt="" />

        <img
          className="header__shapes-3 header__circle-shape-1"
          src={circle_shape_1}
          alt=""
        />

        <img
          className="header__shapes-3 header__circle-shape-2"
          src={circle_shape_2}
          alt=""
        />
        <Header />
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
              victory of the managments that supplies best design system
              guidelines ever.
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
                  <img
                    className="hero__sponsored-img"
                    src={paypalIcon}
                    alt=""
                  />
                </li>
                <li className="hero__sponsored-item">
                  <img
                    className="hero__sponsored-img"
                    src={googleIcon}
                    alt=""
                  />
                </li>
                <li className="hero__sponsored-item">
                  <img
                    className="hero__sponsored-img"
                    src={dropboxIcon}
                    alt=""
                  />
                </li>
              </ul>{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
