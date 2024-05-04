import { useState, useRef, useEffect } from "react";
import { motion, cubicBezier } from "framer-motion";
import chevroneDown from "../assets/pricing/chevrone.svg";

export default function Pricing() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        ref.current.style.display = "none";
      }, 750);

      return () => clearTimeout(timer);
    } else {
      ref.current.style.display = "block";
    }
  }, [isOpen]);

  return (
    <section className="pricing">
      <p className="subtitle subtitle_gray">Whats the function</p>
      <h3 className="heading-tertiary heading-tertiary_white">
        Let’s see how it works
      </h3>

      <div className="pricing__item pricing__item_navy">
        <header className="pricing__header" onClick={() => handleClick()}>
          <div className="pricing__header-text">
            <h3 className="heading-tertiary heading-tertiary_white">
              Free Plan
            </h3>
            <p className="paragraph">For Small teams or office</p>
          </div>

          <div className="pricing__header-price">
            <div className="pricing__price">
              <span className="pricing__price-currency">$</span>
              <span className="pricing__price-amount">0</span>
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
        </header>

        <motion.ul
          className="pricing__list"
          animate={{
            y: isOpen ? "0" : "-15%",
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.75,
            type: "tween",
            ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
          }}
          ref={ref}
        >
          <li className="pricing__list-item pricing__list-item_checked">
            Ultimate access to all course, exercises and assessments
          </li>
          <li className="pricing__list-item pricing__list-item_checked">
            Free acess for all kind of exercise corrections with downloads.
          </li>
          <li className="pricing__list-item pricing__list-item_checked">
            Total assessment corrections with free download access system
          </li>
          <li className="pricing__list-item pricing__list-item_unchecked">
            Unlimited download of courses on the mobile app contents
          </li>
          <li className="pricing__list-item pricing__list-item_unchecked">
            Download and print courses and exercises in PDF
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
