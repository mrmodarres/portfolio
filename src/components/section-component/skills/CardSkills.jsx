import React from "react";

function CardSkills({ dataSkills }) {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{dataSkills.label}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {dataSkills.skills.map((skill, idx) => (
            <div
              className="skills__data"
              key={`key_of_skill_${skill.title}_${idx + 1}`}
            >
              {skill.icon}
              <div>
                <h3 className="skills__name">{skill.title}</h3>
                <span className="skills__level">{skill.levelSkill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSkills;
