import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
import DropdownsComponent from "./pages/DropdownsComponent";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/main-content.css";
import NavBar from "./components/Navbar/NavBar";
import AdminPanel from "./pages/AdminPanel";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateSubcategory from "./pages/Admin/CreateSubcategory.js";
import ServiceDetail from "./components/ServiceDetail.js";
import SubServiceDetail from "./components/SubServiceDetail.js";
import TrendDetail from "./components/TrendDetail.js"
import SubTrendDetail from "./components/SubTrendDetail.js"
import EventDetail from "./components/EventDetail.js"
import SubEventDetail from "./components/SubEventDetail.js"
import BirthdayPackages from "./components/BirthdayPackages.js"
import HousewarmingPackages from "./components/HousewarmingPackages.js";
import WeddingPackages from "./components/WeddingPackages.js";

import 'semantic-ui-css/semantic.min.css';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Druthi Creations");

  return (
    <>
      <div className="main-content">
        <Router>
          <NavBar />
          <DropdownsComponent />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-demo" element={<DemoProduct />} />
              <Route path="/admin-panel" element={<AdminPanel />} />
              <Route path="/dashboard/admin/create-category" element={<CreateCategory />} />
              <Route path="/dashboard/admin/create-subcategory" element={<CreateSubcategory />} />
              <Route path="/service/:title" element={<ServiceDetail />} />
              <Route path="/service/:title/:subTitle" element={<SubServiceDetail />} />
              <Route path="/trend/:title" element={<TrendDetail />} />
              <Route path="/trend/:title/:subTitle" element={<SubTrendDetail />} />
              <Route path="/event/:title" element={<EventDetail />} />
              <Route path="/event/:title/:subTitle" element={<SubEventDetail />} />
              <Route path="/birthday-package" element={<BirthdayPackages />} />
              <Route path="/housewarming-package" element={<HousewarmingPackages />} />
              <Route path="/wedding-package" element={<WeddingPackages />} />

            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default App;
