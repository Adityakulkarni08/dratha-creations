import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/Navbar/NavBar";
import AdminMenu from "./AdminMenu.js";

const AdminPanel = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8087/api/v1/category/get-category"
      );

      const categoriesWithSubcategories = await Promise.all(
        response.data.categories.map(async (category) => {
          const subcategoriesResponse = await axios.get(
            `http://localhost:8087/api/v1/category/get-subcategories/${category._id}`
          );

          return {
            ...category,
            subcategories: subcategoriesResponse.data.subcategories,
          };
        })
      );

      setCategories(categoriesWithSubcategories);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleDeleteSubcategory = async (categoryId, subcategoryId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8087/api/v1/category/delete-subcategory/${subcategoryId}`
      );

      if (response.data.success) {
        // If deletion is successful, fetch categories again to update the list
        fetchCategories();
        console.log(`Subcategory with ID ${subcategoryId} deleted successfully`);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting subcategory", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8087/api/v1/category/delete-category/${categoryId}`
      );

      if (response.data.success) {
        // If deletion is successful, fetch categories again to update the list
        fetchCategories();
        console.log(`Category with ID ${categoryId} deleted successfully`);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2>Categories and Subcategories:</h2>
      </div>
      <ul>
        {categories.map((category) => (
          <li key={category._id} style={{ fontWeight: "bold" }}>
            {category.name} (Category)
            {category.subcategories && category.subcategories.length > 0 && (
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory._id} style={{ fontWeight: "normal" }}>
                    {subcategory.name} (Subcategory)
                    <button
                      onClick={() =>
                        handleDeleteSubcategory(category._id, subcategory._id)
                      }
                    >
                      Delete Subcategory
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={() => handleDeleteCategory(category._id)}>
              Delete Category
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminPanel;
