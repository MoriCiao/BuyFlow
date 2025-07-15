import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <svg>
        <circle cx="70" cy="70" r="70" fill="skyblue" />
      </svg>
      <span>Loading</span>
    </div>
  );
};

export default Loading;
