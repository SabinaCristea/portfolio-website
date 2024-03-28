import earthCoverImage from "/assets/imgs/earth-cover.webp";
// md:pt-[20%]
function Home() {
  return (
    <div
      className="flex flex-col items-center w-[100vw] h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] pt-[13%] sm:pt-[4vh] md:pt-[16vh] lg:pt-[13vh] xl:pt-[9%] 2xl:pt-[8%] md:mt-[-10rem]
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
        className="text-[1.2rem] sm:text-[1.6rem] mb-[-1rem] sm:mb-[-2rem] md:text-[1.5rem] uppercase tracking-[0.3rem] md:tracking-[0.5rem] md:mb-[-3rem] 2xl:mb-[-8rem] text-center px-[5rem] xl:text-[2.4rem]"
        style={{ wordSpacing: "1rem" }}
      >
        Front-end portfolio of
      </p>
      <img
        src="/assets/svgs/handwritten-font.svg"
        alt="SVG Image"
        className="w-[35rem] sm:w-[35rem] md:w-[45rem] lg:w-[100rem] xl:w-[110rem] 2xl:w-[120rem]"
      />
    </div>
  );
}
// md:text-[2.4rem]
// md:w-[78rem]
export default Home;
