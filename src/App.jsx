import Header from "./components/Header";
import Hero from "./components/Hero";
import QualityFeatures_1 from "./components/QualityFeatures_1";
import CoreFeatures_1 from "./components/CoreFeatures_1";
import QualityFeatures_2 from "./components/QualityFeatures_2";
import Companies from "./components/Companies";
import FunctionsList from "./components/FunctionsList";

import shape_1 from "../src/assets/Rectangle 1.png";
import shape_2 from "../src/assets/Rectangle 1.1.png";
import circle_shape_1 from "../src/assets/circle.png";
import circle_shape_2 from "../src/assets/circle-2.png";

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
        <Hero />
      </div>

      <main className="main">
        <QualityFeatures_1 />
        <CoreFeatures_1 />
        <QualityFeatures_2 />
        <Companies />
        <FunctionsList />
      </main>
    </>
  );
}

export default App;
