import React from "react";
import RequireAuth from "../components/RequireAuth.jsx";
import RequireRole from "../components/RequireRole.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage.jsx";
import ProductListPage from "../pages/ProductListPage/ProductListPage.jsx";
import ProductDetilPage from "../pages/ProductDetilPage/ProductDetilPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import StaffProfile from "../pages/Profile/StaffProfile.jsx";
import MemberProfile from "../pages/Profile/MemberProfile.jsx";
import DashBoard from "../pages/dashboard/DashBoard.jsx";
import StaffList from "../pages/Dashboard/StaffList.jsx";
import ProductsList from "../pages/Dashboard/ProductsList.jsx";
import MemberList from "../pages/Dashboard/MemberList.jsx";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";
import OrderTracking from "../components/OrderTracking/OrderTracking.jsx";
import OrderList from "../pages/Dashboard/OrderList/OrderList.jsx";
import Page404 from "../pages/Page404/Page404.jsx";
const AppRoutes = () => {
  return (
    <div className="AppRoutes justity-center relative z-10 mt-[10vh] flex min-h-[70vh] w-[100%] items-start overflow-y-auto sm:w-[80%]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetilPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* login 才能進入頁面 */}
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout/success"
          element={
            <RequireAuth>
              <CheckoutSuccess />
            </RequireAuth>
          }
        />
        <Route
          path="/menber"
          element={
            <RequireAuth>
              <MemberProfile />
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
                <MemberList />
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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
