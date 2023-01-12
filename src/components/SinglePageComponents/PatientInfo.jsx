import React from "react";
import { Link } from "react-router-dom";
import SectionInfo from "./SectionInfo";
import PatientButtons from "./PatientButtons";

const PatientInfo = ({ patient }) => {
  return (
    <div className="w-50 h-100 flex flex-column justify-evenly font-size-modal align-items-center">
      {Object.keys(patient).map((key) => {
        if (key === "idNurse") {
          return (
            <SectionInfo
              objectKey={key}
              value={
                patient.idNurse ? (
                  <Link
                    to={`/staff/${patient.idNurse}`}
                    className="no-decoration text-black"
                  >
                    <span className="bold text-blue">{patient.idNurse}</span>
                  </Link>
                ) : (
                  <span className="danger-text bold">
                    Patient with no Nurse
                  </span>
                )
              }
            />
          );
        } else {
          return <SectionInfo objectKey={key} value={patient[key]} />;
        }
      })}
      <PatientButtons id={patient.id} />
    </div>
  );
};

export default PatientInfo;
