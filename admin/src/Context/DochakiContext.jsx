import React, { useState, createContext, useEffect } from "react";

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [imageData, setImageData] = useState([]);
    const [catImage, setCatImage] = useState('');
    const [content, setContent] = useState('');
    const contextValue = {
        imageData,
        setImageData,
        content,
        setContent,
        catImage,
        setCatImage
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