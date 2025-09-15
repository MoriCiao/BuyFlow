import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Profile from "../../components/Profile";
// 會員資料瀏覽

const MoionLink = motion.create(Link);

const MenberProfile = () => {
  return (
    <section className="profile relative w-[100%] md:grid md:grid-cols-2 sm:flex sm:flex-col sm:py-8 gap-4 md:items-center sm:items-center justify-center">
      <div className="col-start-1 col-span-1 w-full h-full flex items-center justify-center md:flex md:opacity-100 sm:absolute sm:z-0 sm:opacity-50">
        <img
          src="/BuyFlow/user/user-bg-2.svg"
          alt="user-bg"
          className="xl:w-[80%] m-auto md:block hidden"
        />
      </div>
      <div className="col-start-2 col-span-1 flex flex-col items-center justify-start m-auto h-full sm:w-[350px]  min-w-[300px] relative sm:z-1">
        <Profile title="Menber Profile" userRole="menber">
          {/* 導向訂單追蹤 */}
          <MoionLink
            initial={{ scale: 1 }}
            whileHover={{
              backgroundColor: "#333533",
              color: "#e8eddf",
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
            to="/menber/ordertracking"
            className="p-2 mt-2 font-bold text-center underline border w-full bg-gradient-to-br from-white/20 via-white/50 to-whtie/20"
          >
            🚚 Order Tracking
          </MoionLink>
        </Profile>
      </div>
    </section>
  );
};

export default MenberProfile;
