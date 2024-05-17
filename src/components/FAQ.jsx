import { useState } from "react";
import Accordion from "./Accordion/Accordion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqItems = [
    {
      title: "How to contact with riders emergency ?",
      text: "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
    },

    {
      title: "App installation failed, how to update system information?",
      text: "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
    },

    {
      title: "Website reponse taking time, how to improve?",
      text: "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
    },

    {
      title: "New update fixed all bug and issues",
      text: "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
    },
  ];

  return (
    <section className="faq">
      <p className="subtitle">Frequent Question</p>
      <h3 className="heading-tertiary">Do you have any question</h3>
      <ul className="faq__list">
        {faqItems.map((item, index) => {
          const { title, text } = item;
          return (
            <li className="faq__item" key={index}>
              <Accordion
                title={title}
                text={text}
                isActive={activeIndex === index}
                onShow={() =>
                  activeIndex === index
                    ? setActiveIndex(-1)
                    : setActiveIndex(index)
                }
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
