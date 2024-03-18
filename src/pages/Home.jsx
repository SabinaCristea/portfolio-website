import styles from "./Home.module.css";

function Home() {
  return (
    <div className={`${styles.homeContainer} h-[90vh] `}>
      <p className={`${styles.title}`}>Front-end portfolio of</p>
      <img src="src/assets/handwritten-font.svg" alt="SVG Image" width="77%" />
    </div>
  );
}

export default Home;
