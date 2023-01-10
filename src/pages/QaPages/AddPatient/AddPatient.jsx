import React, { useContext, useEffect } from "react";
import Components from "../../../components";
import { ErrorMessageContext } from "../../../contexts/errorMessageContext";
import { useCreatePatient } from "../../../hooks/Actions/usePatientActions";
import "./add-patient.css";

const AddPatient = () => {
  const { errorMessage, cleanMessage } = useContext(ErrorMessageContext);
  const { createPatient } = useCreatePatient();

  useEffect(() => cleanMessage(), []);

  return (
    <div className="w-100 flex flex-column flex-center vh-80">
      <div className="w-60 mt-5 title-container-patients">
        <h2 className="p-5">Add patients</h2>
      </div>
      <Components.PatientForm action={createPatient}>
        <Components.Message message={errorMessage} />
      </Components.PatientForm>
    </div>
  );
};

export default AddPatient;
