import React from "react";
import about from "../img/about.JPG";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt=""></img>
      </div>
      <div className="about-info">
        <h4>
          I am <span>Tanhapon Tosirikul</span>
        </h4>
        <p className="about-text">
          A self-motivated, enthusiastic Third years engineering student with
          various range of programming skills and{" "}
          <span>"Come on, I can deal with everything."</span> Attitude.
          Currently, looking for an cooperative study position related to any
          kind of Robotics, Machine learning and Software development that
          allows me to get real work experience.
        </p>

        <p className="about-text"></p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Tanhapon Tosirikul</p>
            <p>: 22</p>
            <p>: Thailand</p>
            <p>: Thai, English</p>
            <p>
              : 207/1 Sunthornthep-road, Muang Buriram, Buriram 31000 Thailand
            </p>
          </div>
        </div>
        <button className="btn">
          <a
            href="https://drive.google.com/file/d/17H_RfAsVELEAk-kb32mfY8FGGIrCvd3G/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Download CV
          </a>
        </button>
        <button className="btn">
          <a
            href="https://drive.google.com/file/d/1lhXyxFSbqndKnq6y8gaVelWd3DHajtW1/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Download Transcript
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
