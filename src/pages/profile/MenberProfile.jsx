import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Profile from "../../components/Profile";
import Button from "../../components/Button/Button";
// 會員資料瀏覽

const MoionLink = motion.create(Link);

const MenberProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="profile relative w-[100%] justify-center gap-4 sm:flex sm:flex-col sm:items-center sm:py-8 md:grid md:grid-cols-2 md:items-center">
      <div className="col-span-1 col-start-1 flex h-full w-full items-center justify-center sm:absolute sm:z-0 sm:opacity-50 md:flex md:opacity-100">
        <img
          src="/BuyFlow/user/user-bg-2.svg"
          alt="user-bg"
          className="m-auto hidden md:block xl:w-[80%]"
        />
      </div>
      <div className="relative col-span-1 col-start-2 m-auto flex h-full min-w-[300px] flex-col items-center justify-start gap-2 sm:z-1 sm:w-[350px]">
        <Profile title="Menber Profile" userRole="menber">
          {/* 導向訂單追蹤 */}
          <Button
            label="🚚 Order Tracking"
            onClick={() => {
              navigate("/menber/ordertracking");
            }}
          />
          {/* <MoionLink
            initial={{ scale: 1 }}
            whileHover={{
              backgroundColor: "#333533",
              color: "#e8eddf",
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
            to="/menber/ordertracking"
            className="to-whtie/20 mt-2 w-full border bg-gradient-to-br from-white/20 via-white/50 p-2 text-center font-bold underline"
          >
            🚚 Order Tracking
          </MoionLink> */}
        </Profile>
      </div>
    </section>
  );
};

export default MenberProfile;
