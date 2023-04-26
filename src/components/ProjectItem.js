import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesList = technologies.map((technology)=>{
    return <span key={technology} className="btn btn-default" style={{backgroundColor: "aquamarine",
     width: "fit-content",
    padding:"2px",
  margin:"5px"}}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesList}
      </div>
    </div>
  );
}

export default ProjectItem;
