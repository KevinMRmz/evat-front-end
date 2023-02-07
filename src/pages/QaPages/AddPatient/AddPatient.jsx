import GeneralComponents from "../../../components/GeneralComponents";
import { usePatient } from "../../../hooks/Actions/usePatientActions";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";
import Forms from "../../../forms";
import React from "react";

const AddPatient = () => {
  const { createPatient } = usePatient();

  return (
    <Layouts.AddUserLayout>
      <GeneralComponents.Title title={Titles.ADD_PATIENT} />
      <Forms.PatientForm action={createPatient} />
    </Layouts.AddUserLayout>
  );
};

export default AddPatient;
