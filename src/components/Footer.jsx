import React, { Fragment } from "react";
// Footer
const logo = "/BuyFlow/logo_w.svg";
const word = "/BuyFlow/footer-2.svg";

const about_items = [
  {
    name: "關於我們",
    icon: "/BuyFlow/icon/information.png",
    link: "#",
  },
  {
    name: "購物資訊",
    icon: "/BuyFlow/icon/buy-button.png",
    link: "#",
  },
  {
    name: "顧客服務",
    icon: "/BuyFlow/icon/customer-service.png",
    link: "#",
  },
  {
    name: "會員資料",
    icon: "/BuyFlow/icon/user.png",
    link: "#",
  },
];
const contact_items = [
  {
    name: "Facebook",
    icon: "/BuyFlow/icon/fb.png",
    link: "https://www.facebook.com/",
  },
  {
    name: "Imstagram",
    icon: "/BuyFlow/icon/instagram.png",
    link: "https://www.instagram.com/",
  },
  {
    name: "Line",
    icon: "/BuyFlow/icon/line.png",
    link: "https://www.line.me/tw/",
  },
  {
    name: "BuyFlow@example.com",
    icon: "/BuyFlow/icon/message.png",
    link: "#",
  },
  {
    name: "0800-123-456",
    icon: "/BuyFlow/icon/telephone.png",
    link: "#",
  },
];

const ContactItem = ({ name, icon, link }) => {
  return (
    <li className="flex gap-2 items-center justify-start select-none">
      <img className="w-5 h-5" src={icon} alt={`${name}_img`} />
      <a href={link}>{name}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <section className="footer flex items-center justify-center w-full h-auto bg-[#333533] text-[#e8eddf]">
      <div className="w-[80%] md:grid md:grid-cols-6 sm:grid sm:grid-cols-2 items-center justify-center">
        {/* Logo */}
        <div className="footer-img h-full md:col-span-3 sm:col-span-2 col-start-1 grid grid-cols-2 items-center justify-center">
          <img className="pl-8 m-auto w-80" src={logo} alt="" />
          <img className="m-auto w-80" src={word} alt="word" />
        </div>
        {/* About Us */}
        <div className="footer-item2 h-full py-4 md:col-start-4">
          <h3 className="text-center text-[1.15rem] mb-2">About Us</h3>
          <ol className="footer-ol flex flex-col gap-4 items-center ">
            {about_items &&
              about_items.map((i, index) => {
                return (
                  <Fragment key={index}>
                    <ContactItem name={i.name} icon={i.icon} link={i.link} />
                  </Fragment>
                );
              })}
          </ol>
        </div>
        {/*  Contact Us */}
        <div className="Contact  h-full py-4 md:col-start-5 md:col-span-2 flex flex-col items-center w-[15rem]">
          <h3 className="text-center text-[1.15rem] mb-2 w-full">Contact us</h3>
          <ol className="footer-ol flex  flex-col gap-2 items-start  text-[1rem] ">
            {contact_items &&
              contact_items.map((i, index) => {
                return (
                  <Fragment key={index}>
                    <ContactItem name={i.name} icon={i.icon} link={i.link} />
                  </Fragment>
                );
              })}
          </ol>
        </div>
        <p className="md:col-span-6 sm:col-span-2 text-center border-t py-2">
          © 2025 BuyFlow. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
