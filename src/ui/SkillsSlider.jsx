import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Skills from "../pages/Skills";
import styles from "./SkillsSlider.module.css";

function SkillsSlider() {
  // const queryClient = useQueryClient();

  const {
    data: skillsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skillsData"],
    queryFn: async () => {
      const res = await fetch("./skillsData.json");
      const data = await res.json();
      return data;
    },
  });

  // queryClient.setQueryData("skillsData", skillsData);

  // const [skillsData, setSkillsData] = useState([]);
  const [curSlide, setCurSlide] = useState(0);
  const [btnRightVisible, setBtnRightVisible] = useState(true);
  const [btnLeftVisible, setBtnLeftVisible] = useState(false);
  const maxSlide = 2;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("./skillsData.json");
  //       const data = await res.json();
  //       setSkillsData(data);
  //     } catch (error) {
  //       console.error("Errooooooor:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
  }, [curSlide]);

  const nextSlide = () => {
    setCurSlide(() => maxSlide - 1);
    console.log("next");
    setBtnRightVisible(false);
    setBtnLeftVisible(true);
  };

  const prevSlide = () => {
    setCurSlide(() => curSlide - 1);
    console.log("prev");
    setBtnLeftVisible(false);
    setBtnRightVisible(true);
  };

  return (
    <div className="w-[140rem] overflow-hidden">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
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
