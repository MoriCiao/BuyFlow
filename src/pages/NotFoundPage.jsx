import React from "react";
import { useNavigate } from "react-router-dom";
// Page404
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="Page404 cursor-pointer select-none">
      <div className="word_I">
        Page is Not Found
        <span>Page is Not Found</span>
        <span>Page is Not Found</span>
        <span>Please Go Back To HomePage</span>
      </div>

      <button
        className="Page404-btn cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        <svg>
          <rect></rect>
        </svg>
        HomePage
      </button>
    </section>
  );
};

export default NotFoundPage;
