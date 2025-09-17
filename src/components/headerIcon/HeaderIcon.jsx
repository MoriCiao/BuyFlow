import "./_HeaderIcon.scss";

const HeaderIcon = ({ isOpen, handleToggle }) => {
  return (
    <section className="header-icon">
      {/* Menu Icon */}
      <button onClick={handleToggle}>
        <div
          className={`border border-[#e8eddf] ${
            isOpen ? "border-2 border-yellow-500/50" : ""
          }`}
        >
          <hr
            className={`border ${
              isOpen
                ? "border-yellow-500/50 bg-yellow-500/50 text-yellow-500/50"
                : "border-[#e8eddf] bg-[#e8eddf] text-[#e8eddf]"
            } `}
          />
          <hr
            className={`border ${
              isOpen
                ? "border-yellow-500/50 bg-yellow-500/50 text-yellow-500/50"
                : "border-[#e8eddf] bg-[#e8eddf] text-[#e8eddf]"
            } `}
          />
          <hr
            className={`border ${
              isOpen
                ? "border-yellow-500/50 bg-yellow-500/50 text-yellow-500/50"
                : "border-[#e8eddf] bg-[#e8eddf] text-[#e8eddf]"
            } `}
          />
        </div>
      </button>
    </section>
  );
};

export default HeaderIcon;
