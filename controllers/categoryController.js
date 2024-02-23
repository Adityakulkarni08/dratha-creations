import Category from "../models/Category.js"

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });
    const savedCategory = await newCategory.save();
    res.json({ success: true, category: savedCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const getCategories = async (req, res) => {
    try {
      // Fetch categories from the database
      const categories = await Category.find();
  
      const formattedCategories = categories.map((category) => ({
        _id: category._id,
        name: category.name,
      }));
  
      // Send the response
      res.status(200).json({
        success: true,
        categories: formattedCategories,
      });
    } catch (error) {
      console.error('Error fetching categories', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true } // Return the updated document
    );
    res.json({ success: true, category: updatedCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const createSubcategory = async (req, res) => {
  try {
    const { subcategoryName, selectedCategory } = req.body;

    // Check if the selected category exists
    const existingCategory = await Category.findById(selectedCategory);
    if (!existingCategory) {
      return res.status(404).json({ success: false, message: 'Selected category not found' });
    }

    // Create a new subcategory
    const newSubcategory = {
      name: subcategoryName,
    };

    // Push the new subcategory to the selected category's subcategories array
    existingCategory.subcategories.push(newSubcategory);

    // Save the changes to the database
    await existingCategory.save();

    res.status(201).json({ success: true, message: 'Subcategory created successfully' });
  } catch (error) {
    console.error('Error creating subcategory', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getSubcategories = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Check if the category exists in the database
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    // Retrieve and return the subcategories of the specified category
    const subcategories = existingCategory.subcategories;
    res.status(200).json({ success: true, subcategories });
  } catch (error) {
    console.error('Error getting subcategories', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
