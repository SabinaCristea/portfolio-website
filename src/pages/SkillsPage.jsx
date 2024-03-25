import SkillsSlider from "../components/SkillsSlider";

function SkillsPage() {
  return (
    <div className="flex flex-col items-center">
      <header className="text-center mt-[5rem] md:mt-[5rem] lg:mt-[8rem] text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] sm:leading-[4.5rem] drop-shadow-3xl w-[30rem] sm:w-[auto]">
        Welcome to my skill showcase, <br />
        <span className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
          where pixels meet precision and code finds its rhythm!
        </span>
      </header>
      <SkillsSlider />
      <img
        src="src/assets/imgs/productive.webp"
        alt="Productive team illustration"
        className="mb-[-1rem] md:mt-[4rem] w-[35rem] sm:w-[40rem] md:w-[45rem] lg:w-[50rem] xl:w-[auto]"
      />
    </div>
  );
}

export default SkillsPage;
