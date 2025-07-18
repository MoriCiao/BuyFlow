import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProdouctCard = ({ name, price, image, rating, product }) => {
  return (
    <div className="prodouct-card px-2 rounded-sm">
      <Link to={`/products/${product.id}`}>
        <div className="product-image">
          <img className=" w-[150px] h-[150px]" src={image} alt={name} />
        </div>
        <div className="product-text text-center">
          <p className="item-name text-[1.15rem]">{name}</p>
          <div className="itme-price font-bold text-end pr-4">
            <span>{price} $</span>

            <div
              className={`rating flex items-center justify-center ${
                rating >= 4.5 ? "" : "hidden"
              }`}
            >
              <span className="fire_img">🔥</span>
              <span className="rating-text">{rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProdouctCard;
