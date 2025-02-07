import categoryModel from "../Models/categoryModel.js";

export const addCategoryController = async (req, res) => {
    try {
        const { name, img } = req.body;

        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const newCategory = new categoryModel({ name, img });
        await newCategory.save();

        res.status(201).json({ message: 'Category added successfully', category: newCategory });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


export const getAllCategoryController = async (req, res) => {
    try {
        const categories = await categoryModel.find().sort({ createdAt: -1 }); // Latest first
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.body;

        const category = await categoryModel.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await categoryModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
