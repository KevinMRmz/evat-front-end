import { PatientService } from "./patient-service";
import useConfirmAlertWithSuccessAlert from "../../hooks/Alerts/confirmAlertWithSuccessAlert";
import useConfirmAlertErrorMsgSuccessAlert from "../../hooks/Alerts/confirmAlertErrorMsgSuccessAlert";
import useWaitingResponseAlertError from "../../hooks/Alerts/waitingResponseAlert";
import Messages from "../../constants/alertMessages";
import { useContext, useState } from "react";
import { PatientContext } from "../../contexts/patientContext";
import { useNavigate } from "react-router-dom";

const patientService = new PatientService();

const usePatientContextActions = () => {
  const confirmAlertWithSuccessAlert = useConfirmAlertWithSuccessAlert();
  const { patient, setPatientInfo } = useContext(PatientContext);
  const { QuestionMessages, ResponseMessages } = Messages;
  const navigate = useNavigate();

  const updatePatient = confirmAlertWithSuccessAlert(
    async (data) => {
      const result = await patientService.updatePatient(patient.id, {
        ...data,
      });
      setPatientInfo(result);
    },
    QuestionMessages.PATIENT_FORM,
    ResponseMessages.PATIENT_UPDATED
  );

  const deletePatientHome = confirmAlertWithSuccessAlert(async (id) => {
    await patientService.deletePatient(id);
    navigate("/admin/patient-search");
  });

  const deleteNurseId = confirmAlertWithSuccessAlert(
    async (id) => {
      const result = await patientService.deletePatientNurse(id);
      setPatientInfo(result);
    },
    QuestionMessages.REMOVE_NURSE_PATIENT,
    ResponseMessages.REMOVE_PATIENT_NURSE
  );

  return {
    updatePatient,
    deletePatientHome,
    deleteNurseId,
  };
};

export const usePatientActions = () => {
  const { QuestionMessages, ResponseMessages } = Messages;
  const waitingResponseAlertError = useWaitingResponseAlertError();
  const confirmErrorMsgSuccessAlert = useConfirmAlertErrorMsgSuccessAlert();
  const confirmAlertWithSuccessAlert = useConfirmAlertWithSuccessAlert();

  const [patients, setPatients] = useState([]);

  const createPatient = confirmErrorMsgSuccessAlert(
    async (data) => await patientService.addPatientRequest({ ...data }),
    QuestionMessages.PATIENT_FORM,
    ResponseMessages.PATIENT_CREATED
  );

  const setNurseId = confirmAlertWithSuccessAlert(
    async (id, idNurse) => await patientService.setPatientNurse(id, idNurse),
    QuestionMessages.ASSIGN_PATIENT,
    ResponseMessages.ASSIGN_PATIENT
  );

  const searchPatients = waitingResponseAlertError(async (query) => {
    const result = await patientService.getPatientsFilter(query);
    setPatients(result);
  });

  return { createPatient, searchPatients, patients, setNurseId };
};

export default usePatientContextActions;
