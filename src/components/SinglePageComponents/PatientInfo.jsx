import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SectionInfo from "./SectionInfo";
import { UserContext } from "../../contexts/userContext";

const PatientInfo = ({ patient }) => {
  const { user } = useContext(UserContext);
  const patientInfo = [
    "name",
    "birthDate",
    "services",
    "typeOfCancer",
    "palliative",
    "idNurse",
  ];

  return (
    <div className="w-60 h-100 flex flex-column justify-evenly font-size-modal align-items-center">
      {patientInfo.map((key) => {
        if (key === "idNurse") {
          return (
            <SectionInfo
              objectKey={key}
              value={
                patient.idNurse ? (
                  <Link
                    to={`/${user.role.toLowerCase()}/staff/${patient.idNurse}`}
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
    </div>
  );
};

export default PatientInfo;
