import React, { useState, useContext } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import { DochakiContext } from "../../Context/DochakiContext";
import "./AddCategory.css";

const AddCategory = () => {
  const { imageData } = useContext(DochakiContext);
  const [catImage, setCatImage] = useState('');
  const [data, setData] = useState({
    name: "",
    img: '',
  });


  const handleSubmit = async () => {
    if (!data.name || !data.img) {
      alert("Please provide category name and image");
      return;
    }

    try {
      const response = await fetch("http://localhost:30017/api/v1/category/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Category added successfully!");
        setData({ name: "", img: "" }); // Reset form
      } else {
        alert(result.message || "Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="add-category">
      <div className="category-box">
        <div className="add-category">
            <img src={imageData[imageData.length - 1]} alt="" />
            <input type="text" name="name" id="name" />
            <button>Submit</button>
        </div>
        <div className="get-category">

        </div>
      </div>
      <ImageUploader />
    </div>
  );
};

export default AddCategory;
