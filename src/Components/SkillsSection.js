import React from "react";

function SkillsSection({ skill, proficient }) {
  return (
    <div className="SkillsSection">
      <div className="skills-info">
        <h3 className="skill-title">{skill}</h3>
        <p className="skill-text">{proficient}</p>
      </div>
    </div>
  );
}

export default SkillsSection;
