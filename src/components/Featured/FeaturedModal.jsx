import React from "react";
import DetilCard from "../../pages/ProductDetilPage/DetilCard";
import { Zoom } from "react-awesome-reveal";

const FeaturedModal = ({ isFeaturedModal, setIsFeaturedModal }) => {
  return (
    <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center bg-black/50 p-20">
      <Zoom className="flex items-center justify-center">
        <div className="flex w-[60%] flex-col items-center justify-center rounded-xl border border-white/50 bg-zinc-800">
          <div className="w-full p-2 text-end">
            <span
              className="cursor-pointer"
              onClick={() => setIsFeaturedModal({ open: false, product: null })}
            >
              ❌
            </span>
          </div>
          {isFeaturedModal.product && (
            <DetilCard product={isFeaturedModal.product} />
          )}
        </div>
      </Zoom>
    </div>
  );
};

export default FeaturedModal;
