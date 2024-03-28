import StepsSection from "./StepsSection";

function WhoAmI() {
  return (
    <div className="mb-[5rem] bg-[var(--color-orange-transparent)] pt-[5rem] lg:pt-[8rem] ">
      <div className="flex flex-col items-center justify-items-center">
        <header className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] mb-[4rem] sm:mb-[5rem] md:mb-[5rem] lg:mb-0 lg:text-[5rem] drop-shadow-3xl">
          Who Am I?
        </header>
        <div className="relative">
          <StepsSection />
          <div className="w-[25rem] sm:w-[30rem] mb-[-2rem] md:w-[30rem]  m-auto lg:mb-0 lg:w-[40rem] lg:h-[40rem] lg:absolute lg:bottom-[-10rem] lg:right-0 xl:bottom-[-3rem]">
            <img
              src="public/assets/imgs/plant-5.webp"
              alt="Photo of plant 5"
              className="lg:w-[80%] xl:w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;
