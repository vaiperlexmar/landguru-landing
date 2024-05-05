import { useState, useRef, useEffect } from "react";
import { motion, cubicBezier } from "framer-motion";
import chevroneDown from "../../assets/pricing/chevrone.svg";

export default function PricingDropdown({ plan, color }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        ref.current.style.display = "none";
      }, 500);

      return () => clearTimeout(timer);
    } else {
      ref.current.style.display = "block";
    }
  }, [isOpen]);

  // transformation of features list

  const planFeatures = plan.features.map((feature, index) => {
    return (
      <li
        key={index}
        className={`${
          feature.checked
            ? "pricing__list-item_checked"
            : "pricing__list-item_unchecked"
        } pricing__list-item`}
      >
        {feature.text}
      </li>
    );
  });

  return (
    <motion.div
      className={`pricing__item pricing__item_${color}`}
      transition={{
        duration: 0.75,
        type: "tween",
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      }}
    >
      <motion.header
        className="pricing__header"
        onClick={() => handleClick()}
        animate={{
          marginBottom: isOpen ? "2rem" : "1rem",
        }}
      >
        <div className="pricing__header-text">
          {plan.name === "Premium" ? (
            <p className=" pricing__recomended">Recomended</p>
          ) : null}

          <h3 className="heading-tertiary heading-tertiary_white">
            {plan.name}
          </h3>
          <p className="paragraph pricing__description">{plan.description}</p>
        </div>

        <div className="pricing__price-container">
          <div className="pricing__price">
            <span className="pricing__price-currency">$</span>
            <span className="pricing__price-amount">{plan.price}</span>
            <span className="pricing__price-period">/mo</span>
          </div>
          <div className="pricing__header-arrow">
            <motion.img
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              src={chevroneDown}
              alt=""
            />
          </div>
        </div>
      </motion.header>

      <motion.ul
        className="pricing__list"
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "100%" : 0,
        }}
        transition={{
          duration: 0.75,
          type: "tween",
          ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
          opacity: { duration: 0.5 },
        }}
        ref={ref}
      >
        {planFeatures}

        <button className="btn">Signup Now</button>
      </motion.ul>
    </motion.div>
  );
}
