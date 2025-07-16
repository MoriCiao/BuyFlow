import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// 驗證區塊：驗證目前是否為Login
export default function RequireAuth({ children }) {
  const { isAuthenticated } = useSelector((state) => state.user);

  // 如果沒有登入，則被返回登入頁面
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
