import { GITHUB_ACCOUNT, LINKEDIN_ACCOUNT } from "../utils/accounts";
import Button from "./Button";
import styles from "./PresentationCard.module.css";

function PresentationCard() {
  return (
    <div className="mt-[2rem] mb-[10rem] flex align-middle justify-center">
      <div
        className={`${styles.cardContainer} w-[110rem] flex justify-between pr-28 pl-28 pb-24 pt-8`}
      >
        <div className="flex flex-col self-end gap-16 ">
          <div className=" flex flex-col gap-[4rem]">
            <header className={` ${styles.header} text-[5rem]`}>
              What it means to me
            </header>
            <p className={`${styles.text} text-[3.5rem] max-w-[55rem]`}>
              Frontend development is the art of balance: blending aesthetics
              with functionality, elegance with efficiency.
            </p>
          </div>
          <div className="flex justify-between">
            <Button to={GITHUB_ACCOUNT}>
              <img
                src="src/assets/svgs/icons8-github.svg"
                alt="SVG Image"
                className={styles.btnIcon}
              />
              Find me on GitHub
            </Button>
            <Button to={LINKEDIN_ACCOUNT}>
              <img
                src="src/assets/svgs/icons8-linkedin.svg"
                alt="SVG Image"
                className={styles.btnIcon}
              />
              Find me on LinkedIn
            </Button>
          </div>
        </div>
        <img
          src="src/assets/imgs/me.png"
          alt="Photo of me"
          className="rounded-b-2xl "
        />
      </div>
    </div>
  );
}

export default PresentationCard;
