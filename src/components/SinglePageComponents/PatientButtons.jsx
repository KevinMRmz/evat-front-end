import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const PatientButtons = ({ id }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-evenly w-100">
      <button
        className="btn w-30 bg-orange"
        onClick={() =>
          navigate(`/${user.role.toLowerCase()}/notification/${id}`)
        }
      >
        Send Notification
      </button>
      <button
        className="btn w-30"
        onClick={() =>
          navigate(`/${user.role.toLowerCase()}/evat-record/${id}`)
        }
      >
        Patient Record
      </button>
      <button
        className="btn w-30 bg-green"
        onClick={() => navigate("/evat-form/" + id)}
      >
        Evat Form
      </button>
    </div>
  );
};

export default PatientButtons;
