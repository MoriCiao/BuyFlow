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
        className="profile relative md:grid md:grid-cols-2 sm:flex gap-4 items-center justify-center w-full"
      >
        <div className="w-full h-full flex items-center justify-center md:relative sm:absolute sm:z-0 sm:opacity-50">
          <img
            src={"/BuyFlow/user/user-bg-2.svg"}
            alt="user-bg"
            className="sm:w-[80%] md:w-[100%]"
          />
        </div>
        <Profile title="Staff Profile" userRole={"staff"} />
      </motion.section>
    </AnimatePresence>
  );
};

export default StaffProfile;
