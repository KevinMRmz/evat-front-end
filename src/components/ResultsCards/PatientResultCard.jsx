import React from "react";
import "./cards-results.css";

const PatientResultCard = ({ patient }) => {
  return (
    <div className="w-100 flex flex-column justify-between card-shadow p-5 pointer">
      <div className="w-100 flex justify-between m-3 nowrap">
        <div>
          Name: <span className="name-color bold">{patient.name}</span>
        </div>
        <div>
          Birth Date: <span className="age-color">{patient.birthDate}</span>
        </div>
        {console.log(patient.birthDate, patient.name)}
      </div>
      <div className="w-100 flex justify-between m-3 nowrap">
        <div>
          Type of Cancer:{" "}
          <span className="type-color">{patient.typeOfCancer}</span>
        </div>
        <div>Nurse: {patient.idNurse ? <>✔️</> : <>❌</>}</div>
      </div>
    </div>
  );
};

export default PatientResultCard;
