import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="greeting">
        <h1 className="greeting-text">
          Hi, welcome to <span>TonTosirikul</span>'s site.
        </h1>
        <p className="h-sub-text">
          This site is my first react portfolio project, which you can find all
          of my information, projects, blogs, contacts and etc via navigation
          bar or you can check out my external sites at these icons down below.
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
        <div className="loop">
          <TypistLoop interval={1000}>
            {[
              "Robotics & AI Engineer",
              "Software Developer",
              "Blogger",
              "Youtuber",
              "Reader",
            ].map((text) => (
              <Typist key={text} startDelay={500}>
                {text}
              </Typist>
            ))}
          </TypistLoop>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
