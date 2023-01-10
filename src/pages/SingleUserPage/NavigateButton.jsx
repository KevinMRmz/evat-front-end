import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="redirect-home flex-center pointer"
      onClick={() => navigate("/admin/staff-search")}
    >
      <ion-icon name="home"></ion-icon>
    </div>
  );
};

export default NavigateButton;
