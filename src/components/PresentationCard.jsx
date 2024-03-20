import { GITHUB_ACCOUNT, LINKEDIN_ACCOUNT } from "../utils/accounts";
import Button from "./Button";

function PresentationCard() {
  return (
    <div className="mt-[12rem] mb-[10rem] flex align-middle justify-center">
      <div className="w-[110rem] flex justify-between pr-28 pl-28 pb-24 pt-8 bg-[var(--color-orange-transparent)] rounded-[2rem] outline-[1rem] outline-dotted outline-[var(--color-orange-transparent)]">
        <div className="flex flex-col self-end gap-16 ">
          <div className=" flex flex-col gap-[4rem]">
            <header className="text-[5rem] drop-shadow-3xl">
              What it means to me
            </header>
            <p className="drop-shadow-3xl text-[3.5rem] max-w-[55rem]">
              Frontend development is the art of balance: blending aesthetics
              with functionality, elegance with efficiency.
            </p>
          </div>
          <div className="flex justify-between">
            <Button to={GITHUB_ACCOUNT}>
              <img
                src="src/assets/svgs/icons8-github.svg"
                alt="SVG Image"
                className="max-w-[5rem]"
              />
              Find me on GitHub
            </Button>
            <Button to={LINKEDIN_ACCOUNT}>
              <img
                src="src/assets/svgs/icons8-linkedin.svg"
                alt="SVG Image"
                className="max-w-[5rem]"
              />
              Find me on LinkedIn
            </Button>
          </div>
        </div>
        <img
          src="src/assets/imgs/me.webp"
          alt="Photo of me"
          className="rounded-b-2xl"
        />
      </div>
    </div>
  );
}

export default PresentationCard;
