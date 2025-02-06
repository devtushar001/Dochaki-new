import React, { useContext, useEffect, useState } from "react";
import "./AddBlogs.css";
import TextEditor from "../../Components/TextEditor/TextEditor";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import { DochakiContext } from "../../Context/DochakiContext";

const AddBlogs = () => {
    const { imageData, content, categoryData } = useContext(DochakiContext);
    const [searchkey, setSearchkey] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [newSearchKeys, setNewSearchKeys] = useState([]);

    useEffect(() => {
        if (searchkey) {
            const arr = searchkey.split(",").map(item => item.trim()).filter(item => item !== "");
            setNewSearchKeys(arr);
        }
    }, [searchkey]);

    useEffect(() => {
        if (imageData?.length || content) {
            console.log("Updated imageData:", imageData);
            console.log("Updated content:", content);
        }
    }, [imageData, content]);

    const submitBlog = async () => {
        if (!title || !content || !category) {
            console.error("Title, content, and category are required!");
            return;
        }

        try {
            const response = await fetch(`http://localhost:30017/api/v1/blog/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, imageData, newSearchKeys, title, category })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Blog submitted successfully:", data);
        } catch (error) {
            console.error("Error submitting blog:", error);
        }
    };

    return (
        <div className="add-blogs">
            <button onClick={submitBlog}>Submit</button>
            <h2>Start writing your blog.</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    border: '1px solid gray',
                    margin: '12px 0',
                    width: '100%',
                    height: '35px',
                    borderRadius: '19px',
                    paddingLeft: '12px',
                    fontFamily: 'Arial',
                    fontSize: '22px'
                }}
                type="text"
                placeholder="Enter blog title"
            />
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
            <div className="set-category">
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categoryData.map((item, i) => (
                        <option key={i} value={item.name}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div className="search-keys">
                <input
                    value={searchkey}
                    onChange={(e) => setSearchkey(e.target.value)}
                    placeholder="Enter search keys (comma-separated)"
                    type="text"
                />
            </div>
        </div>
    );
};

export default AddBlogs;
