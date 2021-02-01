import React from "react";
import EducationSection from "../Components/EducationSection";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
import logo_kmitl from "../img/logo_kmitl.png";
import logo_bps from "../img/logo_bps.webp";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About me"} span={"About me"} />
      <ImageSection />
      <Title title={"Education"} span={"Education"} />
      <div class="education-container">
        <EducationSection
          school_logo={logo_kmitl}
          school_name={"KING’S MONGKUT INSTITUTE OF TECHNOLOGY LADKRABANG"}
          school_program={"Bachelor of Engineering (International Program)"}
          info={"Major: Robotics and Artificial Intelligence, GPA 3.53"}
          city={"Bangkok, Thailand"}
          period={"2018 - Present"}
        />
        <EducationSection
          school_logo={logo_bps}
          school_name={"BURIRAM PITTAYAKHOM SCHOOL"}
          school_program={"Science and Mathematics program"}
          info={"GPA 3.13"}
          city={"Buriram, Thailand"}
          period={"2011 - 2016"}
        />
      </div>

      <Title title={"Skills"} span={"Skills"} />
      <div className="skills-container">
        <SkillsSection
          skill={"Programming"}
          proficient={"C/C++, Javascript, Python, R"}
        />
        <SkillsSection
          skill={"Frontend"}
          proficient={"React.js, HTML, CSS, Javascript"}
        />
        <SkillsSection skill={"Backend"} proficient={"Django"} />
        <SkillsSection skill={"Database"} proficient={"PostgreSQL"} />
        <SkillsSection
          skill={"AI/Deep learning"}
          proficient={"PyTorch, FastAI"}
        />
        <SkillsSection skill={"Robotics"} proficient={"ROS, PLC"} />
      </div>
      <Title title={"Experience"} span={"EXPERIENCE"} />
    </div>
  );
}

export default AboutPage;
