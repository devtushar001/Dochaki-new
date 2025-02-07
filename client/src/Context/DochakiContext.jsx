import React, { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';

export const DochakiContext = createContext(null);

const DochakiContextProvider = ({ children }) => {
    const [navbar, setNavbar] = useState(false);
    const [categories, setCategories] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    const backend_url = 'https://dochaki-new.onrender.com';

    const getAllBlogs = async () => {
        try {
            const response = await fetch(`${backend_url}/api/v1/blog/get-blogs`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data.fetchAllBlogs);
            setBlogData(data.fetchAllBlogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        getAllBlogs();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${backend_url}/api/v1/category/get-all`, {
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

    const getProjectData = async () => {
        try {
            const response = await fetch(`${backend_url}/api/v1/project/get-all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch projects");
            }

            const fetchedData = await response.json();
            setProjectData(fetchedData.projects);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        getProjectData();
    }, []);


    const contextValue = {
        navbar,
        setNavbar,
        categories,
        blogData,
        projectData,
        backend_url
    };

    return (
        <DochakiContext.Provider value={contextValue}>
            {children}
        </DochakiContext.Provider>
    );
};

export default DochakiContextProvider;
