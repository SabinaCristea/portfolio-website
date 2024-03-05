import { useState } from "react";
import SkillTab from "../ui/SkillTab";
import SkillDetails from "../ui/SkillDetails";

function Skills({ data, headline }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const activeSkill = data[activeTabIndex];

  function handleTabOpen(index) {
    setActiveTabIndex(index);
  }

  return (
    <div className="rounded-[3rem] bg-[#ebe0d3]">
      <h2 className="uppercase text-[3rem] text-center py-4 border-b-[.2rem] border-[#f0efec] ">
        {headline}
      </h2>
      <div className={`flex`}>
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
      {data.map(
        (skill, index) =>
          activeTabIndex === index && (
            <SkillDetails
              key={index}
              src={skill.src}
              alt={skill.alt}
              isActive={activeTabIndex === index}
              details={skill.details}
            />
          )
      )}
      {/* <SkillDetails
        src={activeSkill.src}
        alt={activeSkill.alt}
        isActive={true}
        details={activeSkill.details}
      /> */}
    </div>
  );
}

export default Skills;
