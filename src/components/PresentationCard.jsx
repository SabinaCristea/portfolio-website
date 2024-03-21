import { GITHUB_ACCOUNT, LINKEDIN_ACCOUNT } from "../utils/accounts";
import Button from "./Button";

function PresentationCard() {
  return (
    <div className="lg:mt-[5rem] lg:mb-[5rem] md:mt-[7rem] md:mb-[7rem] flex align-middle justify-center">
      <div className="w-[80%] md:w-[90%] flex flex-col md:gap-[5rem] lg:gap-[4rem] lg:w-[90rem] lg:flex-row xl:justify-between md:px-[5rem] lg:px-[4rem] md:pt-0 lg:pt-[2rem] md:pb-0 lg:pb-[6rem] xl:px-[7rem] lg:bg-[var(--color-orange-transparent)] lg:rounded-[2rem] lg:outline-[1rem] lg:outline-dotted lg:outline-[var(--color-orange-transparent)] xl:w-[110rem] md:justify-center ">
        <div className="flex flex-col lg:self-end md:gap-[5rem] lg:gap-[4rem] xl:gap-16">
          <div className=" flex flex-col md:gap-[2rem] lg:gap-[4rem]">
            <header className="text-[2rem] md:text-[5rem] lg:text-[4rem] xl:text-[5rem] drop-shadow-3xl md:text-center lg:text-left ">
              What it means to me
            </header>
            <p className="drop-shadow-3xl md:max-w-[100%] md:text-[3.5rem] lg:text-[2.8rem] xl:text-[3.5rem] lg:max-w-[50rem] xl:max-w-[55rem] md:text-center lg:text-left">
              Frontend development is the art of balance: blending aesthetics
              with functionality, elegance with efficiency.
            </p>
          </div>
          <div className="flex items-center justify-center mt-[-5rem] lg:hidden">
            <img
              src="src/assets/imgs/me.webp"
              alt="Photo of me"
              className="sm:rounded-b-2xl "
            />
          </div>
          <div className="flex flex-col md:gap-[1.5rem] lg:flex-row xl:justify-between md:w-[33.6rem] md:m-auto lg:w-[auto]">
            <Button to={GITHUB_ACCOUNT}>
              <img
                src="src/assets/svgs/icons8-github.svg"
                alt="SVG Image"
                className="max-w-[5rem]"
              />
              <p className="md:text-[1.8rem] lg:text-[1.3rem] xl:text-[1.6rem]">
                Find me on GitHub
              </p>
            </Button>
            <Button to={LINKEDIN_ACCOUNT}>
              <img
                src="src/assets/svgs/icons8-linkedin.svg"
                alt="SVG Image"
                className="max-w-[5rem]"
              />
              <p className="md:text-[1.8rem] lg:text-[1.3rem] xl:text-[1.6rem]">
                Find me on LinkedIn
              </p>
            </Button>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center hidden">
          <img
            src="src/assets/imgs/me.webp"
            alt="Photo of me"
            className="sm:rounded-b-2xl "
          />
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;
