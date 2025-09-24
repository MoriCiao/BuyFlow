import Button from "../Button/Button";

const CartUpdateTips = ({ items }) => {
  return (
    <div className="cart-update-tips">
      <Button
        label={items.length === 0 ? "無任何商品" : "購物車已更新"}
        variant={items.length === 0 ? "info" : "danger"}
      />
    </div>
  );
};

export default CartUpdateTips;
