import { Link } from "react-router-dom";
import styles from "./CarouselCard.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import ProjectButton from "./RoundButton";

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
          <div className={`${styles.projectLinks} flex gap-[4rem] items-center absolute bottom-0 left-[10rem]`}>
            <ProjectButton to={projectCards.codeLink}>
              <img src="src/assets/developer_mode.svg" alt="Code icon" className="w-[6rem] h-[6rem] "  />
            </ProjectButton>
            <ProjectButton to={projectCards.siteLink}>
              <img src="src/assets/portal.svg" alt="Web icon" className="w-[6rem] h-[6rem]" />
            </ProjectButton>
          </div>
    </animated.div>
  );
}


export default CarouselCard;
