import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectItems = projects.map(({
    id,
    name,
    about,
    technologies}) => {
    
      return <ProjectItem key={id} name={name} about={about} technologies={technologies}/>

  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectItems}</div>
    </div>
  );
}

export default ProjectList;
