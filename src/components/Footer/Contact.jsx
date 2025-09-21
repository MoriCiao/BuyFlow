import FooterItem from "./FootenItem";

const contact_items = [
  {
    name: "Facebook",
    icon: "/BuyFlow/icon/fb.png",
    link: "https://www.facebook.com/",
  },
  {
    name: "Imstagram",
    icon: "/BuyFlow/icon/instagram.png",
    link: "https://www.instagram.com/",
  },
  {
    name: "Line",
    icon: "/BuyFlow/icon/line.png",
    link: "https://www.line.me/tw/",
  },
  {
    name: "BuyFlow@example.com",
    icon: "/BuyFlow/icon/message.png",
    link: "#",
  },
  {
    name: "0800-123-456",
    icon: "/BuyFlow/icon/telephone.png",
    link: "#",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="">Contact us</h3>
      <ol className="footer-ol">
        {contact_items &&
          contact_items.map((i, index) => {
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

export default Contact;
