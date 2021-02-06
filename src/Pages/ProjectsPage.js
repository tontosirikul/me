import React from "react";
import { useState } from "react/cjs/react.development";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";
import projects from "../Components/allProjects";
function ProjectsPage() {
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(projects);
  return (
    <div className="ProjectsPage">
      <div className="title">
        <Title title={"Projects"} span={"Projects"}></Title>
      </div>
      <div className="projects-data">
        <Categories />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default ProjectsPage;
