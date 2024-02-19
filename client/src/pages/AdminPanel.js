import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "../components/Navbar/NavBar";
import AdminMenu from "./AdminMenu.js";

const AdminPanel = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the server
        const fetchCategories = async () => {
          try {
            const response = await axios.get('http://localhost:8086/api/v1/category/get-category');
            setCategories(response.data.categories);
          } catch (error) {
            console.error('Error fetching categories', error);
            // Handle errors or show a notification to the user
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
          {/* <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : </h3>
              <h3> Admin Email : </h3>
              <h3> Admin Contact : </h3>
            </div>
          </div> */}
        </div>
      </div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AdminPanel;
