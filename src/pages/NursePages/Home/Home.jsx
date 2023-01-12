import React, { useState, useEffect } from "react";
import Components from "../../../components";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const [patientList, setPatientList] = useState([]);
  const { getAllPatientsNurse } = useFetch();

  useEffect(() => {
    getAllPatientsNurse("63b1f362e650d1d3e3dfe5ae")
      .then((result) => {
        setPatientList([...result]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center w-100 m-5">
        <div className="w-80 m-5 title-container-patients">
          <h2 className="">Your Patients</h2>
        </div>
      </div>
      <div className="w-100 flex-center mt-5">
        <div className="flex w-90 justify-evenly flex-column overflow-y-scroll">
          {patientList.map((patient) => (
            <Link
              to={`/patient/${patient._id}`}
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
