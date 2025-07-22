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

const BillingInfo = () => {
  const { user } = useSelector((state) => state.user);

  // const user = {
  //   name: "Mori",
  //   email: "user@example.com",
  //   password: "user123",
  //   role: "menber",
  //   phone: "0932766444",
  //   address: "台南市245號中正路",
  //   image: "/BuyFlow/user/user-menber.svg",
  // };

  const { name, email, image, phone, address } = user;
  return (
    <section className="billing-Info flex flex-col">
      <h3 className="text-[1.15rem] col-span-2">
        <strong>訂購人資訊：</strong>
      </h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex gap-1 m-auto items-center justify-center p-4"
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
      </form>
    </section>
  );
};

export default BillingInfo;
