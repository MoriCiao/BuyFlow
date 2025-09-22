import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useLocation } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
// 員工資料瀏覽

const StaffProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="profile relative h-full w-full"
      >
        <Profile />
      </motion.section>
    </AnimatePresence>
  );
};

export default StaffProfile;
