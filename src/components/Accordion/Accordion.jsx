import { motion, AnimatePresence } from "framer-motion";
import plusIcon from "../../assets/faq/plus-icon.svg";
import minusIcon from "../../assets/faq/minus-icon.svg";

export default function Accordion({ title, text, onShow, isActive }) {
  return (
    <div className="accordion">
      <div className="accordion__text-box">
        <button className="accordion__title" onClick={() => onShow()}>
          <div className="accordion__mark">
            {isActive ? (
              <img src={minusIcon} alt="" />
            ) : (
              <img src={plusIcon} alt="" />
            )}
          </div>

          {title}
        </button>
        <AnimatePresence>
          {isActive && (
            <motion.p
              className="accordion__text"
              initial={{ opacity: 0, display: "none", height: "0px", y: 0 }}
              animate={{
                opacity: 1,
                display: "block",
                height: "auto",
                y: 0,
              }}
              exit={{ opacity: 0, display: "none", height: 0, y: -10 }}
            >
              {text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <hr />
    </div>
  );
}
