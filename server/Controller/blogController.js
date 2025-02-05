import blogModel from "../Models/blogModel.js";

export const addBlogController = async (req, res) => {
    try {
        const { content, imageData } = req.body;
        const newBlog = new blogModel({
            content,
            gallery: imageData
        });

        await newBlog.save();

        console.log(newBlog)

        if (!newBlog) {
            return res.status(501).json({
                success: false,
                message: `Blog not created.`
            })
        }
        return res.status(201).json({
            success: true,
            message: `Got it`
        })
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: `Api got a problem`
        })
    }
}

export const getAllBlogsController = async (req, res) => {
    try {
        const fetchAllBlogs = await blogModel.find();
        console.log(fetchAllBlogs)
        if (!fetchAllBlogs) {
            return res.status(501).json({
                success: false,
                message: `Blogs not fetched`
            })
        }

        return res.status(201).json({
            success: true,
            message: `Blogs fetched successfully`,
            fetchAllBlogs
        })

    } catch (error) {
        return res.status(501).json({
            success: false,
            message: `Api got a problem`,
            error
        })
    }
}