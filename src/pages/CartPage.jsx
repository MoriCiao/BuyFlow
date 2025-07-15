import { useSelector, useDispatch } from "react-redux";
import {} from "../features/cart/cartSlice";

const CartPage = () => {
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return <div></div>;
};

export default CartPage;
