import StepsSection from "./StepsSection";

function WhoAmI() {
  return (
    <div className="mb-[5rem] bg-[var(--color-orange-transparent)] pt-[8rem] ">
      <div className="flex flex-col items-center justify-items-center">
        <header className="text-[5rem] drop-shadow-3xl">Who Am I?</header>
        <div className="relative">
          <StepsSection />
          <img
            src="src/assets/imgs/plant-5.webp"
            alt="Photo of plant 5"
            className="absolute bottom-[-3rem] right-[-20rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;
