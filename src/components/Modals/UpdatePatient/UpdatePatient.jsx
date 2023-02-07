import usePatientActions from "../../../hooks/Actions/usePatientActions";
import { PatientContext } from "../../../contexts/patientContext";
import { useSetPatientInfo } from "../../../hooks/DefaultInfo";
import GeneralComponents from "../../GeneralComponents";
import { Titles } from "../../../constants/titles";
import React, { useContext } from "react";
import Layouts from "../../../layouts";
import Forms from "../../../forms";

const UpdatePatient = () => {
  const { patient } = useContext(PatientContext);
  const defaultInfo = useSetPatientInfo(patient);
  const { updatePatient } = usePatientActions();

  return (
    <Layouts.ModalLayout>
      <GeneralComponents.Title title={Titles.UPDATE_PATIENT} />
      <Forms.PatientForm action={updatePatient} patientInfo={defaultInfo} />
    </Layouts.ModalLayout>
  );
};

export default UpdatePatient;
