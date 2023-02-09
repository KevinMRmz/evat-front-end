import React, { useContext } from "react";
import Components from "../../../components";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import { UserContext } from "../../../contexts/userContext";
import { Link } from "react-router-dom";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";

function Home() {
  const { getAllPatientsNurse } = useFetch();
  const { user } = useContext(UserContext);
  const { data } = useFetchDataById(getAllPatientsNurse, user.id);

  return (
    <Layouts.CardsLayout
      title={Titles.NURSE_PATIENTS}
      cards={data.map((patient) => (
        <Link
          to={`/nurse/patient/${patient._id}`}
          className="no-decoration text-black w-100"
        >
          <Components.PatientResultCard patient={patient} />
        </Link>
      ))}
    />
  );
}

export default Home;
