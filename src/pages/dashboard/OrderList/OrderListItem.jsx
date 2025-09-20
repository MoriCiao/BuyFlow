import Button from "../../../components/Button/Button";

const OrderListItem = ({ order }) => {
  const { orderID, items, user, totalAmount, totalQuatity, deliveryPayment } =
    order;
  return (
    <div className="order-list-item flex flex-col gap-4">
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="w-full border-b border-white/50 text-[1.25rem]">
          📋 {orderID}
        </p>
      </div>
      <div className="flex flex-col gap-4 2xl:flex-row">
        <div className="flex flex-1 flex-col gap-4 rounded-md bg-zinc-800 p-4">
          <div>
            {items &&
              items.map((i) => {
                return (
                  <div className="flex justify-between gap-4 border-b border-white/50">
                    <p>ID：{i.id}</p>
                    <p>
                      {i.category} {i.name}
                    </p>
                    <p>X {i.quantity}</p>
                    <p>* {i.price} $</p>
                  </div>
                );
              })}
          </div>
          <div>
            <Button
              label={`${totalQuatity} 件`}
              variant="success_ghost"
              disabled={true}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-md bg-zinc-800 p-4">
          <div className="flex justify-between border-b border-white/50">
            <p>訂購人：</p>
            <p>{user.name}</p>
          </div>
          <div className="flex justify-between border-b border-white/50">
            <p>電話：</p>
            <p>{user.phone}</p>
          </div>
          <div className="flex justify-between border-b border-white/50">
            <p>郵件：</p>
            <p>{user.email}</p>
          </div>
          <div className="flex justify-between border-b border-white/50">
            <p>地址：</p>
            <p>{user.address}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-items-stretch rounded-md bg-zinc-800 p-4">
          <div className="flex flex-1 items-center">
            <Button
              label={deliveryPayment.delivery}
              variant="success_ghost"
              disabled={true}
            />
          </div>
          <div className="flex flex-1 items-center">
            <Button
              label={deliveryPayment.payment}
              variant="success_ghost"
              disabled={true}
            />
          </div>
          <div className="flex flex-1 items-center">
            <Button
              label={`
              ${totalAmount + (deliveryPayment.delivery === "超商配送" ? 60 : 0)} 
            (${deliveryPayment.delivery === "超商配送" ? "+60" : "0"}$)`}
              variant="info"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListItem;
