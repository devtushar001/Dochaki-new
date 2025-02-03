import React, { useState, createContext, useEffect } from "react";
import { categories } from "../assets/dochakiData";

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        console.log(navbar)
    }, [])

    const contextValue = {
        navbar,
        setNavbar,
        categories
    };

    return (
        <DochakiContext.Provider value={contextValue}>
            {children}
        </DochakiContext.Provider>
    );
};

export default DochakiContextProvider;
