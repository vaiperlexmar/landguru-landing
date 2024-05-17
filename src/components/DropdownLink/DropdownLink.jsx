import { motion, cubicBezier } from "framer-motion";
import chevroneDown from "../../assets/chevrone-down.svg";

export default function DropdownLink({
  name,
  children,
  isActive,
  onShow,
  onHide,
}) {
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
    <div
      className="dropdown__wrapper"
      onClick={onShow}
      onMouseEnter={onShow}
      onMouseLeave={onHide}
    >
      <span
        className={`header__nav-link link header__nav-dropdown ${
          isActive ? "open" : ""
        }`}
      >
        {name}{" "}
        <motion.img
          src={chevroneDown}
          animate={{
            rotate: isActive ? 180 : 0,
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
        className={`header__nav-sublist ${isActive ? "open" : ""}`}
        animate={isActive ? "open" : "closed"}
        variants={variantsSubNav}
      >
        {children}
      </motion.ul>
    </div>
  );
}
