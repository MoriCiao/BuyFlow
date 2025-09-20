import React from "react";
import Button from "../Button/Button";

const TrackingOperate = ({ createDate, handleCancel }) => {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <Button label={`${createDate}`} variant="success_ghost" />
      <Button label="聯繫店家" variant="primary" />
      <Button
        label="取消訂單"
        variant="danger"
        onClick={() => {
          if (confirm("確定要將訂單刪除?")) {
            handleCancel();
          }
        }}
      />
    </div>
  );
};

export default TrackingOperate;
