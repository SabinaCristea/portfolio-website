import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import Skills from "./Skills";
import { getData } from "../utils/getData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

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
  const maxSlide = 2;

  const nextSlide = () => {
    setCurSlide(() => maxSlide - 1);
    setBtnRightVisible(false);
    setBtnLeftVisible(true);
  };

  const prevSlide = useCallback(() => {
    setCurSlide(curSlide - 1);
    setBtnLeftVisible(false);
    setBtnRightVisible(true);
  }, [curSlide]);

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
  }, [curSlide, prevSlide]);

  const slideTransition =
    "transition-transform duration-1000 absolute w-[100%] top-0";
  const btnStyle =
    "absolute top-[50%] z-10 translate-y-[-50%] flex flex-col items-center";

  return (
    <div className="md:w-[70rem] lg:w-[100rem] xl:w-[120rem] 2xl:w-[140rem] overflow-hidden">
      {isLoading && <Loader height={"100%"} />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {skillsData && (
        <div className="relative md:w-[65rem] lg:w-[80rem] xl:w-[90rem] 2xl:w-[110rem] h-[100rem] lg:h-[57.7rem] mt-[7rem] mb-[3rem] mx-[auto]">
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
            className={`${btnStyle} lg:right-[-20rem] xl:right-[-25rem]   ${btnRightVisible ? "" : "hidden"}`}
            onClick={nextSlide}
          >
            <img
              src="src/assets/svgs/arrow-right.svg"
              alt="Arrow right"
              className="lg:w-[15%] xl:w-[20%]"
            />
            <p className="lg:text-[1.4rem] xl:text-[1.6rem]" >SOFT SKILLS</p>
          </button>

          <button
            className={`${btnStyle} lg:left-[-20rem] xl:left-[-25rem] ${btnLeftVisible ? "" : "hidden"}`}
            onClick={prevSlide}
          >
            <img
              src="src/assets/svgs/arrow-left.svg"
              alt="Arrow left"
              className="lg:w-[15%] xl:w-[20%]"
            />
            <p className="lg:text-[1.4rem] xl:text-[1.6rem]">EXPERTISE</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SkillsSlider;
