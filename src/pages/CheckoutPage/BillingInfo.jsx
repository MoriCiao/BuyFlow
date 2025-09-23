const infoLabelMap = {
  name: "姓名",
  email: "電子郵件",
  phone: "電話號碼",
  address: "地址",
  orderID: "訂單編號",
  delivery: "配送方式",
  estimated: "預計送達",
  toAddress: "配送地址",
  freight: "運費",
  totalAmount: "總金額",
  discount: "折扣",
  accountsPayable: "應付帳款",
};

const STYLE = {
  billing_info_container: `billing-Info-container flex flex-1 flex-col gap-4 rounded-xl border border-white/50 bg-zinc-600 p-8 shadow-xl transition duration-300 hover:-translate-y-4`,

  billing_info_content: `billing-info-content flex items-center justify-between border-b border-white/20 py-2`,
};

const BillingInfo = ({ emoji, title, info = {} }) => {
  return (
    <section className={STYLE.billing_info}>
      <div className="flex items-center gap-4">
        <span className="rounded bg-zinc-500 p-1">{emoji}</span>
        <p className="col-span-2 text-[1.15rem]">{title}</p>
      </div>
      {info &&
        Object.entries(info).map(([infoKey, infoValue], index) => {
          return (
            <div key={index} className={STYLE.billing_info_content}>
              <p
                className={` ${infoKey === "accountsPayable" ? "text-[1.25rem] font-bold text-green-600" : ""}`}
              >
                {infoLabelMap[infoKey]}
              </p>
              <p
                className={` ${infoKey === "accountsPayable" ? "text-[1.25rem] font-bold text-green-600" : ""}`}
              >
                {infoValue}
              </p>
            </div>
          );
        })}
    </section>
  );
};

export default BillingInfo;
