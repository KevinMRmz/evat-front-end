import React, { useState } from "react";
import { Link } from "react-router-dom";
import Components from "../../../components";
import useFetch from "../../../hooks/useFetch";
import useAlert from "../../../hooks/useAlert";

const SearchPatient = () => {
  const [patientResults, setPatientResults] = useState([]);
  const { getPatientsFilter } = useFetch();
  const { waitingResponseAlert } = useAlert();

  const searchPatients = waitingResponseAlert(async (query) => {
    const result = await getPatientsFilter(query);
    setPatientResults([...result]);
  });

  return (
    <div className="w-100 vh-80 flex">
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Search Patients</h2>
          </div>
          <Components.PatientSearch search={searchPatients} />
        </div>
      </div>
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Results</h2>
          </div>
          <div className="w-100 h-90 overflow-y-scroll">
            {patientResults.map((result) => (
              <Link
                to={`/patient/${result._id}`}
                className="no-decoration text-black"
              >
                <Components.PatientResultCard
                  patient={result}
                  key={result._id}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPatient;
