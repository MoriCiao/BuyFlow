import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { isSearch } from "../../features/ui/uiSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import HeaderSlide from "./HeaderSlide";
import HeaderPin from "./HeaderPin";

const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { isVisible } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      dispatch(isSearch(false));
    } else {
      dispatch(isSearch(true));
    }
  }, [location.pathname]);

  return (
    <motion.section
      className={`header relative flex min-h-[10vh] w-full flex-col items-center justify-center`}
    >
      <HeaderPin
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleToggle={handleToggle}
      />

      {/* 1024px 以下顯示 */}
      <HeaderSlide
        isOpen={isOpen}
        isAuthenticated={isAuthenticated}
        user={user}
        handleToggle={handleToggle}
      />
    </motion.section>
  );
};

export default Header;
