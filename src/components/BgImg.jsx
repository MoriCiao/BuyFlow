import React from "react";

const bg1 = "/BuyFlow/illustration-1.svg";
const bg2 = "/BuyFlow/illustration-2.svg";

const BgImg = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-50 select-none">
      <img
        draggable="false"
        src={bg1}
        alt="bg1"
        className="fixed md:w-40 w-20 sm:bottom-15 right-5 top-1/2 rotate-[-20deg]"
      />
      <img
        draggable="false"
        src={bg2}
        alt="bg2"
        className="fixed xl:w-100 md:w-50 w-25 xl:left-5 sm:-left-5 sm:bottom-5 top-1/2 xl:-z-1 md:-z-2 "
      />
    </div>
  );
};

export default BgImg;
