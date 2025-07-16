import React from "react";

import RequireAuth from "../components/RequireAuth.jsx";
import RequireRole from "../components/RequireRole.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductListPage from "../pages/ProductListPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import AdminProfile from "../pages/profile/AdminProfile.jsx";
import StaffProfile from "../pages/profile/StaffProfile.jsx";
import MenberProfile from "../pages/profile/MenberProfile.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
const AppRoutes = () => {
  return (
    <div className="AppRoutes w-[80%] h-auto  p-4">
      <Routes>
        <Route path="/" element={<CategoryFilter />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* login 才能進入頁面 */}

        <Route
          path="/menber"
          element={
            // 使用 RequireAuth 驗證，符合 isAuthenticated 時才會顯示<MenberProfile />
            <RequireAuth>
              <MenberProfile />
            </RequireAuth>
          }
        />

        <Route
          path="/staff"
          element={
            // 使用 RequireRole 驗證，符合 role 為 ["staff", "admin"] 時才會顯示<<StaffProfile /> />
            <RequireRole allowRoles={["staff", "admin"]}>
              <StaffProfile />
            </RequireRole>
          }
        />
        <Route
          path="/admin"
          element={
            // 使用 RequireRole 驗證，符合 role 為 admin 時才會顯示<AdminProfile />
            <RequireRole allowRoles={["admin"]}>
              <AdminProfile />
            </RequireRole>
          }
        />

        <Route path="/dashboard" element={<DashBoard />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
