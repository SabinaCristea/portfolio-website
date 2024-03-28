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

  const btnDimensions =
    "w-[3.5rem] sm:w-[4rem] md:w-[4.5rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]";

  return (
    <animated.div
      className="flex flex-col justify-center items-center w-[30rem] h-[17rem] sm:w-[40rem] sm:h-[23rem] md:w-[45rem] md:h-[26rem] lg:w-[55rem] lg:h-[32rem] xl:w-[65rem] xl:h-[37rem] 2xl:w-[77rem] 2xl:h-[44rem] px-[1rem] sm:px-[1rem] md:px-[1.2rem] lg:px-[2rem] py-0 rounded-[1.5rem] sm:rounded-[2rem]"
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
      <div className="flex gap-[1.5rem] sm:gap-[1rem] items-center absolute bottom-[-1rem] sm:bottom-[3%] sm:left-[5%]">
        <Tooltip text="Project details">
          <ProjectButton onClick={handleDetailsBtnClick}>
            <img
              src="public/assets/svgs/info.svg"
              alt="Info icon"
              className={btnDimensions}
            />
          </ProjectButton>
        </Tooltip>
        <Tooltip text="Access project code">
          <ProjectButton to={projectCards.codeLink}>
            <img
              src="public/assets/svgs/developer_mode.svg"
              alt="Code icon"
              className={btnDimensions}
            />
          </ProjectButton>
        </Tooltip>
        <Tooltip text="Access project website">
          <ProjectButton to={projectCards.siteLink}>
            <img
              src="public/assets/svgs/portal.svg"
              alt="Web icon"
              className={btnDimensions}
            />
          </ProjectButton>
        </Tooltip>
      </div>
    </animated.div>
  );
}

export default CarouselCard;
