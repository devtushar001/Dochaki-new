import projectModel from "../Models/projectModels.js";

// Save project with content and images
export const addProjectController = async (req, res) => {
    try {
        const { content, images } = req.body;

        if (!content || !images || !Array.isArray(images) || images.length === 0) {
            return res.status(400).json({ error: "Content and at least one image are required." });
        }

        const newProject = new projectModel({ content, images });
        await newProject.save();

        res.status(201).json({ message: "Project saved successfully", data: newProject });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// Get all projects
export const getAllProjectsController = async (req, res) => {
    try {
        const projects = await projectModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch projects", details: error.message });
    }
};
