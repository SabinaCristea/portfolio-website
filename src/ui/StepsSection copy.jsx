import styles from "./StepsSection.module.css";

function StepsSection() {
  return (
    <div className={styles.stepsSection}>
      <div className={styles.stepsLine}></div>
      <div className={styles.stepsContent}>
        <div className={styles.stepsLeft}>
          <div className={styles.textFragment}>
            <p>
              Hey there! 👋 I`m Sabina, a frontend developer with a unique
              journey that led me to where I am today.
            </p>
          </div>
          <div className={styles.image}>
            <img src="src/assets/plant-2.png" alt="Left Image" width="40%" />
          </div>
          <div className={styles.textFragment}>
            <p>
              However, life had other plans for me, and I found my true passion
              in coding and frontend development.
            </p>
          </div>
          <div className={styles.textFragment}>
            <p>
              A perpetual learner, I`m always eager to explore new concepts and
              surround myself with individuals who inspire and broaden my
              horizons.
            </p>
          </div>
          <div className={styles.image}>
            <img src="src/assets/plant-2.png" alt="Left Image" width="40%" />
          </div>
          <div className={styles.textFragment}>
            <p>
              Fueled by curiosity and propelled by my untapped potential, I`m on
              a perpetual journey of growth and self-discovery.
            </p>
          </div>
        </div>
        <div className={styles.stepsIcons}>
          <div className={styles.stepIcon}>Step 1</div>
          <div className={styles.stepIcon}>Step 2</div>
          <div className={styles.stepIcon}>Step 3</div>
          <div className={styles.stepIcon}>Step 4</div>
          <div className={styles.stepIcon}>Step 5</div>
          <div className={styles.stepIcon}>Step 6</div>
          <div className={styles.stepIcon}>Step 7</div>
          {/* Add more step icons as needed */}
        </div>
        <div className={styles.stepsRight}>
          <div className={styles.image}>
            <img src="src/assets/plant-1.png" alt="Right Image" width="40%" />
          </div>
          <div className={styles.textFragment}>
            <p>
              Originally trained in medical engineering during my university
              days, I later pursued a master`s degree in biotechnology.
            </p>
          </div>

          <div className={styles.textFragment}>
            <p>Right text fragment 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsSection;
