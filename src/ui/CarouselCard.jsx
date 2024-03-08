import { Link } from "react-router-dom";
import styles from "./CarouselCard.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function CarouselCard({ data: projectCards }) {

  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div 
      className={`${styles.projectSlide} `} 
      style={props3} 
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
          <img src={projectCards.src} alt={projectCards.alt} />
          <div className={`${styles.projectLinks}`}>
            <Link to={projectCards.codeLink}>Code</Link>
            <Link to={projectCards.siteLink}>Site</Link>
          </div>
    </animated.div>
  );
}


export default CarouselCard;
