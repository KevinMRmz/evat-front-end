import axios from "axios";
import Requests from "../constants/requests";
import useAlert from "./useAlert";

const useFetch = () => {
  const { funcErrorWrapper } = useAlert();
  /**
   *  GET REQUESTS
   */

  //---- GET request to get the patient by the ID provided
  const getPatientById = funcErrorWrapper(async (id) => {
    const { data } = await axios.get(Requests.PATIENT_REQUEST + id);
    return data.result;
  });

  // GET request to return all the nurses in the system
  const getAllNurses = funcErrorWrapper(async () => {
    const { data } = await axios.get(Requests.EMPLOYEE_NURSES_REQUEST);
    return data.result;
  });

  // GET request to get one employee by id
  const getEmployeeById = funcErrorWrapper(async (id) => {
    const { data } = await axios.get(Requests.EMPLOYEE_REQUEST + id);
    return data.result;
  });

  // Get request to get all patients from a nurse
  const getAllPatientsNurse = funcErrorWrapper(async (idNurse) => {
    const { data } = await axios.get(
      Requests.EMPLOYEE_NURSE_PATIENTS_REQUEST + idNurse
    );
    return data.result;
  });

  // GET request to get all doctors
  const getDoctors = funcErrorWrapper(async () => {
    const { data } = await axios.get(Requests.EMPLOYEE_DOCTORS_REQUEST);
    return data.result;
  });

  // Get all patient notifications
  const patientNotifications = funcErrorWrapper(async (idPatient) => {
    const { data } = await axios.get(
      Requests.PATIENT_NOTIFICATIONS_REQUEST + idPatient
    );
    return data.result;
  });

  // Get all doctor notifications
  const doctorNotifications = funcErrorWrapper(async (idDoctor) => {
    const { data } = await axios.get(
      Requests.DOCTOR_NOTIFICATIONS_REQUEST + idDoctor
    );
    return data.result;
  });

  // Get all new doctor notifications
  const newDoctorNotifications = funcErrorWrapper(async (idDoctor) => {
    const { data } = await axios.get(
      Requests.NEW_DOCTOR_NOTIFICATIONS + idDoctor
    );
    return data.result;
  });

  // GET all patient notifications
  const nurseNotifications = funcErrorWrapper(async (idTransmitter) => {
    const { data } = await axios.get(
      Requests.NURSE_NOTIFICATIONS_REQUEST + idTransmitter
    );
    return data.result;
  });

  // GET all patient records
  const patientRecords = funcErrorWrapper(async (idPatient) => {
    const { data } = await axios.get(Requests.PATIENT_EVAT_FORMS + idPatient);
    return data.result;
  });

  return {
    getPatientById,
    getAllNurses,
    getEmployeeById,
    getAllPatientsNurse,
    getDoctors,
    patientNotifications,
    doctorNotifications,
    nurseNotifications,
    patientRecords,
    newDoctorNotifications,
  };
};

export default useFetch;
