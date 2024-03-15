import styles from "./CarouselCard.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import ProjectButton from "./RoundButton";
import Tooltip from "./Tooltip";

function CarouselCard({
  data: projectCards,
  colors,
  index,
  onSlideChange,
  handleDetailsBtnClick,
}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const handleSlideChange = () => {
    onSlideChange(index);
  };

  return (
    <animated.div
      className={`${styles.projectSlide}`}
      style={{
        ...props3,
        backgroundColor: colors[index % colors.length],
      }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={handleSlideChange}
    >
      <img
        src={projectCards.src}
        alt={projectCards.alt}
        className="rounded-[1rem]"
      />
      <div
        className={`${styles.projectLinks} flex gap-[1rem] items-center absolute bottom-[3%] left-[5%]`}
      >
        <Tooltip text="Project details">
          <ProjectButton onClick={handleDetailsBtnClick}>
            <img
              src="src/assets/info.svg"
              alt="Info icon"
              className="w-[6rem] h-[6rem] "
            />
          </ProjectButton>
        </Tooltip>
        <Tooltip text="Access project code">
          <ProjectButton to={projectCards.codeLink}>
            <img
              src="src/assets/developer_mode.svg"
              alt="Code icon"
              className="w-[6rem] h-[6rem] "
            />
          </ProjectButton>
        </Tooltip>
        <Tooltip text="Access project website">
          <ProjectButton to={projectCards.siteLink}>
            <img
              src="src/assets/portal.svg"
              alt="Web icon"
              className="w-[6rem] h-[6rem]"
            />
          </ProjectButton>
        </Tooltip>
      </div>
    </animated.div>
  );
}

export default CarouselCard;
