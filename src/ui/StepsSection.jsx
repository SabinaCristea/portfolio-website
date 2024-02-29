import styles from "./StepsSection.module.css";

function StepsSection() {
  return (
    <div className={styles.stepsSection}>
      <div className={styles.stepsLine}></div>
      <div className={styles.stepsContent}>
        <div className={styles.textFragment}>
          <p className="text-end">
            Hey there! 👋 I`m Sabina, a frontend developer with a unique journey
            that led me to where I am today.
          </p>
        </div>
        <div className={styles.stepIcon}>
          <img
            src="src/assets/profile-female.svg"
            alt="Female icon"
            width="65%"
          />
        </div>
        <div className={styles.image1}>
          <img src="src/assets/plant-1.png" alt="Right Image" />
        </div>
        <div className={styles.image2}>
          <img src="src/assets/plant-2.png" alt="Left Image" />
        </div>
        <div className={styles.stepIcon}>
          <img src="src/assets/biotech.svg" alt="Biotech icon" width="80%" />
        </div>
        <div className={styles.textFragment}>
          <p>
            Originally trained in medical engineering during my university days,
            I later pursued a master`s degree in biotechnology.
          </p>
        </div>
        <div className={styles.textFragment}>
          <p className="text-end">
            However, life had other plans for me, and I found my true passion in
            coding and frontend development.
          </p>
        </div>
        <div className={styles.stepIcon}>
          <img src="src/assets/code.svg" alt="Code icon" width="65%" />
        </div>
        <div></div>
        <div></div>
        <div className={styles.stepIcon}>
          <img src="src/assets/trophy.svg" alt="Trophy icon" width="80%" />
        </div>
        <div className={styles.textFragment}>
          <p>
            I thrive on attention to detail and enjoy challenging myself to push
            beyond limits, proving that with determination, anything is
            possible.
          </p>
        </div>
        <div className={styles.textFragment}>
          <p className="text-end">
            A perpetual learner, I`m always eager to explore new concepts and
            surround myself with individuals who inspire and broaden my
            horizons.
          </p>
        </div>
        <div className={styles.stepIcon}>
          <img src="src/assets/books.svg" alt="Books icon" width="75%" />
        </div>
        <div className={styles.image3}>
          <img src="src/assets/plant-3.png" alt="Left Image" />
        </div>
        <div className={styles.image4}>
          <img src="src/assets/plant-4.png" alt="Left Image" />
        </div>
        <div className={styles.stepIcon}>
          <img src="src/assets/sprout.svg" alt="Plant icon" width="80%" />
        </div>
        <div className={styles.textFragment}>
          <p>
            Described by friends as disciplined, ambitious, creative, and
            well-organized, I constantly strive to evolve into the best version
            of myself.
          </p>
        </div>
        <div className={styles.textFragment}>
          <p className="text-end">
            Fueled by curiosity and propelled by my untapped potential, I`m on a
            perpetual journey of growth and self-discovery.
          </p>
        </div>
        <div className={styles.stepIcon}>
          <img src="src/assets/map.svg" alt="Map icon" width="60%" />
        </div>
      </div>
    </div>
  );
}

export default StepsSection;
