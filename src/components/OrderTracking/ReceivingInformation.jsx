const ReceivingInformation = ({ user }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>👤 收件資料</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between border-b border-white/50">
          <p>姓名</p>
          <p>{user.name}</p>
        </div>
        <div className="flex justify-between border-b border-white/50">
          <p>電話</p>
          <p>{user.phone}</p>
        </div>
        <div className="flex justify-between border-b border-white/50">
          <p>信箱</p>
          <p>{user.email}</p>
        </div>
        <div className="flex justify-between border-b border-white/50">
          <p>地址</p>
          <p>{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceivingInformation;
