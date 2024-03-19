import StepsSection from "./StepsSection";
import styles from "./WhoAmI.module.css";

function WhoAmI() {
  return (
    <div className="mb-[5rem] bg-[var(--color-orange-transparent)] pt-[8rem] ">
      <div className="flex flex-col items-center justify-items-center">
        <header className={`${styles.header} text-[5rem]`}>Who Am I?</header>
        <div className="relative">
          <StepsSection />
          <img
            src="src/assets/imgs/plant-5.png"
            alt="Photo of plant 5"
            className="absolute bottom-[-3rem] right-[-20rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;
