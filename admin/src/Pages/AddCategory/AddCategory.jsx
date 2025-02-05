import { useContext, useEffect, useState } from "react";
import './AddCategory.css'
import ImageUploader from '../../Components/ImageUploader/ImageUploader'
import { DochakiContext } from "../../Context/DochakiContext";
import { toast } from "react-toastify";

const AddCategory = () => {
  const { imageData, setImageData } = useContext(DochakiContext);
  const [data, setData] = useState({ name: "", img: "" });
  const [categoryData, setCategoryData] = useState([]);

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
        setData({ name: "", img: "" });
        fetchCategories(); // Refresh categories
      } else {
        toast.error(result.message || "Failed to add category");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:30017/api/v1/category/get-all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setCategoryData(result);
        toast.success("Categories fetched successfully!");
      } else {
        toast.error(result.message || "Failed to fetch categories");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:30017/api/v1/category/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Category deleted successfully!");
        fetchCategories(); // Refresh category list
      } else {
        toast.error("Failed to delete category");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    setData((prev) => ({ ...prev, img: imageData.length > 0 ? imageData[imageData.length - 1] : "" }))
  }, [imageData]);
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
          {categoryData?.length > 0 ? (
            categoryData.map((item) => (
              <div className="ctg-box" key={item.id || item.name}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <div className="buttons">
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                  <button>Update</button>
                </div>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>
      <ImageUploader />
    </div>
  );
};

export default AddCategory;
