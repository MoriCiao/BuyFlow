import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useLocation } from "react-router-dom";
import Profile from "../../components/Profile";
// 員工資料瀏覽

const StaffProfile = () => {
  const { user, profile_bg } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="profile relative grid grid-cols-2 gap-4 items-center justify-center "
      >
        <div className="w-full h-full flex items-center justify-center">
          <img src={"/BuyFlow/user/user-bg-2.svg"} alt="user-bg" />
        </div>
        <Profile title="Staff Profile" userRole={"staff"} />
      </motion.section>
    </AnimatePresence>
  );
};

export default StaffProfile;
