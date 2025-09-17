import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
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
      <div className="Page404-btn cursor-pointer">
        <Button label="HomePage" onClick={() => navigate("/")} />
      </div>
    </section>
  );
};

export default NotFoundPage;
