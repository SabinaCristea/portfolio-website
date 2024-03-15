import { GITHUB_ACCOUNT, LINKEDIN_ACCOUNT } from "../utils/accounts";
import Button from "./Button";

function ThankYouCard() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[45rem] mt-[0]">
          <img
            src="src/assets/thank-you.svg"
            alt="SVG Image"
            width="100%"
            height="auto"
          />
        </div>
        <p className="text-[2.5rem] mt-[-3rem]">
          for checking out my portfolio website!
        </p>
        <p className="text-[2rem] mt-[2rem]">Let’s connect!</p>
        <div className="flex gap-[3rem] mt-[1rem]">
          <Button to={GITHUB_ACCOUNT}>
            <img
              src="src/assets/icons8-github.svg"
              alt="SVG Image"
              className="max-w-[5rem]"
            />
            Find me on GitHub
          </Button>
          <Button to={LINKEDIN_ACCOUNT}>
            <img
              src="src/assets/icons8-linkedin.svg"
              alt="SVG Image"
              className="max-w-[5rem]"
            />
            Find me on LinkedIn
          </Button>
        </div>
        <div className="mt-[2rem]">
          <img src="src/assets/lets-connect.png" alt="Connect illustration" />
        </div>
      </div>
    </div>
  );
}

export default ThankYouCard;
