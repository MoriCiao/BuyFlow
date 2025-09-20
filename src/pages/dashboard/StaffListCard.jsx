const img = {
  staff: "/BuyFlow/user/user-staff.svg",
  admin: "/BuyFlow/user/user-admin.svg",
};

const StaffListCard = ({ user }) => {
  return (
    <div className="staff-list-card justify-cneter flex w-full flex-col items-center gap-4 rounded-md border border-white/50 bg-zinc-600 p-4">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border p-2">
        <img
          src={user.role === "staff" ? img.staff : img.admin}
          alt="userImg"
          className="m-auto rounded-full bg-white/50"
        />
      </div>
      <div className="user-data flex flex-col items-center justify-center text-center">
        <p className="text-[1.25rem] font-bold">{user.role.toUpperCase()}</p>
        <p>{user.name}</p>
        <p className="w-full break-all">{user.email}</p>
      </div>
    </div>
  );
};

export default StaffListCard;
