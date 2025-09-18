import React from "react";

//

const SortProductCard = ({ sortkey, value }) => {
  function ChoiceImg(sortKey) {
    if (sortKey === "服飾") return "👔";
    if (sortKey === "3C") return "📱";
    if (sortKey === "配件") return "🎒";
    if (sortKey === "生活用品") return "💡";
    if (sortKey === "文具") return "✏️";
  }
  return (
    <div className="group flex min-h-[200px] min-w-[200px] flex-1 cursor-pointer flex-col rounded-xl border border-white/50 bg-zinc-800 p-8 shadow-lg transition duration-300 hover:-translate-y-2">
      <div className="h-1/2 h-full w-full text-center text-[5rem]">
        {ChoiceImg(sortkey)}
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center gap-4">
        <h3 className="text-[2rem] font-bold">{sortkey}</h3>
        <p>{value} 件商品</p>
      </div>
    </div>
  );
};

export default SortProductCard;
