import { useContext, useState } from "react";
// import ImageUploader from "./ImageUploader";
import './AddCategory.css'
import ImageUploader from '../../Components/ImageUploader/ImageUploader'
import { DochakiContext } from "../../Context/DochakiContext";
import { toast } from "react-toastify";

const AddCategory = () => {
  const { imageData, setImageData } = useContext(DochakiContext);
  const [data, setData] = useState({ name: "", img: imageData[imageData.length - 1] });

  const handleSubmit = async () => {
    if (!data.name || !data.img) {
      toast.error("Please provide category name and image");
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
        toast.success("Category added successfully!");
        setData({ name: "", img: "" }); // Reset form
      } else {
        toast.error(result.message || "Failed to add category");
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
          {imageData.length > 0 && <img src={imageData[imageData.length - 1]} alt="Category" />}
          <input
            onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Category name"
            type="text"
            name="name"
            id="name"
            value={data.name}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="get-category">
          {/* Show all categories */}
        </div>
      </div>
      <ImageUploader />
    </div>
  );
};

export default AddCategory;
