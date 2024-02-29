import Button from "./Button";
import styles from "./PresentationCard.module.css";

function PresentationCard() {
  return (
    <div className="mt-[3rem] flex align-middle justify-center">
      <div
        className={`${styles.cardContainer} max-w-[100rem] flex justify-between pr-20 pl-24 pb-24 pt-8`}
      >
        <div className="flex flex-col self-end gap-16 ">
          <div className=" flex flex-col gap-8">
            <header className={` ${styles.header} text-[5rem]`}>
              What it means to me
            </header>
            <p className={`${styles.text} text-[3rem] max-w-[50rem]`}>
              Frontend development is the art of balance: blending aesthetics
              with functionality, elegance with efficiency.
            </p>
          </div>
          <div className="flex justify-between">
            <Button url="https://github.com/SabinaCristea">
              <img
                src="src/assets/icons8-github.svg"
                alt="SVG Image"
                className={styles.btnIcon}
              />
              Find me on Github
            </Button>
            <Button url="https://www.linkedin.com/in/sabina-cristea/">
              <img
                src="src/assets/icons8-linkedin.svg"
                alt="SVG Image"
                className={styles.btnIcon}
              />
              Find me on LinkedIn
            </Button>
          </div>
        </div>
        <img
          src="src/assets/me.png"
          alt="Photo of me"
          width="35%"
          className="rounded-b-2xl "
        />
      </div>
    </div>
  );
}

export default PresentationCard;
