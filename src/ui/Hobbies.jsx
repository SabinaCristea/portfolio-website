import HobbyCard from "./HobbyCard";
import styles from "./Hobbies.module.css";

function Hobbies() {
  return (
    <div>
      <div className="relative">
        <div
          className={`${styles.hobbiesContainer} flex flex-col text-center relative pt-[7rem] pb-[50rem]
        `}
        >
          <header className={`${styles.header} text-[5rem] pb-[10rem] `}>
            Activities that bring me joy
          </header>
          <div className="flex justify-between pb-[15rem]">
            <HobbyCard
              src="src/assets/reading.png"
              alt="Reading illustration"
              bgColor="var(--color-green-hobby-card)"
            >
              Diving into psychology and philosophy books, uncovering the depths
              of the mind and the mysteries of existence.
            </HobbyCard>
            <HobbyCard
              src="src/assets/meditating.png"
              alt="Meditating illustration"
              bgColor="var(--color-purple-hobby-card)"
            >
              Finding peace within the flow of breath and movement.
            </HobbyCard>
            <HobbyCard
              src="src/assets/hiking.png"
              alt="Hiking illustration"
              bgColor="var(--color-cream-hobby-card)"
            >
              Exploring paths, finding peace in nature`s embrace, and gaining
              strength one step at a time.
            </HobbyCard>
          </div>
          <blockquote className="text-[4rem] pb-[4rem]">
            “Curiosity is the wick in the candle of learning.”
          </blockquote>
          <p className="text-[3rem] mb-[10rem]">- William Arthur Ward</p>
          <img
            src="src/assets/drinking-coffee.png"
            alt="Girl drinking coffee illustration"
            className="absolute bottom-[8rem] right-[10%] h-[65rem] z-20"
          />
        </div>
      </div>
      <div className="h-[0] w-[full] relative mx-auto">
        <img
          src="src/assets/grass.png"
          alt="Grass"
          className="bottom-0 absolute right-[50%] translate-x-[50%]"
        />
      </div>
    </div>
  );
}

export default Hobbies;
