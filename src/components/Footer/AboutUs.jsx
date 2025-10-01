import FooterItem from "./FootenItem";
const about_items = [
  {
    name: "關於我們",
    icon: "/BuyFlow/icon/information.png",
    link: "#",
  },
  {
    name: "購物資訊",
    icon: "/BuyFlow/icon/buy-button.png",
    link: "#",
  },
  {
    name: "顧客服務",
    icon: "/BuyFlow/icon/customer-service.png",
    link: "#",
  },
  {
    name: "會員資料",
    icon: "/BuyFlow/icon/user.png",
    link: "/BuyFlow/menber",
  },
];

const AboutUs = () => {
  return (
    <div className="about">
      <h3 className="">About Us</h3>
      <ol className="footer-ol">
        {about_items &&
          about_items.map((i, index) => {
            return (
              <FooterItem
                key={index}
                name={i.name}
                icon={i.icon}
                link={i.link}
              />
            );
          })}
      </ol>
    </div>
  );
};

export default AboutUs;
