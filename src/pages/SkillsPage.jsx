import SkillsSlider from "../ui/SkillsSlider";

function SkillsPage() {
  return (
    <div className="flex flex-col items-center">
      <header className="text-center mt-[8rem] text-[4rem] leading-[4.5rem]">
        Welcome to my skill showcase, <br />
        <span className="text-[3.5rem]">
          where pixels meet precision and code finds its rhythm!
        </span>
      </header>
      <SkillsSlider />
      <img
        src="src/assets/productive.png"
        alt="Productive team illustration"
        width="35%"
        className="mb-[-1rem]"
      />
    </div>
  );
}

export default SkillsPage;
