import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Components from "../../components";
import { UserContext } from "../../contexts/userContext";
import useFetchPatientData from "../../hooks/useFetchPatientData";
import PatientButtons from "../../components/SinglePageComponents/PatientButtons";
import Roles from "../../constants/roles";
import "./single-user-pages.css";

const PatientPage = () => {
  const { id } = useParams();
  const { patient, setPatientInfo } = useFetchPatientData(id);
  const { user } = useContext(UserContext);

  return (
    <div className="w-100 vh-80">
      <div className="w-100 flex-center mt-5">
        <div className="w-70 m-5 title-container-border flex justify-between align-items-center">
          <h2 className="uppercase letter-spacing-5 opacity-9">Patient Info</h2>
          {user.role === Roles.ADMIN ? (
            <Components.PatientHeader
              setPatientInfo={setPatientInfo}
              id={patient.id}
            />
          ) : (
            <PatientButtons id={patient.id} />
          )}
        </div>
      </div>
      <div className="w-100 flex-center h-90">
        <Components.PatientInfo patient={patient} />
      </div>
    </div>
  );
};

export default PatientPage;
