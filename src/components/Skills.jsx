import { useState } from "react";
import SkillTab from "./SkillTab";
import SkillDetails from "./SkillDetails";

function Skills({ data, headline }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeSkill = data[activeTabIndex];

  function handleTabOpen(index) {
    setActiveTabIndex(index);
  }

  return (
    <div className="rounded-[3rem] bg-[--color-pink-secondary]">
      <h2 className="uppercase lg:text-[2.5rem] xl:text-[3rem] text-center py-4 border-b-[.2rem] border-[var(--color-pink-primary)] ">
        {headline}
      </h2>

      <div className="flex flex-row lg:flex-col">  
        <div className={`flex flex-col lg:flex-row`}>
          {data.map((skill, index) => (
            <SkillTab
              key={index}
              src={skill.src}
              alt={skill.alt}
              isActive={activeTabIndex === index}
              handleTabOpen={() => handleTabOpen(index)}
            >
              {skill.name}
            </SkillTab>
          ))}
        </div>

        <SkillDetails
          src={activeSkill.src}
          alt={activeSkill.alt}
          isActive={true}
          details={activeSkill.details}
          />
      </div>
    </div>
  );
}

export default Skills;
