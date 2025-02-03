import express from 'express';
import { addProjectController, getAllProjectsController } from '../Controller/projectController.js';

const projectRouter = express.Router();
projectRouter.post('/create', addProjectController);
projectRouter.get('/get-all', getAllProjectsController);

export default projectRouter;