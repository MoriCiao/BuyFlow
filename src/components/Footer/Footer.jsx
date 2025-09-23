import React, { Fragment } from "react";
import "./_Footer.scss";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
// Footer
const logo = "/BuyFlow/logo_w.svg";

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
