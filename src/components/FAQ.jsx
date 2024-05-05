import Accordion from "./Accordion/Accordion";

export default function FAQ() {
  const faqItems = [
    {
      title: "How to contact with riders emergency ?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero magni praesentium. Corrupti explicabo suscipit amet. Possimus, aliquam voluptas saepe, facilis omnis atque, quo ab ipsam reprehenderit consequuntur placeat? Earum?",
    },

    {
      title: "App installation failed, how to update system information?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero magni praesentium. Corrupti explicabo suscipit amet. Possimus, aliquam voluptas saepe, facilis omnis atque, quo ab ipsam reprehenderit consequuntur placeat? Earum?",
    },

    {
      title: "Website reponse taking time, how to improve?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero magni praesentium. Corrupti explicabo suscipit amet. Possimus, aliquam voluptas saepe, facilis omnis atque, quo ab ipsam reprehenderit consequuntur placeat? Earum?",
    },

    {
      title: "New update fixed all bug and issues",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero magni praesentium. Corrupti explicabo suscipit amet. Possimus, aliquam voluptas saepe, facilis omnis atque, quo ab ipsam reprehenderit consequuntur placeat? Earum?",
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
              <Accordion title={title} text={text} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
