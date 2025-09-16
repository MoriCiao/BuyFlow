import "./_BgImg.scss";

const bg1 = "/BuyFlow/illustration-1.svg";
const bg2 = "/BuyFlow/illustration-2.svg";

const BgImg = () => {
  return (
    <div className="bgImg">
      <img draggable="false" src={bg1} alt="bg1" className="img-right" />
      <img draggable="false" src={bg2} alt="bg2" className="img-left" />
    </div>
  );
};

export default BgImg;
