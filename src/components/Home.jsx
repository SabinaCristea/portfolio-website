import earthCoverImage from "../../src/assets/imgs/earth-cover.webp";

function Home() {
  return (
    <div
      className="flex flex-col items-center w-[100vw] h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] pt-[15%] sm:pt-[10rem] md:pt-[25%] lg:pt-[10%] xl:pt-[12rem] 2xl:pt-[15rem] md:mt-[-10rem]
                 after:z-[-1] overlay-hidden
                 after:h-[40vh] sm:after:h-[50vh] md:after:h-[70vh] lg:after:h-[90vh] after:w-[100%] after:absolute after:top-0 
                 after:left-0 after:outline-dotted after:outline-[0.7rem] md:after:outline-[1rem] after:outline-[var(--color-green)]"
      style={{
        backgroundImage: `url(${earthCoverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p
        className="text-[1.2rem] sm:text-[2rem] mb-[-2rem] sm:mb-[-3rem] md:text-[2.4rem] uppercase tracking-[0.3rem] md:tracking-[0.5rem] md:mb-[-4rem] text-center px-[5rem] "
        style={{ wordSpacing: "1rem" }}
      >
        Front-end portfolio of
      </p>
      <img
        src="src/assets/svgs/handwritten-font.svg"
        alt="SVG Image"
        className="w-[90%] sm:w-[80%] md:w-[100%] lg:w-[80%]"
      />
    </div>
  );
}
export default Home;
