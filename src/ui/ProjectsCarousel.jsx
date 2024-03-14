import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/getData";
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";
import { SpinnerCircular } from "spinners-react";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import Modal from "./Modal";

function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [detailsBtnClicked, setDetailsBtnClicked] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["projectsData"],
    queryFn: getData,
  });

  const colors = [
    "var( --color-project-1)",
    "var( --color-project-2)",
    "var( --color-project-3)",
    "var( --color-project-4)",
    "var( --color-project-5)",
  ];

  // Function to toggle body scroll lock
  // const toggleBodyScroll = (lock) => {
  //   if (lock) {
  //     document.body.classList.add("hidden");
  //   } else {
  //     document.body.classList.remove("body-scroll-lock");
  //   }
  // };

  function handleDetailsBtnClick() {
    setDetailsBtnClicked((isClicked) => !isClicked);
    // toggleBodyScroll(true);
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
      {isLoading && (
        <SpinnerCircular
          color="var(--color-orange-steps)"
          secondaryColor="white"
        />
      )}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && (
        <div className=" mt-[-35rem] ml-[20rem] z-[-9999]">
          <div className="rotate-[25deg] translate-x-[-50%] mt-[20rem]">
            <Carroussel
              cards={cards}
              height="500px"
              width="650px"
              margin="0 auto"
              offset={1}
              showArrows={false}
            />
          </div>
          {detailsBtnClicked && (
            <Modal
              style={{
                backgroundColor: colors[currentSlide % colors.length],
              }}
              onClose={() => setDetailsBtnClicked(false)}
            >
              <p
                className={`text-center text-[var(--color-black)] text-[1.8rem]`}
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
