import "./_ProductCard.scss";
import { Link } from "react-router-dom";

const ProdouctCard = ({ name, price, image, rating, product }) => {
  return (
    <div className="prodouct-card">
      <Link to={`/products/${product.id}`}>
        <div className="product-image">
          <img className="" draggable="false" src={image} alt={name} />
        </div>
        <div className="product-text">
          <p className="item-name">{name}</p>
          <div className="itme-price">
            <span>{price} $</span>

            <div
              className={`rating flex items-center justify-center select-none ${
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
