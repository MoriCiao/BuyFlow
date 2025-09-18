import React from "react";
import RequireAuth from "../components/RequireAuth.jsx";
import RequireRole from "../components/RequireRole.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage.jsx";
import ProductListPage from "../pages/ProductListPage/ProductListPage.jsx";
import ProductDetilPage from "../pages/ProductDetilPage/ProductDetilPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import AdminProfile from "../pages/profile/AdminProfile.jsx";
import StaffProfile from "../pages/profile/StaffProfile.jsx";
import MenberProfile from "../pages/profile/MenberProfile.jsx";
import DashBoard from "../pages/dashboard/DashBoard.jsx";
import StaffList from "../pages/Dashboard/StaffList.jsx";
import ProductsList from "../pages/Dashboard/ProductsList.jsx";
import Register from "../pages/Register/Register.jsx";
import MenberList from "../pages/Dashboard/MenberList.jsx";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";
import OrderTracking from "../components/OrderTracking.jsx";
import OrderList from "../pages/Dashboard/OrderList.jsx";
import About from "../pages/About.jsx";
const AppRoutes = () => {
  return (
    <div className="AppRoutes justity-center relative z-10 mt-[10vh] flex w-[100%] items-start sm:w-[80%]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetilPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        {/* login 才能進入頁面 */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/about" element={<About />} />
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
          path="/menber/ordertracking"
          element={
            <RequireAuth>
              <OrderTracking />
            </RequireAuth>
          }
        />
        {/* DashBoard */}
        <Route path="/dashboard" element={<DashBoard />}>
          <Route
            path="staff"
            element={
              // 使用 RequireRole 驗證，符合 role 為 ["staff", "admin"] 時才會顯示<<StaffProfile /> />
              <RequireRole allowRoles={["staff", "admin"]}>
                <StaffProfile />
              </RequireRole>
            }
          />
          <Route
            path="menberlist"
            element={
              <RequireRole allowRoles={["staff", "admin"]}>
                <MenberList />
              </RequireRole>
            }
          />
          <Route
            path="admin"
            element={
              // 使用 RequireRole 驗證，符合 role 為 admin 時才會顯示<AdminProfile />
              <RequireRole allowRoles={["admin"]}>
                <AdminProfile />
              </RequireRole>
            }
          />
          <Route
            path="stafflist"
            element={
              <RequireRole allowRoles={["staff", "admin"]}>
                <StaffList />
              </RequireRole>
            }
          />
          <Route
            path="productslist"
            element={
              <RequireRole allowRoles={["staff", "admin"]}>
                <ProductsList />
              </RequireRole>
            }
          />
          <Route
            path="orderlist"
            element={
              <RequireRole allowRoles={["staff", "admin"]}>
                <OrderList />
              </RequireRole>
            }
          />
        </Route>
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
