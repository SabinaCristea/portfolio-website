import styles from "./Home.module.css";

function Home() {
  return (
    <div
      // className={`${styles.homeContainer} absolute top-0 right-[0] w-[100vw] -z-20`}
      className={`${styles.homeContainer} h-[90vh] `}
    >
      <p className={`${styles.title} `}>Front-end portfolio of</p>
      {/* <div> */}
      <img src="src/assets/handwritten-font.svg" alt="SVG Image" />
      {/* </div> */}
    </div>
  );
}

export default Home;
