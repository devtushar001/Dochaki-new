import React, { useContext, useEffect, useState } from "react";
import "./ProjectView.css";
import { useParams } from "react-router-dom";
import { DochakiContext } from "../../Context/DochakiContext";

const ProjectView = () => {
    const { projectData } = useContext(DochakiContext);
    const [newSingleProject, setNewSingleProject] = useState(null);
    const { viewId } = useParams();

    useEffect(() => {
        if (projectData?.length > 0) {
            const singleProjectData = projectData.find((project) => project._id === viewId);
            setNewSingleProject(singleProjectData || null);
        }
    }, [viewId, projectData]);

    if (!newSingleProject) {
        return <p>Loading project...</p>;
    }

    return (
        <div style={{ marginTop: "120px" }} className="project-view">
            <div dangerouslySetInnerHTML={{ __html: newSingleProject.content || "" }}></div>
            <div className="images-container">
                {newSingleProject.images?.map((item, i) => (
                    <img key={i} src={item} alt={`Project Image ${i}`} />
                ))}
            </div>
        </div>
    );
};

export default ProjectView;
