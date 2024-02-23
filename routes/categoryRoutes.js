// routes/categoryRoutes.js
import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  createSubcategory,
  getSubcategories,
  deleteSubcategory,
} from "../controllers/categoryController.js";

router.post("/create-category", createCategory);
router.get("/get-category", getCategories);
router.get("/get-subcategories/:categoryId", getSubcategories);
router.delete("/delete-subcategory/:subcategoryId", deleteSubcategory);
router.put("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);
router.post("/create-subcategory", createSubcategory);

export default router;
