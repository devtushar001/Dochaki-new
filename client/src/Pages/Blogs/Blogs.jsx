import React, { useContext, useEffect, useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { DochakiContext } from "../../Context/DochakiContext";

const Blogs = () => {
   const {blogData} = useContext(DochakiContext);

   return (
      <div className="blogs-container">
         {blogData.map((content, i) => (
            <div key={i} className="blog-card">
               <img src={content.gallery[0]} alt={content.title} className="blog-image" />
               <div className="blog-details">
                  <h2 className="blog-title">{content.title}</h2>
                  <p className="blog-category">{content.category}</p>
                  <Link to={`/blogs/${content._id}`}><button className="view-button">View</button></Link> 
               </div>
            </div>
         ))}
      </div>
   );
};

export default Blogs;
