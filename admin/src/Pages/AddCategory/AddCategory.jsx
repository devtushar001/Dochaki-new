import React, { useState, useEffect, useContext } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import { DochakiContext } from "../../Context/DochakiContext";
import './AddCategory.css';

const AddCategory = () => {
  const { imageData } = useContext(DochakiContext);
  const [data, setData] = useState({
    name: '',
    img: ''
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = async () => {
    if (!data.name || !data.img) {
      alert("Please provide category name and image");
      return;
    }

    try {
      const response = await fetch("http://localhost:30017/api/v1/category/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Category added successfully!");
        setData({ name: '', img: '' }); // Reset form
      } else {
        alert(result.message || "Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="add-category">
      <h1>Select an Image</h1>
      <ImageUploader />
      <div className="set-category-data">
        {imageData && imageData.length > 0 ? (
          imageData.map((item, i) => (
            <div className="category-image" key={i}>
              <img src={item} alt="Category" />
              <input
                type="text"
                value={item}
                readOnly
                onClick={() => setData((prev) => ({ ...prev, img: item }))} // Set image on click
              />
            </div>
          ))
        ) : (
          <p>No images uploaded</p>
        )}

        <div className="name-container">
          <input
            type="text"
            name="name"
            placeholder="Category name"
            value={data.name}
            onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
