import React from "react";

const About = () => {
  return (
    <section className="about relative z-10 border-4 border-[#333533]/20 rounded-xl w-full xl:max-w-200 md:[75%] p-8 h-full flex flex-col gap-8 items-center justify-start m-auto tracking-widest bg-[#e8eddf] shadow-xl">
      <h1 className="text-[2rem] font-bold text-start">關於 BuyFlow</h1>
      <h3 className="text-[1.25rem] font-[500]">
        BuyFlow，是一個開始，也是一段關於「流暢選擇」的旅程。
      </h3>
      <p className="text-[1.1rem] font-[300]">
        在資訊與選擇爆炸的時代，BuyFlow
        期望為消費者打造一個簡單、順暢、值得信賴的購物流程。
        我們相信，好的購物體驗不只是把商品放入購物車，更是一場從「探索」到「擁有」的流動旅程。
        BuyFlow結合了清晰的介面、貼心的功能與用心挑選的商品，從首頁到結帳，讓每一步都自然直覺、毫不費力。
      </p>
      <div className=" flex flex-col gap-4">
        <h3 className="text-[1.25rem]">我們的特色</h3>
        <h4 className="text-[1.1rem] indent-[1rem]">
          多樣選品：結合 3C、生活、文具與時尚等選物風格
        </h4>
        <h4 className="text-[1.1rem] indent-[1rem]">
          智能流程：以技術驅動購物體驗，減少等待與操作成本
        </h4>
        <h4 className="text-[1.1rem] indent-[1rem]">
          顧客至上：讓每一筆訂單都能順利「Buy」並「Flow」到你手中
        </h4>
      </div>
      <div className=" w-full h-full flex items-center justify-center opacity-50">
        <img src="/BuyFlow/logo.svg" className="w-[50%] " alt="logo" />
      </div>
    </section>
  );
};

export default About;
