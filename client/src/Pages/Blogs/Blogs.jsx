import React, { useEffect, useState } from "react";
import "./Blogs.css";

const Blogs = () => {
   const [data, setData] = useState([]);

   const getAllBlogs = async () => {
      try {
         const response = await fetch(`http://localhost:30017/api/v1/blog/get-blogs`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         });

         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const data = await response.json();
         console.log(data.fetchAllBlogs);
         setData(data.fetchAllBlogs);
      } catch (error) {
         console.error("Error fetching blogs:", error);
      }
   };

   useEffect(() => {
      getAllBlogs();
   }, []);

   return (
      <div className="blogs-container">
         {data.map((content, i) => (
            <div key={i} className="blog-card">
               <img src={content.gallery[0]} alt={content.title} className="blog-image" />
               <div className="blog-details">
                  <h2 className="blog-title">{content.title}</h2>
                  <p className="blog-category">{content.category}</p>
                  <button className="view-button">View</button>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Blogs;
