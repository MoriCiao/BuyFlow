import React from "react";
// Footer
const Footer = () => {
  return (
    <section className="footer flex items-center justify-center w-full h-auto bg-[#333533] text-[#e8eddf]">
      <div className="w-[80%] grid grid-cols-6  border-x">
        <div className=""></div>
        <div className="footer-item1 border-x h-auto py-4 col-span-2 col-start-2 px-4">
          <img className="contrast-[0%]" src="./logo.svg" alt="" />
          <h3 className="text-center mt-4 text-[24px]">用心追，隨心買。</h3>
        </div>

        <div className="footer-item2 border-x h-auto py-4 col-start-4">
          <ol className="footer-ol flex flex-col gap-4 items-center ">
            <li>
              <a href="#">購物資訊</a>
            </li>
            <li>
              <a href="#">顧客服務</a>
            </li>
            <li>
              <a href="#">會員資料</a>
            </li>
          </ol>
        </div>
        <div className="footer-item3 border-x h-auto py-4 col-start-5">
          <h3 className="text-center text-[1.5rem] mb-4">Contact Us</h3>
          <ol className="footer-ol flex flex-col gap-4 items-center text-[1.1rem]">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Imstagram</a>
            </li>
            <li>
              <a href="#">Line</a>
            </li>
            <li>
              <span>BuyFlow@example.com</span>
            </li>
            <li>tel: 0800-123-456</li>
          </ol>
        </div>
        <div className="h-auto py-4 col-start-6"></div>
        <p className="col-span-6 text-center border-t">
          © 2025 BuyFlow. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
