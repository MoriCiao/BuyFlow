import React from "react";
import { useSelector } from "react-redux";

const BillingLabel = ({ label, name, userDetail }) => {
  return (
    <div className="flex gap-4">
      <label htmlFor="" className="w-25 pr-2 text-end">
        {label} :
      </label>
      <p className={`${name}`}>{userDetail}</p>
      <hr />
    </div>
  );
};

const BillingInput = ({ label, name, type, pattern, title }) => {
  return (
    <div className="flex gap-4">
      <label htmlFor="" className="w-25 pr-2 text-end">
        {label} :
      </label>
      <input
        className="bg-white"
        required={true}
        type={type}
        name={name}
        pattern={type === "tel" ? pattern : undefined}
        title={type === "tel" ? title : undefined}
      />

      <hr />
    </div>
  );
};

const BillingInfo = ({ emoji, title, info = {} }) => {
  const { user } = useSelector((state) => state.user);
  const { name, email, image, phone, address } = user;
  return (
    <section className="billing-Info flex aspect-square flex-1 flex-col rounded-xl border bg-zinc-600 p-8">
      <div className="flex items-center gap-4">
        <span className="rounded bg-zinc-500 p-1">{emoji}</span>
        <p className="col-span-2 text-[1.15rem]">{title}</p>
      </div>
      <div>
        {info &&
          Object.entries(info).map(([infoKey, infoValue], index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between border-b border-white/20 py-4"
              >
                <p>{infoKey}</p>
                <p>{infoValue}</p>
              </div>
            );
          })}
      </div>
      {/* <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="m-auto flex flex-col items-center justify-center gap-4 p-4 sm:gap-1 md:flex-row"
      >
        <img src={image} className="w-30" alt="" />
        <div className="flex flex-col gap-2">
          <BillingLabel label="Name" name="name" userDetail={name} />
          <BillingLabel label="Email" name="email" userDetail={email} />
          {phone ? (
            <BillingLabel label="Phone" name="phone" userDetail={phone} />
          ) : (
            <BillingInput
              label="Phone"
              name="Phone"
              type="tel"
              pattern={/^09\d{8}/}
              title="請您輸入有效號碼..."
            />
          )}
          {address ? (
            <BillingLabel label="Address" name="address" userDetail={address} />
          ) : (
            <BillingInput label="Address" name="address" type="text" />
          )}
        </div>
      </form> */}
    </section>
  );
};

export default BillingInfo;
