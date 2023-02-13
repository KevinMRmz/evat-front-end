import axios from "axios";
import {
  PATIENT_REQUEST,
  PATIENT_ASSIGN_NURSE,
  PATIENT_FILTER_REQUEST,
} from "../../constants/requests";

/**
 * @typedef  {Object} PatientObject
 * @property {String} name Name of the patient
 * @property {Date} birthDateIso Age of the patient
 * @property {String} palliative Define if the user has a palliative state or not
 * @property {String} typeOfCancer Name of the type of cancer of the user
 * @property {String} services Name of the services that the patient uses
 * @property {mongoose.Types.ObjectId} [idNurse] Id of the nurse in charge of the patient
 */

export class PatientService {
  /**
   * @desc     Request to get a patient
   * @param    {String} id
   * @returns  Patient found
   * @access   Authorized for authenticated users
   * @method   GET
   */
  async getPatientById(id) {
    const { data } = await axios.get(PATIENT_REQUEST + id);
    return data.result;
  }

  /**
   * @desc     Request to access create a new patient
   * @param    {PatientObject} newPatientInfo
   * @param    {String} id
   * @returns  Patient updated
   * @access   Authorized for users with ADMIN role
   * @method   POST
   */
  async updatePatient(id, newPatientInfo) {
    const { data } = await axios.patch(PATIENT_REQUEST + id, {
      ...newPatientInfo,
    });
    return data.result;
  }

  /**
   * @desc     Request to delete the nurse assigned to the patient
   * @param    {String} id
   * @returns  User updated
   * @access   Authorized for users with ADMIN role
   * @method   DELETE
   */
  async deletePatient(id) {
    const { data } = await axios.delete(PATIENT_REQUEST + id);
    return data.result;
  }

  /**
   * @desc     Request to delete the nurse assigned to the patient
   * @param    {String} id
   * @returns  User updated
   * @access   Authorized for users with ADMIN role
   * @method   PATCH
   */
  async deletePatientNurse(id) {
    const { data } = await axios.patch(PATIENT_ASSIGN_NURSE + id);
    return data.result;
  }

  /**
   * @desc     Request to access create a new patient
   * @param    {PatientObject} PatientInfo
   * @returns  patient created
   * @access   Authorized for users with ADMIN role
   * @method   POST
   */
  async addPatientRequest(PatientInfo) {
    const { data } = await axios.post(
      PATIENT_REQUEST,
      {
        ...PatientInfo,
      },
      {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("jwt")}`,
        },
      }
    );
    return data.result;
  }

  /**
   * @desc     Request to get all users matched with the query
   * @param    {String} query
   * @returns  Array with patients matched with the query
   * @access   Authorized for users with ADMIN role
   * @method   GET
   */
  async getPatientsFilter(query) {
    const { data } = await axios.get(PATIENT_FILTER_REQUEST + query);
    return data.result;
  }

  /**
   * @desc     Request to assign a nurse to a patient
   * @param    {String} idNurse
   * @param    {String} id
   * @access   Authorized for users with ADMIN role
   * @method   POST
   */
  async setPatientNurse(id, idNurse) {
    const { data } = await axios.post(PATIENT_ASSIGN_NURSE + id, {
      idNurse,
    });
    return data.result;
  }
}
