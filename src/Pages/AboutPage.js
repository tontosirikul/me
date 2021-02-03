import React from "react";

// import school logo
import logo_kmitl from "../img/logo_kmitl.png";
import logo_bps from "../img/logo_bps.webp";

// import Components
import EducationSection from "../Components/EducationSection";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
import ExperienceSection from "../Components/ExperienceSection";

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

      <Title title={"Experience"} span={"EXPERIENCE"} />
      <div className="experience-container">
        <ExperienceSection
          workplace={"KING’S MONGKUT INSTITUTE OF TECHNOLOGY LADKRABANG"}
          position={"Front-End Developer, Robotics Laboratory"}
          infos={[
            "Design and create Front-End page of Mobile robot application.",
          ]}
          city={"Bangkok, Thailand"}
          period={"Jan 2021 - Present"}
        />
        <ExperienceSection
          workplace={"KING’S MONGKUT INSTITUTE OF TECHNOLOGY LADKRABANG"}
          position={
            "Teacher Assistant, Computer Programming Module, Robotics Laboratory"
          }
          infos={[
            "Prepared the lessons, lectures and lab instructions.",
            "Evaluated the lab session.",
            "Taught C programming for freshmen.",
            "Applied embedded system via line tracking robot.",
          ]}
          city={"Bangkok, Thailand"}
          period={"Aug 2020 - Dec 2020"}
        />
        <ExperienceSection
          workplace={"KING’S MONGKUT INSTITUTE OF TECHNOLOGY LADKRABANG"}
          position={"Training Staff, Non-degree Program, Robotics Laboratory"}
          infos={[
            "Prepared industrial robot (ABB robot arm) and assited the lesson",
            "Evaluated the test for making the credential",
            "Taught basic instruction of industrial robot over 100 of general public.",
          ]}
          city={"Bangkok, Thailand"}
          period={"Jan 2020 - Mar 2020"}
        />
        <ExperienceSection
          workplace={"KING’S MONGKUT INSTITUTE OF TECHNOLOGY LADKRABANG"}
          position={"Lab Assistant, Pre-Activity Module, Robotics Laboratory"}
          infos={[
            "Prepared industrial robots (ABB robot arm) and assisted the lesson.",
            "Taught basic instruction of industrial robot over 70 freshmen engineering students.",
          ]}
          city={"Bangkok, Thailand"}
          period={"Aug 2019 - Dec 2019"}
        />
      </div>
      {/* <Title
        title={"Awards and Certificates"}
        span={"Awards and Certificates"}
      /> */}
      <div className="awards-containers"></div>
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
        <SkillsSection
          skill={"Language"}
          proficient={"Thai (Native), English (IELTS 6.5)"}
        />
      </div>
    </div>
  );
}

export default AboutPage;
