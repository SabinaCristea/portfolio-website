import React from "react";
import { GITHUB_ACCOUNT, LINKEDIN_ACCOUNT } from "../utils/accounts";
import Button from "./Button";
import Modal from "./Modal";

const ThankYouCard = React.memo(function ThankYouCard({ onClose }) {
  return (
    <Modal
      style={{
        backgroundColor: "var(--color-pink-secondary)",
      }}
      onClose={onClose}
      className="w-[32rem] sm:w-[40rem] md:w-[45rem] lg:w-[70rem] lg:h-[45rem] xl:w-[80rem] xl:h-[55rem]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="md:w-[30rem] lg:w-[35rem] xl:w-[45rem]">
          <img
            src="/assets/svgs/thank-you.svg"
            alt="SVG Image"
            className="drop-shadow-3xl w-[100%]"
          />
        </div>
        <p className="lg:text-[2.5rem] mt-[-2rem] xl:mt-[-3rem] text-center">
          for checking out my portfolio website!
        </p>
        <p className="text-[1.8rem] sm:text-[2rem] mt-[2rem]">Let’s connect!</p>
        <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[2rem] xl:gap-[3rem] mt-[1rem] lg:mb-[2rem] xl:mb-0 w-[25rem] md:w-[auto]">
          <Button to={GITHUB_ACCOUNT}>
            <img
              src="/assets/svgs/icons8-github.svg"
              alt="SVG Image"
              className="w-[4rem] lg:w-[4rem] xl:w-[5rem]"
            />
            <p className="text-[1.4rem] xl:text-[1.6rem]">Find me on GitHub</p>
          </Button>
          <Button to={LINKEDIN_ACCOUNT}>
            <img
              src="/assets/svgs/icons8-linkedin.svg"
              alt="SVG Image"
              className="w-[4rem] lg:w-[4rem] xl:w-[5rem]"
            />
            <p className="text-[1.4rem] xl:text-[1.6rem]">
              Find me on LinkedIn
            </p>
          </Button>
        </div>
        <div className="w-[25rem] md:w-[30rem] lg:w-[28rem] xl:w-[36rem] mt-[2rem] md:mt-[3rem] lg:mt-0 xl:mt-[2rem]">
          <img
            src="/assets/imgs/lets-connect.webp"
            alt="Connect illustration"
          />
        </div>
      </div>
    </Modal>
  );
});

export default ThankYouCard;
