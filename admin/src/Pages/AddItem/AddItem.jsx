import React, { useContext, useEffect, useState } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import TextEditor from "../../Components/TextEditor/TextEditor";
import { DochakiContext } from "../../Context/DochakiContext";
import "./AddItem.css";

const AddItem = () => {
    const { content, imageData } = useContext(DochakiContext);
    const [data, setData] = useState({
        content: content,
        images: imageData
    });

    // Keep data in sync with DochakiContext updates
    useEffect(() => {
        setData({ content, images: imageData });
    }, [content, imageData]);

    useEffect(() => {
        console.log("Updated Data:", data);
    }, [data]);

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:30017/api/v1/project/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const newData = await response.json();
            console.log("Response Data:", newData);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div className="add-item">
            <h1>Add new project with gallery images</h1>
            <div className="main-content">
                <TextEditor />
            </div>
            <div className="others-data">
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className="show-image-data">
                {imageData?.map((item, i) => (
                    <div className="single-img" key={i}>
                        <img src={item} alt="Uploaded preview" />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <ImageUploader />
        </div>
    );
};

export default AddItem;
