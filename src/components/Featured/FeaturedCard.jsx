const FeaturedCard = ({
  src = "/BuyFlow/products_image/items_box.svg",
  alt = "精選商品",
  title,
  price,
  description,
  children,
}) => {
  return (
    <div className="group flex h-150 flex-col overflow-hidden rounded-lg border border-white/50 shadow-lg transition duration-300 hover:-translate-y-2">
      <div className="flex h-1/2 w-full items-center justify-center bg-white/50">
        <img
          src={src}
          alt={alt}
          className="bject-contain h-full w-full p-8 transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="items-between flex h-1/2 flex-col justify-between gap-4 bg-zinc-800 p-8">
        <h4 className="text-[1.5rem]">{title}</h4>
        <h4 className="text-[1.5rem]">{price} $</h4>
        <p>{description}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
