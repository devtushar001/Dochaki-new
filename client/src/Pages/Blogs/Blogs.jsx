import React, { useEffect } from "react";
import { useState } from "react";
import JoditEditor from 'jodit-react';
import './Blogs.css';

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
         console.log(data.fetchAllBlogs)
         setData(data.fetchAllBlogs);
      } catch (error) {
         console.error("Error fetching blogs:", error);
      }
   };

   useEffect(() => {
      getAllBlogs();
   }, []);

   return (
      <div className="content-container">
         {data.map((content, i) => (
            // <div key={i} style={{ marginBottom: "20px" }}>
            //    <div dangerouslySetInnerHTML={{ __html: content.content }} />
            //    <button onClick={() => deleteContent(content._id)}> Delete </button>
            // </div>
            <div>
               <img src={content.gallery[0]} alt="" />
            </div>
         ))}
      </div>
   )
};

export default Blogs;
