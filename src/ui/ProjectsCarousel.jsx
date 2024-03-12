import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/getData";
import CarouselCard from "./CarouselCard";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";


function ProjectsCarousel() {
  const{ 
        data,
        isLoading,
        error,
      } = useQuery({
        queryKey: ["projectsData"],
        queryFn: getData,
      });

      
      let cards = [];
      
      if (isLoading) {
        return <p>Loading...</p>;
      }
      
      if (error) {
        return <p>Error: {error.message}</p>;
      }
      
      if (data) {
        cards = data.projects.map((project, index) => ({
          key: uuidv4(),
          content:<CarouselCard data={project}/> ,
          
        }));
      }
      console.log(data)

 console.log(data.projects.length)

  return (
    <div>
      {data && (
         <div className="">
         <Carroussel
           cards={cards}
           height="500px"
           width="500px"
           margin="0 auto"
           offset={2}
           showArrows={false}
           
         />
       </div>
      )}
    </div>
  );
}

export default ProjectsCarousel;
