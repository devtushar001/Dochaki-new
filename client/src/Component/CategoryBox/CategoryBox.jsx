import React, { useContext, useEffect } from "react";
import { DochakiContext } from "../../Context/DochakiContext";
import './CategoryBox.css';

const CategoryBox = () => {
   const { categories } = useContext(DochakiContext)

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
                     <div className="name">
                        <p>{item.name}</p>
                     </div>
                  </div>
               )
            })}
         </div>
      </>
   )
}

export default CategoryBox;