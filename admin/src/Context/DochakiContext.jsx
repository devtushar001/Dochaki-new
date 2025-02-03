import React, { useState, createContext, useEffect } from "react";

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [imageData, setImageData] = useState([])

    const contextValue = {
        imageData,
        setImageData
    };

    return (
        <DochakiContext.Provider value={contextValue}>
            {children}
        </DochakiContext.Provider>
    );
};

export default DochakiContextProvider;