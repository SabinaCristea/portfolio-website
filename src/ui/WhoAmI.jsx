import StepsSection from "./StepsSection";
import styles from "./WhoAmI.module.css";

function WhoAmI() {
  return (
    <div className="mt-[15rem]">
      <div className="flex flex-col items-center justify-items-center">
        <header className={`${styles.header} text-[5rem]`}>Who Am I?</header>
        <div>
          <StepsSection />
        </div>
        <p className="text-[3rem]">
          Let`s create something remarkable together!
        </p>
      </div>
    </div>
  );
}

export default WhoAmI;
