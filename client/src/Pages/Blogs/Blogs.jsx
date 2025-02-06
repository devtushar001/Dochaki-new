import React, { useEffect } from "react";
import { useState } from "react";

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
         setData(data.fetchAllBlogs);
      } catch (error) {
         console.error("Error fetching blogs:", error);
      }
   };

   useEffect(() => {
      getAllBlogs();
   }, []);

   return (
      <>
         {data.map((item, i) => {
            return (
               <div key={i}>
                  {item}
               </div>
            )
         })}
      </>
   )
};

export default Blogs;
