import React from "react";

const desImg = [
  "/BuyFlow/products_image/description-1.svg",
  "/BuyFlow/products_image/description-2.svg",
  "/BuyFlow/products_image/description-3.svg",
];

const STYLE = {
  detail_container: `detail-container flex flex-col items-center justify-center`,

  detail_title: `detail-title w-full pb-4 text-start text-[3rem] font-bold`,

  detail_description: `detail-description mb-4 flex flex-col items-center gap-4 md:flex-row`,

  detail_description_img_container: `detail-description-img-container flex w-full flex-col items-center gap-4 md:flex-row`,
};

const ProductDetil = () => {
  return (
    <div className={STYLE.detail_container}>
      <div className="flex flex-col">
        <h3 className={STYLE.detail_title}>Details</h3>
        <div className={STYLE.detail_description}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            deserunt magnam minima, cum obcaecati praesentium debitis aperiam
            asperiores assumenda perferendis eos maiores cupiditate possimus aut
            atque sunt laboriosam omnis tempora.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            deserunt magnam minima, cum obcaecati praesentium debitis aperiam
            asperiores assumenda perferendis eos maiores cupiditate possimus aut
            atque sunt laboriosam omnis tempora.
          </p>

          <img
            className="w-[40%]"
            src="/BuyFlow/products_image/description-0.svg"
            alt="des-img"
          />
        </div>
      </div>
      <hr className="my-2 w-full opacity-25" />
      <div className={STYLE.detail_description_img_container}>
        {desImg &&
          desImg.map((i, index) => {
            return (
              <div
                key={index}
                className="flex h-auto items-center justify-center overflow-hidden md:w-[50%]"
              >
                <img className="object-cover" src={i} alt={`des-${index}`} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductDetil;
