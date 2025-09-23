import Button from "../../../components/Button/Button";
import ReceivingContent from "../../../components/OrderTracking/ReceivingContent";

const STYLE = {
  order_ID: `order-id flex w-full flex-col items-center justify-between gap-4 sm:flex-row`,

  order_items: `order-items flex flex-1 flex-col gap-4 rounded-md bg-zinc-800 p-4`,

  order_item: `order-item flex justify-between gap-4 border-b border-white/50`,

  order_user_info: `order-user-info flex flex-1 flex-col gap-4 rounded-md bg-zinc-800 p-4`,

  order_delivery_info: `order-delivery-info flex flex-1 flex-col justify-items-stretch rounded-md bg-zinc-800 p-4`,
};

const OrderListItem = ({ order }) => {
  const { orderID, items, user, totalAmount, totalQuatity, deliveryPayment } =
    order;
  return (
    <div className="order-list-item flex flex-col gap-4">
      <div className={STYLE.order_ID}>
        <p className="w-full border-b border-white/50 text-[1.25rem]">
          📋 {orderID}
        </p>
      </div>
      <div className="order-content flex flex-col gap-4 2xl:flex-row">
        <div className={STYLE.order_items}>
          <div>
            {items &&
              items.map((i, index) => {
                return (
                  <div key={index} className={STYLE.order_item}>
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
        <div className={STYLE.order_user_info}>
          <ReceivingContent label="訂購人" text={user.name} />
          <ReceivingContent label="電話" text={user.phone} />
          <ReceivingContent label="郵件" text={user.email} />
          <ReceivingContent label="地址" text={user.address} />
        </div>
        <div className={STYLE.order_delivery_info}>
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
