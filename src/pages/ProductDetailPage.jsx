import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { addItem } from "../features/cart/cartSlice";

const Hr = () => <hr className="my-2 w-full opacity-25" />;

const Radio = ({ name }) => {
  return (
    <div className="flex gap-1">
      <input id={name} name={name} type="radio" />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

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
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((p) => String(p.id) === String(id));
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const descriptions = product.description.split("，");

  if (!product) {
    return <p>The product you are looking for does not exist</p>;
  }

  return (
    <section className="product-detail">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-5 gap-4 justify-center px-4">
          <img
            className="w-full max-h-[500px] py-4 col-span-3 col-start-1 my-auto"
            src={product.image}
            alt="product_img"
          />
          <div className="relative col-span-2 col-start-4 py-4">
            <p className="absolute top-0 right-0 border border-black/20 px-4 text-black/50">
              商品編號：{product.id}
            </p>
            <h3 className="text-[1.15rem] font-bold">
              {product.category} - {product.name}
            </h3>
            <Hr />
            <div className="desctipt flex flex-col gap-2">
              {descriptions &&
                descriptions.map((d, index) => {
                  return <p key={index}>{d}</p>;
                })}
            </div>
            <Hr />
            <div>
              <p>Price : </p>
              <span className="text-[1.1rem] font-bold text-red-500">
                {product.price} $
              </span>
            </div>
            <Hr />
            <div>
              {product.stock <= 0 ? (
                <p>庫存為 0 缺貨中...</p>
              ) : (
                <p>
                  目前庫存有
                  <span className="text-[1.2rem] font-bold text-red-500 px-2 ">
                    {product.stock}
                  </span>{" "}
                  個
                </p>
              )}
            </div>
            <Hr />
            <div>
              <p className="mb-2">結帳方式 : </p>
              <div className="how-to-pay grid grid-cols-4 gap-2 select-none ">
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
            <div>
              <p>配送方式</p>
              <div className="radio-group flex gap-2">
                <Radio name={"廠商宅配"} />
                <Radio name={"超商配送"} />
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
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
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
                  dispatch(addItem({ product, amount })), navigate("/cart");
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
