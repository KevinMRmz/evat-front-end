import axios from "axios";

const Requests = {
  DAILY_FORM_REQUEST: process.env.REACT_APP_URL + "/api/v1/medical-daily-form",
  RED_EVAT_REQUEST: process.env.REACT_APP_URL + "/api/v1/red-evat",
  PATIENT_REQUEST: process.env.REACT_APP_URL + "/api/v1/patient",
  RECORD_REQUEST: process.env.REACT_APP_URL + "/api/v1/record",
  EMPLOYEE_REQUEST: process.env.REACT_APP_URL + "/api/v1/employee",
  LOGIN_REQUEST: process.env.REACT_APP_URL + "/api/v1/auth",
  PATIENT_FILTER_REQUEST: process.env.REACT_APP_URL + "/api/v1/patient/filter?",
  EMPLOYEE_FILTER_REQUEST:
    process.env.REACT_APP_URL + "/api/v1/employee/filter?",
};

const funcErrorWrapper = (func) => {
  return async (...args) => {
    try {
      return await func(...args);
    } catch (error) {
      const errMsg =
        error?.response?.data.msg || "Something went wrong, try again later.";

      throw new Error(errMsg);
    }
  };
};

const useFetch = () => {
  /**
   *  GET REQUESTS
   */

  // GET request to get all patients specified by the query
  const getPatientsFilter = funcErrorWrapper(async (query) => {
    const results = await axios.get(Requests.PATIENT_FILTER_REQUEST + query);
    return results;
  });

  // GET request to get all employees specified by the query
  const getEmployeesFilter = funcErrorWrapper(async (query) => {
    const results = await axios.get(Requests.EMPLOYEE_FILTER_REQUEST + query);
    return results;
  });

  /**
   *  POST REQUESTS
   */

  // POST request to log into the application
  const loginRequest = funcErrorWrapper(async (data) => {
    const result = await axios.post(Requests.LOGIN_REQUEST, {
      ...data,
    });
    return result;
  });

  // POST request to add one member of the staff in the hospital
  const AddPatientRequest = funcErrorWrapper(async (data) => {
    const result = await axios.post(Requests.PATIENT_REQUEST, { ...data });
    return result;
  });

  // POST request to add one member of the staff in the hospital
  const AddStaff = funcErrorWrapper(async (data, role) => {
    const result = await axios.post(Requests.EMPLOYEE_REQUEST, {
      ...data,
      role,
    });
    return result;
  });

  return {
    loginRequest,
    AddPatientRequest,
    AddStaff,
    getPatientsFilter,
    getEmployeesFilter,
  };
};

export default useFetch;
