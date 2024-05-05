import { useState } from "react";

export default function Accordion({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="faq__title" onClick={() => handleClick()}>
        {title}
      </button>
      <p className="faq__text" style={{ display: isOpen ? "block" : "none" }}>
        {text}
      </p>
    </>
  );
}
