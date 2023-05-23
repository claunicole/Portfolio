import './ProjectsIcons.css'

import {
    FaGithub,
    FaRegArrowAltCircleRight
  
  } from "react-icons/fa";

  function ProjectsIcons({github, link}) {
    return (
      <div className="icon">
          {github && (
        <a href={github}>
          <FaGithub className="image-icon" />
        </a>
      )}
        <a href={link}>
          <FaRegArrowAltCircleRight className="image-icon"/>
        </a>
      </div>
    )
  }
  export default ProjectsIcons

  