import Header from "./components/Header";
import phoneMockup from "../src/assets/phone mockup.png";

function App() {
  return (
    <>
      <Header />
      <section className="hero">
        <img src={phoneMockup} alt="" />
      </section>
    </>
  );
}

export default App;
