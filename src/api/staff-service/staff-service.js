import axios from "axios";
import {
  EMPLOYEE_REQUEST,
  CHANGE_PASSWORD,
  EMPLOYEE_FILTER_REQUEST,
} from "../../constants/requests";

/**
 * @typedef  {Object} EmployeeObject
 * @property {String} name
 * @property {String} email
 * @property {String} phone
 * @property {String} password
 * @property {String} role Value for role must be between [DOCTOR, NURSE, ADMIN, RESIDENT]
 * @property {String} [specialty] If the employee is a doctor or resident you can specify an specialty
 */

export class StaffService {
  /**
   * @desc     Request to access create a new employee
   * @param    {EmployeeObject} employeeInfo
   * @returns  employee created
   * @access   Authorized for users with ADMIN role
   * @method   POST
   */
  async addEmployee(employeeInfo) {
    const { data } = await axios.post(EMPLOYEE_REQUEST, {
      ...employeeInfo,
    });
    return data.result;
  }

  /**
   * @desc     Request to update the employee
   * @param    {EmployeeObject} employeeInfo
   * @param    {String} id
   * @returns  Employee updated
   * @access   Authorized for users with ADMIN role
   * @method   POST
   */
  async updateEmployee(id, employeeInfo) {
    const { data } = await axios.patch(EMPLOYEE_REQUEST + id, {
      ...employeeInfo,
    });
    return data.result;
  }

  /**
   * @desc     Request to remove the employee
   * @param    {String} id
   * @returns  Employee deleted
   * @access   Authorized for users with ADMIN role
   * @method   DELETE
   */
  async deleteEmployee(id) {
    const { data } = await axios.delete(EMPLOYEE_REQUEST + id);
    return data.result;
  }

  /**
   * @desc     Change the password of the employee
   * @param    {String} id
   * @param    {String} password
   * @returns  Employee updated
   * @access   Authorized for users with ADMIN role
   * @method   POST
   */
  async changePassword(password, id) {
    const { data } = await axios.post(CHANGE_PASSWORD + id, {
      password,
    });
    return data.result;
  }

  /**
   * @desc     Get all employees matched with the query
   * @param    {String} query
   * @returns  Array of employees
   * @access   Authorized for users with ADMIN role
   * @method   GET
   */
  async getEmployeesFilter(query) {
    const { data } = await axios.get(EMPLOYEE_FILTER_REQUEST + query);
    return data.result;
  }
}
