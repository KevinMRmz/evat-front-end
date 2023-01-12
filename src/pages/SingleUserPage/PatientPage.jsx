import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Components from "../../components";
import useFetchPatientData from "../../hooks/useFetchPatientData";
import "./single-user-pages.css";

const PatientPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { patient, setPatientInfo } = useFetchPatientData(id);

  return (
    <div className="w-100 vh-90">
      <span className="background-img-user" />
      <div className="w-100 flex-center mt-5">
        <div className="w-70 m-5 title-container-patients flex justify-between align-items-center">
          <div>
            <h2 className="p-5">Patient Information</h2>
          </div>
          <Components.PatientHeader
            setPatientInfo={setPatientInfo}
            id={patient.id}
          />
        </div>
      </div>
      <div className="w-100 flex-center h-90">
        <Components.PatientInfo patient={patient} />
      </div>

      <div
        className="redirect-home flex-center pointer"
        onClick={() => navigate("/admin/patient-search")}
      >
        <ion-icon name="home"></ion-icon>
      </div>
    </div>
  );
};

export default PatientPage;
