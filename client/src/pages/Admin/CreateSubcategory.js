import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateSubcategory = () => {
  const [subcategoryName, setSubcategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the server
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dratha-creations.onrender.com/api/v1/category/get-category');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories', error);
        // Handle errors or show a notification to the user
      }
    };

    fetchCategories();
  }, []);

  const handleSubcategoryCreation = async () => {
    try {
      // Make a request to create the subcategory on the backend
      await axios.post('https://dratha-creations.onrender.com/api/v1/category/create-subcategory', {
        subcategoryName,
        selectedCategory,
      });

      // Optionally, you can redirect the admin or show a success message
    } catch (error) {
      console.error('Error creating subcategory', error);
      // Handle errors or show a notification to the user
    }
  };

  return (
    <div>
      <h2>Create Subcategory</h2>
      <form>
        <div>
          <label htmlFor="subcategoryName">Subcategory Name:</label>
          <input
            type="text"
            id="subcategoryName"
            value={subcategoryName}
            onChange={(e) => setSubcategoryName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="selectedCategory">Select Category:</label>
          <select
            id="selectedCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleSubcategoryCreation}>
          Create Subcategory
        </button>
      </form>
    </div>
  );
};

export default CreateSubcategory;
