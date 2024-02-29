import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>
        <p>Front-end portfolio of</p>
      </div>
      <div className={styles.name}>
        <img src="src/assets/handwritten-font.svg" alt="SVG Image" />
      </div>
    </div>
  );
}

export default Home;
