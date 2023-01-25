import React from "react";
import useFetchDataById from "../../hooks/useFetchDataById";
import Components from "..";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const NursePatients = ({ idNurse }) => {
  const { getAllPatientsNurse } = useFetch();
  const { data } = useFetchDataById(getAllPatientsNurse, idNurse);

  return (
    <>
      <div className="title-container-border">
        <h2>Nurse Patient's</h2>
      </div>
      <div className="vw-50 vh-80 flex-center">
        <div className="w-90 h-90 overflow-y-scroll flex flex-column">
          {data.length === 0 ? (
            <h2 className="danger-text m-5 text-center">
              No Patients where found for this nurse
            </h2>
          ) : (
            data.map((patient) => (
              <Link
                to={`/admin/patient/${patient._id}`}
                className="no-decoration text-black"
              >
                <Components.PatientResultCard patient={patient} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default NursePatients;
