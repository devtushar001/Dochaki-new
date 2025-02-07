import React, { useContext, useEffect } from "react";
import { DochakiContext } from "../../Context/DochakiContext";
import './CategoryBox.css';
import { Link } from "react-router-dom";

const CategoryBox = () => {
   const { categories } = useContext(DochakiContext);


   useEffect(() => {
      console.log(categories)
   })
   return (
      <>
         <div className="single-category">
            {categories.map((item, i) => {
               return (
                  <div id="cat-box" key={i}>
                     <img src={item.img} alt="" />
                     <Link to={`projects/${item._id}`} className="no-style-link">
                        <div className="name">
                           <p>{item.name}</p>
                        </div>
                     </Link>
                  </div>
               )
            })}
         </div>
      </>
   )
}

export default CategoryBox;