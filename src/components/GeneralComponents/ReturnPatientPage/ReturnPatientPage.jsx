import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import "./return-patient-page.css";

const ReturnPatientPage = ({ id }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div
      className="return-patient-container flex-center pointer"
      onClick={() => navigate(`/${user.role}/patient/` + id)}
    >
      <div className="color-blue">
        <ion-icon name="undo"></ion-icon>
      </div>
    </div>
  );
};

export default ReturnPatientPage;
