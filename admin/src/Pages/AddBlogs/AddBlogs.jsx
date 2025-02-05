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

    const submitBlog = async () => {
        console.log(content);
        console.log(imageData)
        try {
            const response = await fetch(`http://localhost:30017/api/v1/blog/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content, imageData })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error submitting blog:", error);
        }
    };

    // http://localhost:30017/api/v1/blog/get-blogs


    return (
        <div className="add-blogs">
            <button onClick={submitBlog}>Submit</button>
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
