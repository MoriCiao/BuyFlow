import ReceivingContent from "./ReceivingContent";

const ReceivingInformation = ({ user }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>👤 收件資料</p>

      <div className="flex flex-col items-stretch gap-2">
        <ReceivingContent label="姓名" text={user.name} />
        <ReceivingContent label="電話" text={user.phone} />
        <ReceivingContent label="信箱" text={user.email} />
        <ReceivingContent label="地址" text={user.address} />
      </div>
    </div>
  );
};

export default ReceivingInformation;
