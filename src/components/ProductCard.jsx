import React from "react";

const ProdouctCard = ({ name, price, image, rating }) => {
  return (
    <div className="prodouct-card">
      <div className="product-image">
        <img className=" w-[180px] h-[180px]" src={image} alt={name} />
      </div>
      <div className="product-text text-center">
        <p className="item-name text-[1.15rem]">{name}</p>
        <div className="itme-price font-bold text-end pr-4">
          <span>{price} $</span>

          <div
            className={`rating flex items-center justify-center ${
              rating > 4.5 ? "" : "hidden"
            }`}
          >
            <span className="fire_img">🔥</span>
            <span className="rating-text">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdouctCard;
