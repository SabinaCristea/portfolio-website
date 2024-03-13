import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import Skills from "../pages/Skills";
import styles from "./SkillsSlider.module.css";
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
    // console.log("next");
    setBtnRightVisible(false);
    setBtnLeftVisible(true);
  };

  const prevSlide = useCallback(() => {
    setCurSlide(curSlide - 1);
    // console.log("prev");
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

  return (
    <div className="w-[140rem] overflow-hidden">
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {skillsData && (
        <div className={`${styles.slider}`}>
          <div
            className={`${styles.slide} ${styles.slide1} `}
            style={{ transform: `translateX(-${curSlide * 150}%) ` }}
          >
            <Skills data={skillsData.hardSkills} headline="Expertise" />
          </div>

          <div
            className={`${styles.slide} ${styles.slide2} `}
            style={{ transform: `translateX(-${curSlide * 150}%)` }}
          >
            <Skills data={skillsData.softSkills} headline="Soft Skills" />
          </div>

          <button
            className={`${styles.btn} ${styles.btnRight} flex flex-col items-center ${btnRightVisible ? "" : "hidden"}`}
            onClick={nextSlide}
          >
            <img
              src="src/assets/arrow-right.svg"
              alt="Arrow right"
              width="20%"
            />
            <p>SOFT SKILLS</p>
          </button>

          <button
            className={`${styles.btn} ${styles.btnLeft} flex flex-col items-center ${btnLeftVisible ? "" : "hidden"}`}
            onClick={prevSlide}
          >
            <img src="src/assets/arrow-left.svg" alt="Arrow left" width="20%" />
            <p>EXPERTISE</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SkillsSlider;
