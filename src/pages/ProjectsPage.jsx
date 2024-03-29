import ProjectsCarousel from "../components/ProjectsCarousel";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import ThankYouCard from "../components/ThankYouCard";
import useOverflowControl from "../hooks/useOverflowControl";
import Confetti from "../components/Confetti";
import Tooltip from "../components/Tooltip";

function ProjectsPage() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [confettiCompleted, setConfettiCompleted] = useState(false);

  function handleShowModal() {
    setBtnClicked(true);
  }

  if (btnClicked && confettiCompleted) {
    setBtnClicked(false);
  }

  useOverflowControl(btnClicked || confettiCompleted);

  return (
    <div className="flex flex-col items-center relative h-[auto] mt-[5rem] md:mt-[8rem] overflow-x-hidden">
      <header className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] xl:text-[4rem] drop-shadow-3xl md:mb-[0rem] lg:mb-[6rem] w-[30rem] sm:w-[auto] text-center">
        Explore a part of my portfolio 😄
      </header>
      <div className=" md:hidden ">
        <Tooltip text="Swipe or click on the carousel for other projects">
          <img
            src="/assets/svgs/info.svg"
            alt="Carousel info"
            className="w-[4rem]"
          />
        </Tooltip>
      </div>
      <ProjectsCarousel />
      <p className="mt-[25rem] sm:mt-[30rem] md:mt-[35rem] lg:mt-[45rem] xl:mt-[50rem] 2xl:mt-[55rem] text-[2rem] text-center sm:text-[2.3rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] drop-shadow-3xl w-[30rem] sm:w-[auto]">
        Let`s create something remarkable together!
      </p>
      <div className="mb-[3rem] mt-[-3rem]">
        <Button onClick={handleShowModal}>Click here! :)</Button>
        {btnClicked && <Confetti setConfettiCompleted={setConfettiCompleted} />}
        {confettiCompleted && (
          <Modal
            style={{
              backgroundColor: "var(--color-pink-secondary)",
            }}
            onClose={() => setConfettiCompleted(false)}
            className="w-[32rem] sm:w-[40rem] md:w-[45rem] lg:w-[70rem] lg:h-[45rem] xl:w-[80rem] xl:h-[55rem]"
          >
            <ThankYouCard />
          </Modal>
        )}
      </div>

      <img
        src="/assets/imgs/continuously-growing.webp"
        alt="Winning illustration"
        className="w-[30rem] sm:w-[35rem] md:w-[40rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[63.3rem]"
      />
    </div>
  );
}

export default ProjectsPage;
