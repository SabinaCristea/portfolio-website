import earthCoverImage from "../../assets/imgs/earth-cover.webp";

function Home() {
  return (
    <div
      className="flex flex-col items-center w-[100vw] h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] pt-[13%] sm:pt-[9%] md:pt-[20%] lg:pt-[13%] xl:pt-[9%] 2xl:pt-[9%] md:mt-[-10rem]
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
        className="text-[1.2rem] sm:text-[2rem] mb-[-1rem] sm:mb-[-2rem] md:text-[2.4rem] uppercase tracking-[0.3rem] md:tracking-[0.5rem] md:mb-[-4rem] text-center px-[5rem] "
        style={{ wordSpacing: "1rem" }}
      >
        Front-end portfolio of
      </p>
      <img
        src="/assets/svgs/handwritten-font.svg"
        alt="SVG Image"
        className="w-[35rem] sm:w-[55rem] md:w-[78rem] lg:w-[100rem] xl:w-[110rem] 2xl:w-[80%]"
      />
    </div>
  );
}
export default Home;
