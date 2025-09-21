import React from "react";

const FooterItem = ({ name, icon, link }) => {
  return (
    <li className="">
      <img className="h-5 w-5" src={icon} alt={`${name}_img`} />
      <a href={link}>{name}</a>
    </li>
  );
};

export default FooterItem;
