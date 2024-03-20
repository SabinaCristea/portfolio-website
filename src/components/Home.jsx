import earthCoverImage from "../../src/assets/imgs/earth-cover.webp";

function Home() {
  return (
    <div
      className="h-[90vh] flex flex-col items-center pt-[14rem] mt-[-10rem]
                 after:z-[-1] 
                 after:h-[90vh] after:w-[100%] after:absolute after:top-0 
                 after:left-0 after:outline-dotted after:outline-[1rem] after:outline-[var(--color-green)]"
      style={{
        backgroundImage: `url(${earthCoverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p
        className="text-[2.4rem] uppercase tracking-[0.5rem] mb-[-4rem]"
        style={{ wordSpacing: "1rem" }}
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
