import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { useSwipeable } from "react-swipeable";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const customStyles = (offsetFromRadius) => {
    // const blurAmount = Math.abs(offsetFromRadius) * 9;
    let angle = offsetFromRadius !== 0 ? -33 : -25;
    let scale = 1 - Math.abs(offsetFromRadius) / 2.5;

    return {
      // opacity: 1 - Math.abs(offsetFromRadius) / 100,
      transform: `rotate(${angle}deg) scale(${scale}) `,
      // filter: `blur(${blurAmount}px)`,
    };
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setGoToSlide((current) => current + 1),
    onSwipedRight: () => setGoToSlide((current) => current - 1),
  });

  return (
    <div
      className={props.className}
      style={{
        margin: props.margin,
      }}
      {...handlers}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        offsetFn={customStyles}
      />
    </div>
  );
}
