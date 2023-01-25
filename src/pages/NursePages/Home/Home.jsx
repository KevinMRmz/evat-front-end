import React from "react";
import Components from "../../../components";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import { Link } from "react-router-dom";

function Home() {
  const { getAllPatientsNurse } = useFetch();
  const { data } = useFetchDataById(
    getAllPatientsNurse,
    "63b1f362e650d1d3e3dfe5ae"
  );

  return (
    <>
      <div className="flex justify-center w-90 m-5">
        <div className="w-80 m-5 title-container-patients">
          <h2 className="">Your Patients</h2>
        </div>
      </div>
      <div className="w-100 flex-center mt-5">
        <div className="flex w-90 vh-70 flex-column overflow-y-scroll">
          {data.map((patient) => (
            <Link
              to={`/nurse/patient/${patient._id}`}
              className="no-decoration text-black w-100"
            >
              <Components.PatientResultCard patient={patient} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
