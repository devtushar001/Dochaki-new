import React, { useContext, useEffect, useState } from "react";
import { DochakiContext } from "../../Context/DochakiContext";
import { useParams } from "react-router-dom";

const SingleProject = () => {
    const { categories } = useContext(DochakiContext);
    const [mainCategory, setMainCategory] = useState(null);
    const { projectId } = useParams();

    useEffect(() => {
        if (categories && categories.length > 0) {
            const singleCategory = categories.find((category) => category._id === projectId);
            setMainCategory(singleCategory || null);
        }
    }, [categories, projectId]);

    return (
        <>
            <div style={{ marginTop: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="single-project">
                {mainCategory ? (
                    <>
                        <img src={mainCategory.img} alt="" />
                        <h1>{mainCategory.name}</h1>
                    </>
                ) : (
                    <p>Loading or project not found...</p>
                )}
            </div>
        </>
    );
};

export default SingleProject;
