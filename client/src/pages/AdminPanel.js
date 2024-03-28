import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/Navbar/NavBar";
import AdminMenu from "./AdminMenu.js";

const AdminPanel = () => {
  const [categories, setCategories] = useState([]);
  const [updatedCategoryName, setUpdatedCategoryName] = useState("");
  const [updatedSubcategoryName, setUpdatedSubcategoryName] = useState("");
  const [updatedSubcategoryNames, setUpdatedSubcategoryNames] = useState({});
  const [updatedCategoryNames, setUpdatedCategoryNames] = useState({});

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://dratha-creations-t4ls.onrender.com/api/v1/category/get-category"
      );

      const categoriesWithSubcategories = await Promise.all(
        response.data.categories.map(async (category) => {
          const subcategoriesResponse = await axios.get(
            `https://dratha-creations-t4ls.onrender.com/api/v1/category/get-subcategories/${category._id}`
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

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleUpdateCategory = async (categoryId) => {
    try {
      const response = await axios.put(
        `https://dratha-creations-t4ls.onrender.com/api/v1/category/update-category/${categoryId}`,
        { name: updatedCategoryNames[categoryId] }
      );

      if (response.data.success) {
        // If update is successful, fetch categories again to update the list
        fetchCategories();
        setUpdatedCategoryNames((prevNames) => ({
          ...prevNames,
          [categoryId]: "", // Clear the input field
        }));
        console.log(`Category with ID ${categoryId} updated successfully`);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating category", error);
    }
  };

  const handleUpdateSubcategory = async (categoryId, subcategoryId) => {
    try {
      const response = await axios.put(
        `https://dratha-creations-t4ls.onrender.com/api/v1/category/update-subcategory/${categoryId}/${subcategoryId}`,
        { name: updatedSubcategoryNames[subcategoryId] }
      );

      if (response.data.success) {
        // If update is successful, fetch categories again to update the list
        fetchCategories();
        console.log(
          `Subcategory with ID ${subcategoryId} updated successfully`
        );
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating subcategory", error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(
        `https://dratha-creations-t4ls.onrender.com/api/v1/category/delete-category/${categoryId}`
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

  const handleDeleteSubcategory = async (categoryId, subcategoryId) => {
    try {
      const response = await axios.delete(
        `https://dratha-creations-t4ls.onrender.com/api/v1/category/delete-subcategory/${subcategoryId}`
      );

      if (response.data.success) {
        // If deletion is successful, fetch categories again to update the list
        fetchCategories();
        console.log(
          `Subcategory with ID ${subcategoryId} deleted successfully`
        );
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting subcategory", error);
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
            <div>
              <input
                type="text"
                placeholder="Updated Category Name"
                value={updatedCategoryNames[category._id] || ""}
                onChange={(e) =>
                  setUpdatedCategoryNames((prevNames) => ({
                    ...prevNames,
                    [category._id]: e.target.value,
                  }))
                }
              />
              <button onClick={() => handleUpdateCategory(category._id)}>
                Update Category
              </button>
              <button onClick={() => handleDeleteCategory(category._id)}>
                Delete Category
              </button>
            </div>
            {category.subcategories && category.subcategories.length > 0 && (
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory._id} style={{ fontWeight: "normal" }}>
                    {subcategory.name} (Subcategory)
                    <div>
                      <input
                        type="text"
                        placeholder="Updated Subcategory Name"
                        value={updatedSubcategoryNames[subcategory._id] || ""}
                        onChange={(e) =>
                          setUpdatedSubcategoryNames((prevNames) => ({
                            ...prevNames,
                            [subcategory._id]: e.target.value,
                          }))
                        }
                      />
                      <button
                        onClick={() =>
                          handleUpdateSubcategory(category._id, subcategory._id)
                        }
                      >
                        Update Subcategory
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteSubcategory(category._id, subcategory._id)
                        }
                      >
                        Delete Subcategory
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminPanel;
