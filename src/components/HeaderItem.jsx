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
        className={`headerBtn ${className}`}
        type="button"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export const HeaderLink = ({ text, link }) => {
  return (
    <Link to={link} className="headerLink ">
      {text}
    </Link>
  );
};

export const HeaderHr_sm = () => (
  <hr className="w-[80%] opacity-50 border-1 rounded-full my-1" />
);
