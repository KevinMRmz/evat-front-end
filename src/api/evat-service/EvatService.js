import axios from "axios";
import {
  DAILY_FORM_REQUEST,
  PATIENT_EVAT_FORMS,
} from "../../constants/requests";

/**
 * @typedef  {Object} EvatFormObject
 * @property {Number} hour Number of the hour
 * @property {String} temperature
 * @property {Number} bloodPressure
 * @property {Number} FC Heart rate
 * @property {Number} FR Respiratory rate
 * @property {String} idPatient
 * @property {Number} SO2
 * @property {Number} ltsO2
 * @property {Number} pain
 * @property {Number} capillaryRefill
 * @property {String} rightPupil "R"-"NR"
 * @property {String} leftPupil"R"-"NR"
 * @property {Number} neuro
 * @property {Number} cardio
 * @property {Number} resp
 * @property {Number} nurseConcern
 * @property {Number} familyConcern
 */

export class EvatService {
  /**
   * @desc     Request to delete an evat form
   * @param    {String} id
   * @returns  Evat form deleted
   * @access   Authorized for users with NURSE role
   * @method   DELETE
   */
  async deleteEvatForm(id) {
    const { data } = await axios.delete(DAILY_FORM_REQUEST + id);
    return data.result;
  }

  /**
   * @desc     Request to create an evat form
   * @param    {EvatFormObject} evatInfo
   * @returns  Evat form created
   * @access   Authorized for users with NURSE role
   * @method   POST
   */
  async postEvatForm(evatInfo) {
    const { data } = await axios.post(DAILY_FORM_REQUEST, {
      ...evatInfo,
    });
    return data.result;
  }

  /**
   * @desc     Request to delete all evat forms matched with the patient id
   * @param    {String} idPatient
   * @returns  Array of all evat forms deleted
   * @access   Authorized for users with NURSE role
   * @method   DELETE
   */
  async deleteAllPatientForms(idPatient) {
    const { data } = await axios.delete(PATIENT_EVAT_FORMS + idPatient);
    return data.result;
  }
}
