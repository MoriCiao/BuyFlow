// Menu Icon
const HeaderIcon = ({ handleToggle }) => {
  return (
    <button
      className="absolute top-0 left-0 cursor-pointer p-4 lg:hidden"
      onClick={handleToggle}
    >
      <img src="/BuyFlow/icon/menu.svg" alt="menu_icon" className="w-full" />
    </button>
  );
};

export default HeaderIcon;
