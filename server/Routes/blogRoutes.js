import express from 'express';
import { addBlogController, getAllBlogsController } from '../Controller/blogController.js';

const blogRouter = express.Router();

blogRouter.post('/create', addBlogController);
blogRouter.get('/get-blogs', getAllBlogsController)

export default blogRouter;