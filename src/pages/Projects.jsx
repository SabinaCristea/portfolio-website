import ProjectsCarousel from "../ui/ProjectsCarousel";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";

function Projects() {
  const [btnClicked, setBtnClicked] = useState(false);

  function handleShowModal() {
    setBtnClicked(() => !btnClicked);
  }

  return (
    <div className="flex flex-col items-center relative h-[140rem] mt-[8rem]">
      <header className="text-[4rem] drop-shadow-3xl mb-[6rem] z-[999]">
        Explore A Part Of My Portfolio 😄
      </header>
      <ProjectsCarousel />
      <div className="mt-[10rem]">
        <Button onClick={handleShowModal}>CLICK HERE</Button>
        {btnClicked && <Modal />}
      </div>
      <p className="absolute bottom-[18rem] right-[40%] text-[3rem]">
        Let`s create something remarkable together!
      </p>
      <img
        src="src/assets/continuously-growing.png"
        alt="Winning image"
        className="absolute bottom-0 right-[25%] -z-30"
      />
    </div>
  );
}

export default Projects;
