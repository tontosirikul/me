import React from "react";
import about from "../img/about.jpg";
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
          various range of programming skills. Currently, looking for an
          internship position related to any kind of Robotics, Machine learning
          and Software development that allows me to get real work experience.
        </p>
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
        <button className="btn">DOWNLOAD CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
