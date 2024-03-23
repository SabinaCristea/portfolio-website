import SkillsSlider from "../components/SkillsSlider";

function SkillsPage() {
  return (
    <div className="flex flex-col items-center">
      <header className="text-center lg:mt-[8rem] lg:text-[3.5rem] xl:text-[4rem] leading-[4.5rem] drop-shadow-3xl">
        Welcome to my skill showcase, <br />
        <span className="lg:text-[3rem] xl:text-[3.5rem]">
          where pixels meet precision and code finds its rhythm!
        </span>
      </header>
      <SkillsSlider />
      <img
        src="src/assets/imgs/productive.webp"
        alt="Productive team illustration"
        className="mb-[-1rem] mt-[4rem]"
      />
    </div>
  );
}

export default SkillsPage;
