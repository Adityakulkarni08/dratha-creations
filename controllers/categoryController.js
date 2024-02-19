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
