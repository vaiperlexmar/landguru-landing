import { useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import chevroneDown from "../../assets/chevrone-down.svg";

export default function DropdownLink({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const variantsSubNav = {
    open: { height: "auto", y: "0", opacity: 1 },
    closed: {
      height: 0,
      y: 0,
      opacity: 0,
      visibility: "hidden",
    },
  };

  return (
    <>
      <span
        className={`header__nav-link header__nav-dropdown ${
          isOpen ? "open" : ""
        }`}
        onClick={() => handleClick()}
      >
        {name}{" "}
        <motion.img
          src={chevroneDown}
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
            type: "tween",
            ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
          }}
          alt=""
        />
      </span>

      <motion.ul
        className={`header__nav-sublist ${isOpen ? "open" : ""}`}
        animate={isOpen ? "open" : "closed"}
        variants={variantsSubNav}
      >
        {children}
      </motion.ul>
    </>
  );
}
