import React from "react";
import Button from "../Button/Button";

const CartIconOperate = ({
  handleOpen,
  headnleToCheckout,
  totalAmount,
  totalQuatity,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        label={`件數： ${totalQuatity}  件`}
        variant="success_ghost"
        size="sm"
        disabled={true}
      />
      <Button
        label={`總金額： ${totalAmount} $`}
        variant="success_ghost"
        size="sm"
        disabled={true}
      />
      <Button
        label="Go CheckOut"
        variant="success"
        size="sm"
        onClick={() => {
          headnleToCheckout();
          handleOpen();
        }}
      />
    </div>
  );
};

export default CartIconOperate;
