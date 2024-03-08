import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/getData";
import CarouselCard from "./CarouselCard";

function ProjectsCarousel() {
  const {
    data: projectsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projectsData"],
    queryFn: getData,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {projectsData && (
        <div>
          <div>
            <CarouselCard data={projectsData.projects} />
          </div>

          <p>{projectsData.projects.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectsCarousel;
