import Profile from "../../components/Profile/Profile";
import { useSelector } from "react-redux";

// 會員資料瀏覽

const MenberProfile = () => {
  const { user } = useSelector((state) => state.user);
  const ProfileSVG = (role) => {
    const imgData = {
      menber: "/BuyFlow/user/user-menber.svg",
      staff: "/BuyFlow/user/user-staff.svg",
      admin: "/BuyFlow/user/user-admin.svg",
    };

    return (
      <div className="profile-SVG rounded-full border-4 border-white p-2">
        <img
          className="w-[150px] rounded-full bg-zinc-600"
          src={imgData[role]}
          alt="profile_photo"
        />
      </div>
    );
  };
  return (
    <section className="member-profile flex min-h-[90vh] w-full flex-col items-center justify-start text-white">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md border border-white/50 bg-zinc-800 2xl:w-[50%]">
        <div className="flex min-h-[20vh] w-full flex-col items-center justify-center py-4">
          <h1 className="text-center text-[3rem]">會員資料</h1>
          {ProfileSVG(user.role)}
        </div>
        <Profile title="Menber Profile" userRole="menber" />
      </div>
    </section>
  );
};

export default MenberProfile;
