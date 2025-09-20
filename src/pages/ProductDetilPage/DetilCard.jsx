import React, { useState } from "react";
import { addItem } from "../../features/cart/cartSlice";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DetilCard = ({ product }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-y-auto p-4 md:flex-row md:gap-10 md:p-8">
      {/* img */}
      <div className="min-w-50 flex-1 rounded-md border bg-white/50 p-10">
        <img className="" src={product.image} alt="product_img" />
      </div>
      {/* context */}
      <div className="mt-0 flex flex-2 flex-col items-end justify-between gap-4 text-end lg:mt-0">
        <div className="flex flex-1 flex-col items-end gap-4">
          {/* product name */}
          <h3 className="product_name text-[1.25rem] font-bold md:text-[2rem] md:text-[3rem]">
            {product.category} - {product.name}
          </h3>

          {/* description */}
          <div className="product_desctipt flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              fugiat dolorem fuga porro quos. Distinctio excepturi dolorem optio
              dolor maiores. Atque dolorum blanditiis optio exercitationem nulla
              nesciunt itaque incidunt non!
            </p>
            {/* {descriptions &&
              descriptions.map((d, index) => {
                return <p key={index}>{d}</p>;
              })} */}
          </div>
        </div>

        <div className="flex flex-col items-end gap-8">
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
              className="min-w-20 border bg-black/20 py-1 text-center text-white"
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
