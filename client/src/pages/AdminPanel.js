import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/Navbar/NavBar";
import AdminMenu from "./AdminMenu.js";

const AdminPanel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the server
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

    fetchCategories();
  }, []);

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
        {" "}
        {/* Center the heading */}
        <h2>Categories and Subcategories:</h2>
      </div>{" "}
      <ul>
        {categories.map((category) => (
          <li key={category._id} style={{ fontWeight: "bold" }}>
            {category.name} (Category)
            {category.subcategories && category.subcategories.length > 0 && (
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory._id} style={{ fontWeight: "normal" }}>
                    {subcategory.name} (Subcategory)
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
