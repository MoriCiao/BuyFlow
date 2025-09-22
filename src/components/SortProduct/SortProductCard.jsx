import React from "react";
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

const STYLE = {
  sort_product_card: `sort-product-card group flex flex-1 cursor-pointer flex-col rounded-xl border border-white/50 bg-zinc-800 p-4 shadow-lg transition duration-300 hover:-translate-y-2 lg:p-8`,

  sort_product_icon_container: `sort-product-icon-container h-1/2 h-full w-full text-center text-[5rem]`,

  sort_product_content: `sort-product-content flex h-1/2 flex-col items-center justify-center gap-2 lg:gap-4`,
};

const SortProductCard = ({ sortkey, value }) => {
  return (
    <div className={STYLE.sort_product_card}>
      <div className={STYLE.sort_product_icon_container}>
        {ChoiceImg(sortkey)}
      </div>
      <div className={STYLE.sort_product_content}>
        <h3 className="text-[1.5rem] font-bold lg:text-[2rem]">{sortkey}</h3>
        <p>{value} 件商品</p>
      </div>
    </div>
  );
};

export default SortProductCard;
