import React, { Fragment } from "react";
import "./_Footer.scss";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
// Footer
const logo = "/BuyFlow/logo_w.svg";
const word = "/BuyFlow/footer-2.svg";

const about_items = [
  {
    name: "關於我們",
    icon: "/BuyFlow/icon/information.png",
    link: "/BuyFlow/about",
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
    link: "/BuyFlow/menber",
  },
];

const ContactItem = ({ name, icon, link }) => {
  return (
    <li className="">
      <img className="h-5 w-5" src={icon} alt={`${name}_img`} />
      <a href={link}>{name}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-img">
          <img className="m-auto w-80 pl-8" src={logo} alt="" />
        </div>

        <div className="footer-content">
          {/* About Us */}
          <AboutUs />
          {/*  Contact Us */}
          <Contact />
        </div>
      </div>
      <p className="w-full border-t py-2 text-center sm:col-span-2 md:col-span-6">
        © 2025 BuyFlow. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
