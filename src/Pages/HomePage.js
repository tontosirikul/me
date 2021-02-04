import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="greeting">
        <h1 className="greeting-text">
          Hi, I am <span>Tanhapon Tosirikul</span>
        </h1>
        <p className="h-sub-text">
          A self-motivated, enthusiastic Third years engineering student with
          various range of programming skills. Currently, looking for an
          internship position related to any kind of Robotics, Machine learning
          and Software development that allows me to get real work experience.
        </p>
        <div className="icons">
          <a
            className="icon-holder"
            href="https://github.com/tontosirikul"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon gh"
            ></FontAwesomeIcon>
          </a>
          <a
            className="icon-holder"
            href="https://www.linkedin.com/in/tanhapon-tosirikul-36841a160/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon ln"
            ></FontAwesomeIcon>
          </a>
          <a
            className="icon-holder"
            href="https://www.facebook.com/TonTosirikul/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon fb"
            ></FontAwesomeIcon>
          </a>
          <a
            className="icon-holder"
            href="https://tontosirikul.medium.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faMedium}
              className="icon md"
            ></FontAwesomeIcon>
          </a>
          <a
            className="icon-holder"
            href="https://www.youtube.com/user/VENICEFANSUB"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon yt"
            ></FontAwesomeIcon>
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
