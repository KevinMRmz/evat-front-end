import StaffResultCard from "../../../components/ResultsCards/StaffResultCard";
import StaffInfo from "../../../components/SinglePageComponents/StaffInfo";
import GeneralComponents from "../../../components/GeneralComponents";
import { usePatient } from "../../../hooks/Actions/usePatientActions";
import useFetchData from "../../../hooks/useFetchData";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Layouts from "../../../layouts";

const AssignNurse = () => {
  const [employee, setEmployee] = useState({});
  const { getAllNurses } = useFetch();
  const { setNurseId } = usePatient();
  const { id } = useParams();
  const { data } = useFetchData(getAllNurses);

  return (
    <>
      <GeneralComponents.ReturnPatientPage id={id} />

      <Layouts.SearchLayout
        searchTitle={"Assign Nurse"}
        searchForm={
          <div className="h-100 m-5">
            <StaffInfo staff={employee} />
          </div>
        }
        results={data.map((nurse) => (
          <span
            onClick={() => {
              setNurseId(id, nurse._id);
              setEmployee(nurse);
            }}
          >
            <StaffResultCard staff={nurse} key={nurse._id} />
          </span>
        ))}
      />
    </>
  );
};

export default AssignNurse;
