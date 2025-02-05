import React, { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [navbar, setNavbar] = useState(false);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:30017/api/v1/category/get-all", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });


            if (response.ok) {
                toast.success("Categories fetched successfully!");
            } else {
                toast.error(result.message || "Failed to fetch categories");
            }
            const result = await response.json();
            console.log(result)
            setCategories(result)
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        console.log(categories);
        fetchCategories();
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
