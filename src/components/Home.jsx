import earthCoverImage from "../../src/assets/imgs/earth-cover.webp";

function Home() {
  return (
    <div
      className="flex flex-col items-center w-[100vw] h-[50vh] pt-[5rem] md:h-[90vh] md:pt-[14rem] md:mt-[-10rem]
                 after:z-[-1] overlay-hidden
                 after:h-[50vh] md:after:h-[90vh] after:w-[100%] after:absolute after:top-0 
                 after:left-0 after:outline-dotted after:outline-[0.7rem] md:after:outline-[1rem] after:outline-[var(--color-green)]"
      style={{
        backgroundImage: `url(${earthCoverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p
        className="text-[2rem] mb-[0] md:text-[2.4rem] uppercase tracking-[0.5rem] md:mb-[-4rem]"
        style={{ wordSpacing: "1rem" }}
      >
        Front-end portfolio of
      </p>
      <img
        src="src/assets/svgs/handwritten-font.svg"
        alt="SVG Image"
        className="w-[200%] md:w-[140%] lg:w-[90%] xl:w-[77%]"
      />
    </div>
  );
}
export default Home;
