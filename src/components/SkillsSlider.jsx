import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import Skills from "./Skills";
import { getData } from "../utils/getData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import styles from "./SkillsSlider.module.css";

function SkillsSlider() {
  const {
    data: skillsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skillsData"],
    queryFn: getData,
  });

  const [curSlide, setCurSlide] = useState(0);
  const [btnRightVisible, setBtnRightVisible] = useState(true);
  const [btnLeftVisible, setBtnLeftVisible] = useState(false);
  const [startX, setStartX] = useState(null);
  const maxSlide = 2;

  const nextSlide = useCallback(() => {
    setCurSlide(() => maxSlide - 1);
    setBtnRightVisible(false);
    setBtnLeftVisible(true);
  }, []);

  const prevSlide = useCallback(() => {
    setCurSlide((curSlide) => curSlide - 1);
    setBtnLeftVisible(false);
    setBtnRightVisible(true);
  }, []);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = useCallback(
    (event) => {
      if (!startX) {
        return;
      }

      const currentX = event.touches[0].clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        setStartX(null);
      }
    },
    [startX, nextSlide, prevSlide]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    const slider = document.getElementById("slider");
    slider.addEventListener("touchstart", handleTouchStart, false);
    slider.addEventListener("touchmove", handleTouchMove, false);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart, false);
      slider.removeEventListener("touchmove", handleTouchMove, false);
    };
  }, [handleTouchMove]);

  const slideTransition =
    "transition-transform duration-[0.8s] absolute w-[100%] top-0";
  const btnStyle = `absolute z-10 flex flex-col items-center lg:top-[50%] lg:translate-y-[-50%]`;

  return (
    <div
      id="slider"
      className="md:w-[70rem] lg:w-[100rem] xl:w-[120rem] 2xl:w-[140rem] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {isLoading && <Loader height={"100%"} />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {skillsData && (
        <div className="relative w-[30rem] sm:w-[55rem] md:w-[65rem] lg:w-[80rem] xl:w-[90rem] 2xl:w-[110rem] h-[55rem] sm:h-[60rem] md:h-[65rem] lg:h-[50rem] xl:h-[55rem] 2xl:h-[57.7rem] mt-[4rem] md:mt-[7rem] mb-[3rem] mx-[auto] flex justify-center">
          <div
            className={slideTransition}
            style={{ transform: `translateX(-${curSlide * 150}%) ` }}
          >
            <Skills data={skillsData.hardSkills} headline="Expertise" />
          </div>

          <div
            className={`${slideTransition} left-[150%]`}
            style={{ transform: `translateX(-${curSlide * 150}%)` }}
          >
            <Skills data={skillsData.softSkills} headline="Soft Skills" />
          </div>

          <button
            className={`${btnStyle} top-[90%] sm:top-[85%] md:right-[0rem] md:top-[92%] lg:right-[-10rem] xl:right-[-25rem] ${btnRightVisible ? "" : "hidden"} ${styles.btnSoftSkills}`}
            onClick={nextSlide}
          >
            <img
              src="/assets/svgs/arrow-right.svg"
              alt="Arrow right"
              className="w-[3rem] sm:w-[4.5rem] xl:w-[6rem]"
            />
            <p className="text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem]">
              SOFT SKILLS
            </p>
          </button>

          <button
            className={`${btnStyle} top-[90%] sm:top-[85%] md:left-[0rem] md:top-[92%] lg:left-[-10rem] xl:left-[-25rem] ${btnLeftVisible ? "" : "hidden"} ${styles.btnHardSkills}`}
            onClick={prevSlide}
          >
            <img
              src="/assets/svgs/arrow-left.svg"
              alt="Arrow left"
              className="w-[3rem] sm:w-[4.5rem] xl:w-[6rem]"
            />
            <p className="text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem]">
              EXPERTISE
            </p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SkillsSlider;
