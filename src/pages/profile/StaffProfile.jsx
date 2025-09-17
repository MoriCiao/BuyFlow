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
        className="profile relative w-full items-center justify-center gap-4 sm:flex md:grid md:grid-cols-2"
      >
        <div className="flex h-full w-full items-center justify-center sm:absolute sm:z-0 sm:opacity-50 md:relative">
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
