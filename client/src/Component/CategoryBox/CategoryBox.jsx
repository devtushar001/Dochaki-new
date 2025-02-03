import React, { useContext, useEffect } from "react";
import { DochakiContext } from "../../Context/DochakiContext";

const CategoryBox = () => {
    const {categories} = useContext(DochakiContext)

    useEffect(() =>  {
        console.log(categories)
    })
     return (
        <>
          <div className="single-category">
             {categories.map((item, i) => {
                return (
                    <div id="cat-box" key={i}>
                       <img src={item.img} alt="" />
                       <p>{item.name}</p>
                    </div>
                )
             })}
          </div>
        </>
     )
}

export default CategoryBox;