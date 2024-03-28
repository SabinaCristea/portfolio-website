import HobbyCard from "./HobbyCard";

function Hobbies() {
  return (
    <div>
      <div className="relative">
        <div className="flex flex-col text-center relative lg:pt-[3rem] xl:pt-[7rem] pb-[20rem] sm:pb-[25rem] md:pb-[30rem] lg:pb-[40rem] xl:pb-[50rem] max-w-[34rem] sm:max-w-[46rem] md:max-w-[60rem] lg:max-w-[90rem] xl:max-w-[110rem] m-auto">
          <header className="text-[3rem] m-auto sm:w-[auto] md:text-[4rem] lg:text-[5rem] pb-[3rem] sm:pb-[4rem] lg:pb-[5rem] xl:pb-[10rem] drop-shadow-3xl">
            Activities that bring me joy
          </header>
          <div className="flex flex-col lg:flex-row items-center gap-[4rem] md:gap-[5rem] lg:gap-0 lg:justify-between pb-[4rem] sm:pb-[5rem] lg:pb-[7rem] xl:pb-[15rem]">
            <HobbyCard
              src="public/assets/imgs/reading.webp"
              alt="Reading illustration"
              bgColor="var(--color-green-hobby-card)"
            >
              Diving into psychology and philosophy books, uncovering the depths
              of the mind and the mysteries of existence.
            </HobbyCard>
            <HobbyCard
              src="public/assets/imgs/meditating.webp"
              alt="Meditating illustration"
              bgColor="var(--color-purple-hobby-card)"
            >
              Finding peace within the flow of breath and movement.
            </HobbyCard>
            <HobbyCard
              src="public/assets/imgs/hiking.webp"
              alt="Hiking illustration"
              bgColor="var(--color-cream-hobby-card)"
            >
              Exploring paths, finding peace in nature`s embrace, and gaining
              strength one step at a time.
            </HobbyCard>
          </div>
          <blockquote className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] pb-[2rem] lg:pb-[3rem] xl:pb-[4rem] drop-shadow-3xl">
            “Curiosity is the wick in the candle of learning.”
          </blockquote>
          <p className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-[10rem]">
            - William Arthur Ward
          </p>
          <img
            src="public/assets/imgs/drinking-coffee.webp"
            alt="Girl drinking coffee illustration"
            className="absolute bottom-[1rem] right-[0rem] sm:bottom-[2rem] sm:right-0 max-h-[35rem] sm:max-h-[40rem] md:bottom-[3rem] md:max-h-[50rem] lg:bottom-[6rem] lg:right-[10%] lg:max-h-[50rem] xl:max-h-[65rem] z-20"
          />
        </div>
      </div>
      <div className="h-[0] w-[full] relative mx-auto">
        <img
          src="public/assets/imgs/grass.webp"
          alt="Grass"
          className="bottom-0 absolute right-[50%] translate-x-[50%]"
        />
      </div>
    </div>
  );
}

export default Hobbies;
