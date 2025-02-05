import React, { useContext, useEffect } from "react";
import "./AddBlogs.css";
import TextEditor from "../../Components/TextEditor/TextEditor";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import { DochakiContext } from "../../Context/DochakiContext";

const AddBlogs = () => {
    const { imageData, content } = useContext(DochakiContext);

    useEffect(() => {
        if (imageData?.length || content) {
            console.log("Updated imageData:", imageData);
            console.log("Updated content:", content);
        }
    }, [imageData, content]);

    return (
        <div className="add-blogs">
            <h2>Start writing your blog.</h2>
            <TextEditor />
            <div className="gallery-images">
                <h2>Add your gallery images</h2>
                <div className="gallery-images-container">
                    {Array.isArray(imageData) &&
                        imageData.map((item, i) => (
                            <div key={i}>
                                <img src={item} alt={`Gallery Image ${i + 1}`} />
                            </div>
                        ))}
                </div>
            </div>
            <ImageUploader />
        </div>
    );
};

export default AddBlogs;
