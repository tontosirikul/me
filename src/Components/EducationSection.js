import React from "react";
function EducationSection({
  school_logo,
  school_name,
  school_program,
  info,
  city,
  period,
}) {
  return (
    <div className="EducationSection">
      <div className="left-education-section">
        <img src={school_logo} alt=""></img>
      </div>
      <div className="right-education-section">
        <div className="education-info1">
          <h3>{school_name}</h3>
          <p>{school_program}</p>
          <p>{info}</p>
        </div>
        <div className="education-info2">
          <h3>{city}</h3>
          <p>{period}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
