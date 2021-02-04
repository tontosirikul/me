import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            className="icon-holder"
            to={{ pathname: "https://github.com/tontosirikul" }}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon gh"
            ></FontAwesomeIcon>
          </Link>
          <Link
            className="icon-holder"
            to={{
              pathname:
                "https://www.linkedin.com/in/tanhapon-tosirikul-36841a160/",
            }}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon ln"
            ></FontAwesomeIcon>
          </Link>
          <Link
            className="icon-holder"
            to={{ pathname: "https://www.facebook.com/TonTosirikul/" }}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon fb"
            ></FontAwesomeIcon>
          </Link>
          <Link
            className="icon-holder"
            to={{ pathname: "https://www.youtube.com/user/VENICEFANSUB" }}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon yt"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
