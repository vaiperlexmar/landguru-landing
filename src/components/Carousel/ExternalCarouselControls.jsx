import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import arrowActive from "../../assets/carousel/arrow_active.svg";
import arrowDisabled from "../../assets/carousel/arrow_disabled.svg";

export default function ExternalCarouselControls(props) {
  const [state, setState] = useState({
    currentSlide: 0,
  });

  const buttonStyle = {
    padding: "5px 20px",
    margin: "5px 0px",
    border: "none",
    backgroundColor: "transparent",
  };

  const containerStyle = { margin: "5px 0 20px" };

  const next = () => {
    setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  const prev = () => {
    setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  const updateCurrentSlide = (index) => {
    const { currentSlide } = state;
    console.log(state);

    if (currentSlide !== index) {
      setState({
        currentSlide: index,
      });
    }
  };

  return (
    <div>
      <Carousel
        selectedItem={state.currentSlide}
        onChange={() => updateCurrentSlide(state.currentSlide)}
        {...props}
      >
        {props.children}
      </Carousel>

      <div style={containerStyle} className="carousel-controls">
        <button
          onClick={prev}
          style={buttonStyle}
          className="carousel-controls__prev"
          disabled={state.currentSlide === 0}
        >
          {state.currentSlide === 0 ? (
            <img src={arrowDisabled} alt="" />
          ) : (
            <img
              src={arrowActive}
              alt=""
              style={{ transform: "rotate(180deg)" }}
            />
          )}
        </button>
        <button
          onClick={next}
          style={buttonStyle}
          className="carousel-controls__prev"
          disabled={state.currentSlide === props.children.length - 1}
        >
          {state.currentSlide === props.children.length - 1 ? (
            <img
              src={arrowDisabled}
              alt=""
              style={{ transform: "rotate(180deg)" }}
            />
          ) : (
            <img src={arrowActive} alt="" />
          )}
        </button>
      </div>
    </div>
  );
}
