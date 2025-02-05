import React, { useState, useEffect, useContext } from "react";
import "./ImageUploader.css";
import { toast } from "react-toastify";
import { DochakiContext } from "../../Context/DochakiContext";

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const { imageData, setImageData } = useContext(DochakiContext);
    const [images, setImages] = useState([]); // Keeping local state for UI updates

    // Fetch images from the backend
    const fetchImages = async () => {
        try {
            const response = await fetch("http://localhost:30017/api/v1/images/image");
            if (!response.ok) throw new Error("Failed to fetch images");

            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
            toast.error("Failed to load images");
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    // Handle Image Upload
    const handleUpload = async () => {
        if (!image) return toast.error("Please select an image");

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await fetch("http://localhost:30017/api/v1/images/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Upload failed");

            toast.success(data.message);
            fetchImages(); // Refresh the UI
        } catch (error) {
            toast.error(error.message || "Something went wrong");
        }
    };

    // Handle Image Delete
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this image?")) return;

        try {
            const response = await fetch(`http://localhost:30017/api/v1/images/delete`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) throw new Error("Failed to delete image");

            toast.success("Image deleted successfully!");
            fetchImages(); // Refresh images after deletion
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete image");
        }
    };

    return (
        <div className="image-uploader">
            <div className="inputs">
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button onClick={handleUpload}>Upload</button>
            </div>

            <div className="outputs">
                {images.length === 0 ? (
                    <p>No images found.</p>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {images.map((img) => (
                            <div className="single-image-grid" key={img._id} style={{ margin: "10px" }}>
                                <img src={img.imageUrl} alt="Uploaded" width="150px" />
                                <input type="text" value={img.imageUrl} readOnly />
                                <div className="buttons">
                                    <button onClick={() => handleDelete(img._id)}>Delete</button>
                                    <button onClick={() => setImageData(prev => [...(prev || []), img.imageUrl])}>
                                        Use
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUploader;
