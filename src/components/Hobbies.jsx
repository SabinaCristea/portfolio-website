import HobbyCard from "./HobbyCard";

function Hobbies() {
  return (
    <div>
      <div className="relative">
        <div className="flex flex-col text-center relative pt-[7rem] pb-[50rem] max-w-[110rem] m-auto">
          <header className="text-[5rem] pb-[10rem] drop-shadow-3xl">
            Activities that bring me joy
          </header>
          <div className="flex justify-between pb-[15rem]">
            <HobbyCard
              src="src/assets/imgs/reading.webp"
              alt="Reading illustration"
              bgColor="var(--color-green-hobby-card)"
            >
              Diving into psychology and philosophy books, uncovering the depths
              of the mind and the mysteries of existence.
            </HobbyCard>
            <HobbyCard
              src="src/assets/imgs/meditating.webp"
              alt="Meditating illustration"
              bgColor="var(--color-purple-hobby-card)"
            >
              Finding peace within the flow of breath and movement.
            </HobbyCard>
            <HobbyCard
              src="src/assets/imgs/hiking.webp"
              alt="Hiking illustration"
              bgColor="var(--color-cream-hobby-card)"
            >
              Exploring paths, finding peace in nature`s embrace, and gaining
              strength one step at a time.
            </HobbyCard>
          </div>
          <blockquote className="text-[4rem] pb-[4rem] drop-shadow-3xl">
            “Curiosity is the wick in the candle of learning.”
          </blockquote>
          <p className="text-[3rem] mb-[10rem]">- William Arthur Ward</p>
          <img
            src="src/assets/imgs/drinking-coffee.webp"
            alt="Girl drinking coffee illustration"
            className="absolute bottom-[6rem] right-[10%] max-h-[65rem] z-20"
          />
        </div>
      </div>
      <div className="h-[0] w-[full] relative mx-auto">
        <img
          src="src/assets/imgs/grass.webp"
          alt="Grass"
          className="bottom-0 absolute right-[50%] translate-x-[50%]"
        />
      </div>
    </div>
  );
}

export default Hobbies;
