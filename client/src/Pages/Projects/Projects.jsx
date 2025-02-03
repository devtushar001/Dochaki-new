import React, { useEffect, useState } from "react";

const Projects = () => {
   const [data, setData] = useState([]);

   const getProjectData = async () => {
      try {
         const response = await fetch("http://localhost:30017/api/v1/project/get-all", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         });

         if (!response.ok) {
            throw new Error("Failed to fetch projects");
         }

         const fetchedData = await response.json();
         setData(fetchedData.projects);
         console.log(fetchedData.projects); // Log after setting state
      } catch (error) {
         console.error("Error fetching projects:", error);
      }
   };

   useEffect(() => {
      getProjectData();
   }, []);

   useEffect(() => {
      console.log(data)
   })

   return (
      <div>
         <h2>Projects</h2>
         {data.length === 0 ? (
            <p>Loading...</p>
         ) : (
            data.map((project, index) => (
               <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
                  <div className="image-gallery">
                     {project.images.map((image, i) => (
                        <img key={i} src={image} alt={`Project ${index + 1} - Image ${i + 1}`} width="200px" />
                     ))}
                  </div>
                  <hr />
               </div>
            ))
         )}
      </div>
   );
};

export default Projects;
