import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductListPage from "../pages/ProductListPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
const AppRoutes = () => {
  return (
    <div className="AppRoutes w-[80%] h-auto border border-red-500 ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* login 才能都入頁面 */}

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
