// routes/categoryRoutes.js
import express from 'express';
const router = express.Router();
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
  } from "../controllers/categoryController.js"

router.post('/create-category', createCategory);
router.get('/get-category', getCategories);
router.put('/update-category/:id', updateCategory);
router.delete('/delete-category/:id', deleteCategory);

export default router;
