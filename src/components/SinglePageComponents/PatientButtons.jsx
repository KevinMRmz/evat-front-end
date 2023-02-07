import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const PatientButtons = ({ id }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <div className="flex">
      <span
        className="color-blue pointer mr-5 icon-size"
        onClick={() =>
          navigate(`/${user.role.toLowerCase()}/notification/${id}`)
        }
      >
        <ion-icon name="send"></ion-icon>
      </span>
      <span
        className="color-yellow pointer mr-5 icon-size"
        onClick={() =>
          navigate(`/${user.role.toLowerCase()}/evat-record/${id}`)
        }
      >
        <ion-icon name="folder"></ion-icon>
      </span>
      <span
        className=" text-black pointer mr-5 icon-size"
        onClick={() => navigate("/nurse/evat-form/" + id)}
      >
        <ion-icon name="list-box"></ion-icon>
      </span>
    </div>
  );
};

export default PatientButtons;
