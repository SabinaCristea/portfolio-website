import HobbyCard from "./HobbyCard";
import styles from "./Hobbies.module.css";

function Hobbies() {
  return (
    <div>
      <div className="bg-[var(--color-orange-transparent)] pb-[15rem] pt-[7rem]">
        <div
          className={`${styles.hobbiesContainer} flex flex-col text-center
        `}
        >
          <img
            src="src/assets/plant-5.png"
            alt="Photo of plant 5"
            className={styles.plantImg}
          />
          <header className={`${styles.header} text-[5rem] pb-[10rem] `}>
            Activities that bring me joy
          </header>
          <div className="flex justify-between pb-[15rem]">
            <HobbyCard
              src="src/assets/reading.png"
              alt="Reading image"
              bgColor="var(--color-green-hobby-card)"
            >
              Diving into psychology and philosophy books, uncovering the depths
              of the mind and the mysteries of existence.
            </HobbyCard>
            <HobbyCard
              src="src/assets/meditating.png"
              alt="Meditating image"
              bgColor="var(--color-purple-hobby-card)"
            >
              Finding peace within the flow of breath and movement.
            </HobbyCard>
            <HobbyCard
              src="src/assets/hiking.png"
              alt="Hiking image"
              bgColor="var(--color-cream-hobby-card)"
            >
              Exploring paths, finding peace in nature`s embrace, and gaining
              strength one step at a time.
            </HobbyCard>
          </div>
          <blockquote className="text-[4rem] pb-[4rem]">
            “Curiosity is the wick in the candle of learning.”
          </blockquote>
          <p className="text-[3rem]">- William Arthur Ward</p>
        </div>
      </div>
      <div className="h-[10rem] w-[110rem] relative mx-auto">
        <img
          src="src/assets/drinking-coffee.png"
          alt="Girl drinking coffee"
          className={styles.coffeeGirlImg}
        />
      </div>
    </div>
  );
}

export default Hobbies;
