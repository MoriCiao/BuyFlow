import React from "react";

//

function ChoiceImg(sortKey) {
  switch (sortKey) {
    case "服飾":
      return "👔";
    case "3C":
      return "📱";
    case "配件":
      return "🎒";
    case "生活用品":
      return "💡";
    case "文具":
      return "✏️";
    default:
      return "❓";
  }
}

const SortProductCard = ({ sortkey, value }) => {
  return (
    <div className="sort-product-card group flex flex-1 cursor-pointer flex-col rounded-xl border border-white/50 bg-zinc-800 p-4 shadow-lg transition duration-300 hover:-translate-y-2 lg:p-8">
      <div className="h-1/2 h-full w-full text-center text-[5rem]">
        {ChoiceImg(sortkey)}
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center gap-2 lg:gap-4">
        <h3 className="text-[1.5rem] font-bold lg:text-[2rem]">{sortkey}</h3>
        <p>{value} 件商品</p>
      </div>
    </div>
  );
};

export default SortProductCard;
