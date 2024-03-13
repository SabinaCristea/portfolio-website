import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/getData";
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";
import { SpinnerCircular } from "spinners-react";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["projectsData"],
    queryFn: getData,
  });

  let cards = [];

  console.log(currentSlide);

  if (isLoading) {
    return (
      <SpinnerCircular
        color="var(--color-orange-steps)"
        secondaryColor="white"
      />
    );
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  if (data) {
    cards = data.projects.map((project, index) => ({
      key: uuidv4(),
      content: (
        <CarouselCard
          key={uuidv4()}
          data={project}
          colors={[
            "var( --color-project-1)",
            "var( --color-project-2)",
            "var( --color-project-3)",
            "var( --color-project-4)",
            "var( --color-project-5)",
          ]}
          index={index}
          onSlideChange={setCurrentSlide}
        />
      ),
    }));
  }

  const color =
    data && data.projects[currentSlide] && data.projects[currentSlide].color;

  console.log(data.projects[currentSlide]);

  return (
    <div>
      {data && (
        <div className=" w-[110rem] mt-[-35rem] ml-[60rem] -z-450">
          <div className="rotate-[25deg] origin-center translate-x-[-50%]">
            <Carroussel
              cards={cards}
              height="500px"
              width="650px"
              margin="0 auto"
              offset={1}
              showArrows={false}
            />
          </div>
          {
            <p
              className={`max-w-[60rem] text-center mt-[40rem] ml-[-30rem] border-[.5rem] border-dotted border-[${data.projects[currentSlide].color}]`}
            >
              {data.projects[currentSlide].description}
            </p>
          }
        </div>
      )}
    </div>
  );
}

export default ProjectsCarousel;
