import React from "react";

const TrackingContainer = ({ children }) => {
  return (
    <div className="rounded-md border border-white/50 bg-zinc-700 p-4 hover:bg-zinc-600">
      {children}
    </div>
  );
};

export default TrackingContainer;
