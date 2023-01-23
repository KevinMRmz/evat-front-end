import React from "react";
import { useNavigate } from "react-router-dom";
import "./error-pages.css";

const ErrorPagesLayout = ({ title, subtitle, redirect }) => {
  const navigate = useNavigate();

  return (
    <div className="w-100 vh-100">
      <div className="flex flex-column justify-evenly align-items-center h-80">
        <div className="w-80 title-container-border">
          <h2 className="text-center title-error m-5">{title}</h2>
        </div>
        <div className="w-60 text-center">
          <p className="subtitle-container">{subtitle}</p>
        </div>
        <span
          onClick={() => navigate(redirect)}
          className="pointer btn text-center w-30"
        >
          Return
        </span>
        <span className="background-img-error" />
      </div>
    </div>
  );
};

export default ErrorPagesLayout;
