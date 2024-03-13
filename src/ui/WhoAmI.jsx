import StepsSection from "./StepsSection";
import styles from "./WhoAmI.module.css";

function WhoAmI() {
  return (
    <div className="mt-[15rem] mb-[5rem] bg-[var(--color-orange-transparent)] pt-[7rem] relative">
      <div className="flex flex-col items-center justify-items-center">
        <header className={`${styles.header} text-[5rem]`}>Who Am I?</header>
        <div>
          <StepsSection />
        </div>
        <img
          src="src/assets/plant-5.png"
          alt="Photo of plant 5"
          className="absolute bottom-[-3rem] right-[4rem]"
        />
      </div>
    </div>
  );
}

export default WhoAmI;
