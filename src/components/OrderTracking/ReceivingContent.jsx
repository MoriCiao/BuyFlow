import React from "react";
const STYLE = {
  contect: `flex justify-between border-b border-white/50`,
};

const ReceivingContent = ({ label, text }) => (
  <div className={STYLE.contect}>
    <p>{label}</p>
    <p>{text}</p>
  </div>
);

export default ReceivingContent;
