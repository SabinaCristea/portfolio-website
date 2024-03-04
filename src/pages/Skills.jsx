import { useState } from "react";
import SkillTab from "../ui/SkillTab";
import styles from "./Skills.module.css";

function Skills({ data, headline }) {
  const [activeTabIndex, setActiveTabIndex] = useState(null);

  function handleTabOpen(index) {
    setActiveTabIndex(index);
  }

  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <main className={`max-w-[110rem] mx-auto ${styles.hardSkillsContainer}`}>
      <h2 className={styles.headline}>{headline}</h2>
      <section className={`flex`}>
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
      </section>
      <section></section>
    </main>
  );
}

export default Skills;
