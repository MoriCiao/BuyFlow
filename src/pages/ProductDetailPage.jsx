import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { addItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
const Hr = () => <hr className="my-2 w-full opacity-25" />;

const howToPay = [
  "信用卡",
  "無卡分期",
  "貨到付款",
  "行動支付",
  "超商付款",
  "ATM銀聯卡",
];

const desImg = [
  "/BuyFlow/public/products_image/description-1.svg",
  "/BuyFlow/public/products_image/description-2.svg",
  "/BuyFlow/public/products_image/description-3.svg",
];

// 商品被點擊後，會顯示action.payload商品資訊
const ProductDetailPage = () => {
  const { products } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => String(p.id) === String(id));
  const descriptions = product.description.split("，");
  if (!product) {
    return <p>The product you are looking for does not exist</p>;
  }

  return (
    <section className="product-detail">
      <div className="flex flex-col gap-4">
        {/* breadcrumb */}
        <div className="breadcrumb flex gap-2 text-black/70">
          <span
            className="text-[2rem] cursor-pointer select-none"
            onClick={() => {
              navigate("/products");
            }}
          >
            🔙
          </span>
          <span>/</span>
          <Link to="/">BuyFlow</Link>
          <span>/</span>
          <Link to="/products">products</Link>
          <span>/</span>
          <span className="flex text-black/50">
            {`${product.name}  ${product.category}  ${product.description}`}
          </span>
        </div>

        <div className="xl:grid xl:grid-cols-5 md:flex md:flex-col gap-4 justify-center px-4">
          <div className="w-full h-full  py-4 xl:col-span-3 md: col-start-1 my-auto">
            <img
              className="w-full xl:max-h-[500px] md:max-h-[300px]"
              src={product.image}
              alt="product_img"
            />
          </div>

          <div className="relative xl:col-span-2 md: xl:col-start-4 md: py-4">
            {/* id */}
            <p className="absolute top-0 right-0 border border-black/20 px-4 text-black/50">
              商品編號：{product.id}
            </p>
            {/* product name */}
            <h3 className="product_name !text-[1.5rem] font-bold">
              {product.category} - {product.name}
            </h3>
            <Hr />
            {/* description */}
            <div className="product_desctipt flex flex-col gap-2">
              {descriptions &&
                descriptions.map((d, index) => {
                  return <p key={index}>{d}</p>;
                })}
            </div>
            <Hr />
            {/* Price */}
            <div className="product_price flex gap-4 items-center">
              <p>Price : </p>
              <span className="!text-[1.5rem] font-bold text-red-500">
                {product.price} $
              </span>
            </div>
            <Hr />
            <div className="product_stcok">
              {product.stock <= 0 ? (
                <p>庫存為 0 缺貨中...</p>
              ) : (
                <p>
                  Stock :
                  <span className="text-[1.2rem] font-bold text-red-500 px-2 ">
                    {product.stock}
                  </span>
                </p>
              )}
            </div>
            <Hr />
            <div className="checkout_methods">
              <p className="mb-2">Checkout Methods :</p>
              <div className=" grid grid-cols-4 gap-1 select-none ">
                {howToPay &&
                  howToPay.map((p, index) => {
                    return (
                      <motion.div
                        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                        whileHover={{
                          backgroundColor: "#333533",
                          color: "#e8eddf",
                        }}
                        transition={{ duration: 0.5 }}
                        key={index}
                        className="py-2 text-center rounded-md"
                      >
                        <span className="">{p}</span>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
            <Hr />
            {/* 最大不可以超過此商品的庫存 */}
            <div className="add-cart flex gap-2 justify-end pr-4">
              <p>請輸入您要購買數量 : </p>
              <input
                type="number"
                step={"1"}
                min={1}
                max={product.stock}
                className="border bg-black/20 text-white text-center"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <motion.button
                initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                whileHover={{
                  backgroundColor: "#333533",
                  color: "#e8eddf",
                }}
                transition={{ duration: 0.5 }}
                className="border px-4 rounded-md select-none cursor-pointer"
                onClick={() => {
                  if (isAuthenticated) {
                    dispatch(addItem({ product, quantity })), navigate("/cart");
                  } else {
                    alert("請先登入再繼續購物...");
                    navigate("/login");
                  }
                }}
              >
                Add
              </motion.button>
            </div>
          </div>
        </div>
        <Hr />
        <div className="detail">
          <h3 className="text-[1.5rem] font-bold">Details</h3>
          <div className="flex gap-4 mb-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus deserunt magnam minima, cum obcaecati praesentium
              debitis aperiam asperiores assumenda perferendis eos maiores
              cupiditate possimus aut atque sunt laboriosam omnis tempora.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus deserunt magnam minima, cum obcaecati praesentium
              debitis aperiam asperiores assumenda perferendis eos maiores
              cupiditate possimus aut atque sunt laboriosam omnis tempora.
            </p>

            <img
              className="w-[40%] "
              src="/BuyFlow/public/products_image/description-0.svg"
              alt="des-img"
            />
          </div>
          <Hr />
          {desImg &&
            desImg.map((i, index) => {
              return (
                <div className="w-full py-8" key={index}>
                  <img className="w-full " src={i} alt={`des-${index}`} />
                  <Hr />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
