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
  "/BuyFlow/products_image/description-1.svg",
  "/BuyFlow/products_image/description-2.svg",
  "/BuyFlow/products_image/description-3.svg",
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
        <div className="breadcrumb flex items-center gap-2 text-black/70">
          <span
            className="cursor-pointer text-[2rem] select-none"
            onClick={() => {
              navigate("/products");
            }}
          >
            🔙
          </span>
          <div>
            <span> / </span>
            <Link to="/">BuyFlow</Link>
            <span> / </span>
            <Link to="/products">products</Link>
            <span> / </span>
            <span className="flex text-black/50">
              {`${product.name}  ${product.category}  ${product.description}`}
            </span>
          </div>
        </div>

        <div className="justify-center gap-4 px-4 select-none md:flex md:flex-col xl:grid xl:grid-cols-5">
          <div className="md: col-start-1 my-auto h-full w-full py-4 xl:col-span-3">
            <img
              className="max-h-[150px] w-full md:max-h-[300px] xl:max-h-[500px]"
              src={product.image}
              alt="product_img"
            />
          </div>

          <div className="md: relative xl:col-span-2 xl:col-start-4">
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
            <div className="product_price flex items-center gap-4">
              <p>單價 : </p>
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
                  庫存 :
                  <span className="px-2 text-[1.2rem] font-bold text-red-500">
                    {product.stock}
                  </span>
                </p>
              )}
            </div>
            <Hr />
            <div className="checkout_methods">
              <p className="mb-2">結帳方式 :</p>
              <div className="grid grid-cols-4 gap-1 select-none">
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
                        className="rounded-md py-2 text-center"
                      >
                        <span className="">{p}</span>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
            <Hr />
            {/* 最大不可以超過此商品的庫存 */}
            <div className="add-cart flex justify-end gap-2 pr-4">
              <p>請輸入您要購買數量 : </p>
              <input
                type="number"
                step={"1"}
                min={1}
                max={product.stock}
                className="border bg-black/20 text-center text-white"
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
                className="cursor-pointer rounded-md border px-4 select-none"
                onClick={() => {
                  if (isAuthenticated) {
                    (dispatch(addItem({ product, quantity })),
                      navigate("/cart"));
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
        <div className="detail flex flex-col items-center justify-center">
          <h3 className="w-full pb-4 text-start text-[1.5rem] font-bold">
            Details
          </h3>
          <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row">
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
              className="w-[40%]"
              src="/BuyFlow/products_image/description-0.svg"
              alt="des-img"
            />
          </div>
          <Hr />
          {desImg &&
            desImg.map((i, index) => {
              return (
                <div
                  className="flex w-[80%] flex-col items-center justify-center py-8"
                  key={index}
                >
                  <img className="w-full" src={i} alt={`des-${index}`} />
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
