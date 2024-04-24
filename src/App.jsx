import Header from "./components/Header";
import Hero from "./components/Hero";
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
    </>
  );
}

export default App;
