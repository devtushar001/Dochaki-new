import express from 'express';
import { addCategoryController, deleteCategoryController, getAllCategoryController } from '../Controller/categoryController.js';

const categoryRouter = express.Router();
categoryRouter.post('/add', addCategoryController);
categoryRouter.get('/get-all', getAllCategoryController);
categoryRouter.post('/delete', deleteCategoryController);

export default categoryRouter;
