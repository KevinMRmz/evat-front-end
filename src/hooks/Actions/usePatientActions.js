import useAlert from "../useAlert";
import useFetch from "../useFetch";
import Messages from "../../constants/alertMessages";
import { useContext } from "react";
import { PatientContext } from "../../contexts/patientContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const usePatientActions = () => {
  const { QuestionMessages, ResponseMessages } = Messages;
  const { confirmAlertSuccessMsg } = useAlert();
  const {
    updatePatientRequest,
    deletePatient,
    deletePatientNurse,
    setPatientNurse,
  } = useFetch();
  const { patient, setPatientInfo } = useContext(PatientContext);
  const navigate = useNavigate();

  const updatePatient = confirmAlertSuccessMsg(
    async (data) => {
      const result = await updatePatientRequest(patient.id, {
        ...data,
      });
      setPatientInfo(result);
    },
    QuestionMessages.PATIENT_FORM,
    ResponseMessages.PATIENT_UPDATED
  );

  const deletePatientHome = confirmAlertSuccessMsg(async (id) => {
    await deletePatient(id);
    navigate("/admin/patient-search");
  });

  const deleteNurseId = confirmAlertSuccessMsg(
    async (id) => {
      const result = await deletePatientNurse(id);
      setPatientInfo(result);
    },
    QuestionMessages.REMOVE_NURSE_PATIENT,
    ResponseMessages.REMOVE_PATIENT_NURSE
  );

  const setNurseId = confirmAlertSuccessMsg(
    async (id, idNurse) => {
      const result = await setPatientNurse(id, idNurse);
      setPatientInfo(result);
    },
    QuestionMessages.ASSIGN_PATIENT,
    ResponseMessages.ASSIGN_PATIENT
  );

  return {
    updatePatient,
    deletePatientHome,
    deleteNurseId,
    setNurseId,
  };
};

export const usePatient = () => {
  const { QuestionMessages, ResponseMessages } = Messages;
  const { confirmAlertErrorSuccessMsg, waitingResponseAlert } = useAlert();
  const { AddPatientRequest, getPatientsFilter } = useFetch();
  const [patients, setPatients] = useState([]);

  const createPatient = confirmAlertErrorSuccessMsg(
    async (data) => {
      await AddPatientRequest({ ...data });
    },
    QuestionMessages.PATIENT_FORM,
    ResponseMessages.PATIENT_CREATED
  );

  const searchPatients = waitingResponseAlert(async (query) => {
    const result = await getPatientsFilter(query);
    setPatients(result);
  });

  return { createPatient, searchPatients, patients };
};

export default usePatientActions;
