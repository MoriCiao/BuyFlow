import React from "react";
import { useSelector } from "react-redux";
// 將購物車確認的商品導入CheckoutPage結帳頁面
// 商品、總件數、總金額
// 使否有優惠券
// 配送選項、配送地址
// 付款方式
const CheckoutPage = () => {
  const { items } = useSelector((state) => state.cart);
  return <div>CheckoutPage</div>;
};

export default CheckoutPage;
