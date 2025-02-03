import React, { useState, createContext, useEffect } from "react";

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        console.log(navbar)
    }, [])

    const contextValue = {
        navbar,
        setNavbar
    };

    return (
        <DochakiContext.Provider value={contextValue}>
            {children}
        </DochakiContext.Provider>
    );
};

export default DochakiContextProvider;
