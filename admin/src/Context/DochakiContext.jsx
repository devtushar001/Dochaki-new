import React, { useState, createContext, useEffect } from "react";

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [imageData, setImageData] = useState([]);
    const [catImage, setCatImage] = useState('');
    const [content, setContent] = useState('');
    const [categoryData, setCategoryData] = useState([]);

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



    const contextValue = {
        imageData,
        setImageData,
        content,
        setContent,
        catImage,
        setCatImage,
        categoryData
    };

    useEffect(() => {
        console.log(content);
    }, [content]);

    useEffect(() => {
        console.log(imageData);
    }, [imageData]);

    return (
        <DochakiContext.Provider value={contextValue}>
            {children}
        </DochakiContext.Provider>
    );
};

export default DochakiContextProvider;