import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// 加入驗證，目前登入者是否為員工
//
export default function RequireRole({ children, allowRoles = [] }) {
  // 取得state裡的資料
  const { user, isAuthenticated } = useSelector((state) => state.user);

  // 如果未登入，返回登入頁面
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  // 如果已驗證登入，但權限不是員工則返回首頁
  if (!allowRoles.includes(user?.role)) return <Navigate to="/" replace />;

  return children;
}
