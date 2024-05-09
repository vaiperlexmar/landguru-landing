import { useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import logo from "../assets/logo.svg";
import DropdownLink from "./DropdownLink/DropdownLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const isMobile = useMediaQuery("(max-width:767.5px)");

  function toggleHamburger() {
    setIsOpen(!isOpen);
    setActiveIndex(-1); // To close the dropdown when closing the hamburger
  }

  const attributes = isMobile
    ? {
        animate: {
          display: isOpen ? "block" : "none",
          y: isOpen ? "0" : "-100%",
          opacity: isOpen ? 0.99 : 0.2,
        },

        transition: {
          duration: 0.75,
          type: "tween",
          ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
        },

        style: {
          display: "none",
        },
      }
    : { style: { display: "flex", transform: "none" } };

  return (
    <header className="header">
      <span className="header__logo">
        <img className="header__logo-img" src={logo} alt="" />
        Landguru
      </span>

      <div
        className={`header__hambuger ${isOpen ? "open" : ""}`}
        onClick={() => toggleHamburger()}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.nav
        className={`header__nav ${isOpen ? "open" : ""}`}
        {...attributes}
      >
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link link">
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <DropdownLink
              name={"Adversite"}
              isActive={activeIndex === 0}
              onShow={() =>
                activeIndex === 0 ? setActiveIndex(-1) : setActiveIndex(0)
              }
            >
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink sublink">
                  Adversite
                </a>
              </li>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink sublink">
                  Adversite
                </a>
              </li>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink sublink">
                  Adversite
                </a>
              </li>
            </DropdownLink>
          </li>

          <li className="header__nav-item">
            <DropdownLink
              name={"Support"}
              isActive={activeIndex === 1}
              onShow={() =>
                activeIndex === 1 ? setActiveIndex(-1) : setActiveIndex(1)
              }
            >
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink sublink">
                  Support
                </a>
              </li>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink sublink">
                  Support
                </a>
              </li>
              <li className="header__nav-subitem">
                <a href="#" className="header__nav-sublink sublink">
                  Support
                </a>
              </li>
            </DropdownLink>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link link">
              Contact
            </a>
          </li>
        </ul>

        <button className="btn btn_transparent">Get Started</button>
      </motion.nav>
    </header>
  );
}
