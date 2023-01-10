import React, { useContext, useEffect } from "react";
import { PatientContext } from "../../contexts/patientContext";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";
import usePatientActions from "../../hooks/Actions/usePatientActions";
import Components from "..";

const ModalPatientUpdate = () => {
  const { cleanMessage, errorMessage } = useContext(ErrorMessageContext);
  const { patient } = useContext(PatientContext);
  const { updatePatient } = usePatientActions();

  useEffect(() => cleanMessage(), []);

  return (
    <>
      <div className="title-container-border">
        <h2>Update Patient</h2>
      </div>
      <div className="vw-50 vh-80 flex-center overflow-hidden">
        <Components.PatientForm
          action={updatePatient}
          patientDefaultInfo={patient}
        >
          <Components.Message message={errorMessage} />
        </Components.PatientForm>
      </div>
    </>
  );
};

export default ModalPatientUpdate;
