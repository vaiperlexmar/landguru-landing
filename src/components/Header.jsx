import { useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import logo from "../assets/logo.svg";
import DropdownLink from "./DropdownLink/DropdownLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <span className="header__logo">
        <img className="header__logo-img" src={logo} alt="" />
        Landguru
      </span>

      <div
        className={`header__hambuger ${isOpen ? "open" : ""}`}
        onClick={() => toggle()}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.nav
        className={`header__nav ${isOpen ? "open" : ""}`}
        animate={{
          display: isOpen ? "block" : "none",
          y: isOpen ? 75 : "-100%",
          opacity: isOpen ? 1 : 0.2,
          style: {
            backgroundColor: isOpen ? "transparent" : "var(--dark-navy)",
          },
        }}
        transition={{
          duration: 0.75,
          type: "tween",
          ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
        }}
      >
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
            <DropdownLink name={"Support"}>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink">
                  Support
                </a>
              </li>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink">
                  Support
                </a>
              </li>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink">
                  Support
                </a>
              </li>
            </DropdownLink>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Contact
            </a>
          </li>
        </ul>

        <button className="btn btn_transparent">Get Started</button>
      </motion.nav>
    </header>
  );
}
