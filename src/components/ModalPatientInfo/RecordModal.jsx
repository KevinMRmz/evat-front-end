import React from "react";
import useFetchDataById from "../../hooks/useFetchDataById";
import Components from "..";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const RecordModal = ({ id }) => {
  const { patientRecords } = useFetch();
  const { data } = useFetchDataById(patientRecords, id);

  return (
    <>
      <div className="title-container-border">
        <h2>Patient Records</h2>
      </div>
      <div className="vw-50 vh-80 flex-center">
        <div className="w-90 h-90 overflow-y-scroll flex flex-column">
          {data.length === 0 ? (
            <h2 className="danger-text m-5 text-center">
              No Records where found for this patient
            </h2>
          ) : (
            data.map((record) => (
              <Link to={`/`} className="no-decoration text-black">
                <Components.RecordCard record={record} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default RecordModal;
