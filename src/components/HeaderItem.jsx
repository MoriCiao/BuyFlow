import { Link } from "react-router-dom";

export const HeaderHr = () => {
  return <hr className="h-[30px] border" />;
};
export const HeaderBtn = ({
  text,
  variant = "homepage",
  onClick,
  className,
}) => {
  return (
    <div
      className={`${text}btn ${
        variant === "homepage" ? "home-svg" : ""
      } cursor-pointer`}
    >
      {variant === "homepage" ? (
        <svg>
          <rect></rect>
        </svg>
      ) : null}

      <button
        className={`${className} cursor-pointer drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]`}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export const HeaderLink = ({ text, link }) => {
  const linksStyle =
    "hover:font-bold hover:text-yellow-500 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300 h-[30px] block text-center px-2 py-1";

  return (
    <Link to={link} className={linksStyle}>
      {text}
    </Link>
  );
};

export const HeaderHr_sm = () => (
  <hr className="w-[80%] opacity-50 border-1 rounded-full mt-2" />
);
