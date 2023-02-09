import React from "react";
import { useContext } from "react";
import { PatientContext } from "../../contexts/patientContext";
import useFetch from "../../hooks/useFetch";
import StaffResultCard from "../ResultsCards/StaffResultCard";
import useFetchData from "../../hooks/useFetchData";
import usePatientActions from "../../hooks/Actions/usePatientActions";

import Layouts from "../../layouts";

function ModalPatientNurses() {
  const { patient } = useContext(PatientContext);
  const { getAllNurses } = useFetch();
  const { data } = useFetchData(getAllNurses);
  const { setNurseId } = usePatientActions();

  return (
    <>
      <div className="title-container-border">
        <h2>Nurses</h2>
      </div>
      <div className="vw-50 vh-80 flex-center">
        <div className="w-90 h-90 overflow-y-scroll flex flex-column">
          {data.length === 0 ? (
            <h2 className="danger-text m-5 text-center">
              No nurses where found
            </h2>
          ) : (
            data.map((nurse) => (
              <span onClick={() => setNurseId(patient.id, nurse._id)}>
                <StaffResultCard staff={nurse} key={nurse._id} />
              </span>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ModalPatientNurses;
