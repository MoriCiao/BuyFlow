import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanCart } from "../../features/cart/cartSlice";
import Button from "../../components/Button/Button";
const STYLE = {
  cart_footer: `cart-footer flex w-full flex-col justify-around gap-4 py-1 px-4 md:flex-row xl:w-full`,
};

const CartFooter = ({ totalAmount, totalQuatity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={STYLE.cart_footer}>
      <Button
        label="◀ Shopping"
        onClick={() => {
          navigate("/products");
        }}
      />
      <Button
        label="CleanCart"
        variant="danger"
        onClick={() => {
          if (confirm("確定要刪除購物車內所有商品?")) {
            dispatch(cleanCart());
          }
        }}
      />
      <Button
        label={`${totalQuatity ?? 0} 件`}
        variant="success_ghost"
        disabled={true}
      />
      <Button
        label={` ${totalAmount ?? 0} $`}
        variant="success_ghost"
        disabled={true}
      />
    </div>
  );
};

export default CartFooter;
