import React, { useState } from "react";
import { addItem } from "../../features/cart/cartSlice";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const STYLE = {
  detil_card_img: `detil-card-img m-auto max-w-[50%] rounded-xl border border-white/50 bg-zinc-800 p-10 lg:max-w-[80%]`,

  detil_card_content: `detil-card-content flex flex-2 flex-col justify-between text-end xl:flex-1`,

  detil_card_title: `detil-card-title w-full text-[1.25rem] font-bold md:text-[2rem] md:text-[3rem]`,

  detil_card_input: `detil-card-input min-w-20 border bg-black/20 py-1 text-center text-white`,
};

const DetilCard = ({ product }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="detil-card-container flex flex-col gap-4 lg:flex-row">
      <div className="flex-1">
        <img
          src={product.image}
          alt="product_img"
          className={STYLE.detil_card_img}
        />
      </div>
      <div className={STYLE.detil_card_content}>
        <div className="flex flex-col gap-4">
          {/* product name */}
          <h3 className={STYLE.detil_card_title}>
            {product.category} - {product.name}
          </h3>

          {/* description */}
          <div className="detil-card-desctipt flex justify-end gap-2">
            <p className="max-w-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              fugiat dolorem fuga porro quos. Distinctio excepturi dolorem optio
              dolor maiores. Atque dolorum blanditiis optio exercitationem nulla
              nesciunt itaque incidunt non!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-4">
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

            {/* Price */}
            <div className="product_price flex items-center gap-4">
              <p>單價 : </p>
              <span className="text-[1.2rem] font-bold text-red-500">
                {product.price} $
              </span>
            </div>
          </div>
          {/* 最大不可以超過此商品的庫存 */}
          <div className="add-cart flex items-center justify-end gap-2">
            <p>請輸入您要購買數量 : </p>
            <input
              type="number"
              step={"1"}
              min={1}
              max={product.stock}
              className={STYLE.detil_card_input}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <div>
              <Button
                label="Add"
                size="sm"
                onClick={() => {
                  if (isAuthenticated) {
                    (dispatch(addItem({ product, quantity })),
                      navigate("/cart"));
                  } else {
                    alert("請先登入再繼續購物...");
                    navigate("/login");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetilCard;
