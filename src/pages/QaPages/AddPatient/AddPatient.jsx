import GeneralComponents from "../../../components/GeneralComponents";
import { usePatientActions } from "../../../api/patient-service/patient-actions";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";
import Forms from "../../../forms";
import React from "react";

const AddPatient = () => {
  const { createPatient } = usePatientActions();

  return (
    <Layouts.AddUserLayout>
      <GeneralComponents.Title title={Titles.ADD_PATIENT} />
      <Forms.PatientForm action={createPatient} />
    </Layouts.AddUserLayout>
  );
};

export default AddPatient;
