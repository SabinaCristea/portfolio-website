import ProjectsCarousel from "../ui/ProjectsCarousel";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";
import ThankYouMessage from "../ui/ThankYouMessage";
import useOverflowControl from "../hooks/useOverflowControl";
import Confetti from "../ui/Confetti";

function Projects() {
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
    <div className="flex flex-col items-center relative h-[auto] mt-[8rem]">
      <header className="text-[4rem] drop-shadow-3xl mb-[6rem]">
        Explore a part of my portfolio 😄
      </header>

      <ProjectsCarousel />
      <p className="mt-[55rem] text-[3.5rem] drop-shadow-3xl">
        Let`s create something remarkable together!
      </p>
      <div className="mb-[3rem] mt-[-3rem]">
        <Button onClick={handleShowModal}>Click here! :)</Button>
        {btnClicked && <Confetti setConfettiCompleted={setConfettiCompleted} />}
        {confettiCompleted && (
          <Modal
            style={{
              backgroundColor: "var(--color-pink-secondary)",
              maxWidth: "80rem",
              height: "55rem",
              width: "70rem",
            }}
            onClose={() => setConfettiCompleted(false)}
          >
            <ThankYouMessage />
          </Modal>
        )}
      </div>

      <img
        src="src/assets/continuously-growing.png"
        alt="Winning illustration"
      />
    </div>
  );
}

export default Projects;
