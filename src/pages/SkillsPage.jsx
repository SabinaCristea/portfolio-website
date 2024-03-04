import { useEffect, useState } from "react";
import Skills from "../pages/Skills";

function SkillsPage() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const res = await fetch("./skillsData.json");
        const data = await res.json();
        setSkillsData(data);
      } catch (error) {
        console.error("Errooooooor:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Skills data={skillsData.hardSkills} headline="Expertise" />
      <Skills data={skillsData.softSkills} headline="Soft Skills" />;
    </>
  );
}

export default SkillsPage;
