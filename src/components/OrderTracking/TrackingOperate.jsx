import Button from "../Button/Button";

const TrackingOperate = ({ isSend, createDate, handleCancel }) => {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <Button label={`${createDate}`} variant="success_ghost" />

      <Button label="聯繫店家" variant="primary" />

      <Button
        label={isSend ? "訂單已出貨" : "取消訂單"}
        variant={isSend ? "danger_ghost" : "danger"}
        onClick={() => {
          if (isSend) return;
          if (confirm("確定要將訂單刪除?")) {
            handleCancel();
          }
        }}
      />
    </div>
  );
};

export default TrackingOperate;
