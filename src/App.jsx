import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <header className="header">
        <span className="header__logo">
          <img className="header__logo-img" src={logo} alt="" />
          Landguru
        </span>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Adversite
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Supports
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Contact
              </a>
            </li>
          </ul>

          <button className="btn btn_transparent">Get Started</button>
        </nav>
      </header>
    </>
  );
}

export default App;
