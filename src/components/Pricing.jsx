import PricingDropdown from "./PricingDropdown/PricingDropdown";
import { useState, useEffect } from "react";
export default function Pricing() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pricing")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section className="pricing">
      <p className="subtitle subtitle_gray">Whats the function</p>
      <h3 className="heading-tertiary heading-tertiary_white">
        Let’s see how it works
      </h3>
      {data &&
        data.map((plan) => {
          if (plan.id % 2 === 0) {
            return (
              <PricingDropdown key={plan.id} plan={plan} color={"white"} />
            );
          }
          return <PricingDropdown key={plan.id} plan={plan} color={"navy"} />;
        })}
    </section>
  );
}
