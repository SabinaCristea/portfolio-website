import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/getData";
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import Modal from "./Modal";
import Loader from "./Loader";
import useOverflowControl from "../hooks/useOverflowControl";

function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [detailsBtnClicked, setDetailsBtnClicked] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["projectsData"],
    queryFn: getData,
  });

  useOverflowControl(detailsBtnClicked);

  const colors = [
    "var( --color-project-1)",
    "var( --color-project-2)",
    "var( --color-project-3)",
    "var( --color-project-4)",
    "var( --color-project-5)",
    "var( --color-project-6)",
    "var( --color-project-7)",
  ];

  function handleDetailsBtnClick() {
    setDetailsBtnClicked((isClicked) => !isClicked);
  }

  let cards = [];

  if (data) {
    cards = data.projects.map((project, index) => ({
      key: uuidv4(),
      content: (
        <CarouselCard
          key={uuidv4()}
          data={project}
          colors={colors}
          index={index}
          onSlideChange={setCurrentSlide}
          handleDetailsBtnClick={handleDetailsBtnClick}
        />
      ),
    }));
  }

  return (
    <div>
      {isLoading && <Loader height={"100%"} />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && (
        <div>
          <div className="rotate-[25deg] translate-x-[-38%] sm:translate-x-[-48%] md:translate-x-[-41%] lg:translate-x-[-41%] xl:translate-x-[-40%] 2xl:translate-x-[-50%] mt-[12rem] md:mt-[15rem] ml-[-5rem]">
            <Carroussel
              cards={cards}
              // width="650px"
              margin="0 auto"
              offset={1}
              showArrows={false}
              className="w-[30rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]"
            />
          </div>
          {detailsBtnClicked && (
            <Modal
              style={{
                backgroundColor: colors[currentSlide % colors.length],
              }}
              className="w-[32rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem]"
              onClose={() => setDetailsBtnClicked(false)}
            >
              <p
                className={`text-center text-[var(--color-black)] text-[1.4rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] px-[2rem] py-[2rem] `}
              >
                {data.projects[currentSlide].description}
              </p>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectsCarousel;
