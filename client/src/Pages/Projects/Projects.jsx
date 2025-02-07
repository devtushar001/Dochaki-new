import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Projects.css'
import { DochakiContext } from "../../Context/DochakiContext";

// slider gallery

const Projects = () => {
  const {projectData} = useContext(DochakiContext);

   return (

      <div className="project-container">

         {projectData.length === 0 ? (
            <p>Loading...</p>
         ) : (
            projectData.map((project, index) => (
               <Link to={`/projects-view/${project._id}`} >
                  <div className="single-project" key={index}>
                     <img src={project.images[0]} alt="" />
                  </div>
               </Link>
            ))
         )}
      </div>
   );
};

export default Projects;
