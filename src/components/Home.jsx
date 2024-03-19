import styles from "./Home.module.css";

function Home() {
  return (
    <div
      className={`${styles.homeContainer} flex flex-col items-center pt-[4rem] h-[90vh] after:`}
    >
      <p
        className="text-[2.4rem] uppercase tracking-[0.5rem] mb-[-4rem]"
        style={{ "word-spacing": "1rem" }}
      >
        Front-end portfolio of
      </p>
      <img
        src="src/assets/svgs/handwritten-font.svg"
        alt="SVG Image"
        width="77%"
      />
    </div>
  );
}

export default Home;
