import blogModel from "../Models/blogModel.js";

export const addBlogController = async (req, res) => {
    // title
    // category
    // content
    // gallery
    // searchkey
    try {
        const { title, category, content, imageData, searchkey } = req.body;
        const newBlog = new blogModel({
            title,
            category,
            searchkey,
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