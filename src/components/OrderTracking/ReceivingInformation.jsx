const ReceivingInformation = ({ user }) => {
  const STYLE = {
    contect: `flex justify-between border-b border-white/50`,
  };

  const ReceivingContent = ({ label, text }) => (
    <div className={STYLE.contect}>
      <p>{label}</p>
      <p>{text}</p>
    </div>
  );

  const ReceivingContents = () => (
    <div className="flex flex-col items-stretch gap-2">
      <ReceivingContent label="姓名" text={user.name} />
      <ReceivingContent label="電話" text={user.phone} />
      <ReceivingContent label="信箱" text={user.email} />
      <ReceivingContent label="地址" text={user.address} />
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      <p>👤 收件資料</p>

      <ReceivingContents />
    </div>
  );
};

export default ReceivingInformation;
