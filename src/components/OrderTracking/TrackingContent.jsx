import React from "react";

const TrackingContent = ({ children }) => {
  return (
    <div className="rounded-md border border-white/50 p-4 hover:bg-zinc-800">
      {children}
    </div>
  );
};

export default TrackingContent;
