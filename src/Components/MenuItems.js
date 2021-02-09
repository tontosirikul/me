import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
function MenuItems({ menuItem }) {
  return (
    <div className="projects">
      {menuItem.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li className="icons">
                  <a href={item.link2}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon gh"
                    ></FontAwesomeIcon>
                  </a>
                  <a href={item.link1}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="icon yt"
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
