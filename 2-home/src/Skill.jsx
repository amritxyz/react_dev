import React from "react";

const Skill = () => {
  const skills = [
    {
      key: "frontend",
      langs: ["HTML", "CSS", "JavaScript", "React"]
    }
  ];

  return (
    <div className="h-90">
      {skills.map((skill, lang) => (
        <div key={lang}>
          <h2>{skill.key}</h2>
          <ul>
            {skill.langs.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skill;
