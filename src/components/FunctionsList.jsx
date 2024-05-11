import arrow from "../assets/functional-list/arrow.svg";
import circle_shape_1 from "../assets/shapes/shape_circle.svg";
import shape_1 from "../assets/shapes/shape_rectangle.svg";

export default function FunctionsList() {
  return (
    <section className="functions">
      <div className="functions__shape-container">
        <img
          className="functions__shape functions__circle-shape functions__circle-shape_top-side"
          src={circle_shape_1}
          alt=""
        />
        <img
          className="functions__shape functions__circle-shape functions__circle-shape_bottom-side"
          src={circle_shape_1}
          alt=""
        />
        <img
          className="functions__shape functions__shape-1"
          src={shape_1}
          alt=""
        />
      </div>

      <p className="subtitle subtitle_gray">Whats the function</p>
      <h3 className="heading-tertiary heading-tertiary_white">
        Let’s see how it works
      </h3>

      <ul className="functions__list">
        <li className="functions__item">
          <div className="function__number">01</div>
          <h4 className="function__title heading-fourth">
            Set disbursement Instructions
          </h4>
          <p className="function__text paragraph">
            Get your blood tests delivered at home collect a sample from they
            our blood tests.
          </p>
          <img className="function__arrow" src={arrow} alt="" />
        </li>

        <li className="functions__item">
          <div className="function__number">02</div>
          <h4 className="function__title heading-fourth">
            Assembly retrieves funds from your account
          </h4>
          <p className="function__text paragraph">
            Get your blood tests delivered at home collect a sample from they
            our blood tests.
          </p>
          <img
            className="function__arrow function__arrow_right"
            src={arrow}
            alt=""
          />
        </li>

        <li className="functions__item">
          <div className="function__number">03</div>
          <h4 className="function__title heading-fourth">
            Assembly initiates disbursement
          </h4>
          <p className="function__text paragraph">
            Get your blood tests delivered at home collect a sample from they
            our blood tests.
          </p>
          <img className="function__arrow" src={arrow} alt="" />
        </li>

        <li className="functions__item">
          <div className="function__number">04</div>
          <h4 className="function__title heading-fourth">
            Customer receives funds payment
          </h4>
          <p className="function__text paragraph">
            Get your blood tests delivered at home collect a sample from they
            our blood tests.
          </p>
        </li>
      </ul>
    </section>
  );
}
