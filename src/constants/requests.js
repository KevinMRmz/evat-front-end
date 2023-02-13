export const DAILY_FORM_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/medical-daily-form/";
export const PATIENT_EVAT_FORMS =
  process.env.REACT_APP_URL + "/api/v1/medical-daily-form/patient-evat-form/";

export const RED_EVAT_REQUEST = process.env.REACT_APP_URL + "/api/v1/red-evat/";

export const RECORD_REQUEST = process.env.REACT_APP_URL + "/api/v1/record/";

export const LOGIN_REQUEST = process.env.REACT_APP_URL + "/api/v1/auth/";

export const PATIENT_REQUEST = process.env.REACT_APP_URL + "/api/v1/patient/";
export const PATIENT_FILTER_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/patient/filter?";
export const PATIENT_ASSIGN_NURSE =
  process.env.REACT_APP_URL + "/api/v1/patient/asign-nurse/";

export const EMPLOYEE_FILTER_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/employee/filter?";
export const EMPLOYEE_REQUEST = process.env.REACT_APP_URL + "/api/v1/employee/";
export const EMPLOYEE_NURSES_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/employee/nurses";
export const EMPLOYEE_NURSE_PATIENTS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/patient/nurse-patients/";
export const EMPLOYEE_DOCTORS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/employee/doctors";
export const CHANGE_PASSWORD =
  process.env.REACT_APP_URL + "/api/v1/employee/change-password/";

export const NOTIFICATION_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/";
export const PATIENT_NOTIFICATIONS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/patient-notifications/";
export const NURSE_NOTIFICATIONS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/nurse-notifications/";
export const DOCTOR_NOTIFICATIONS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/doctor-notifications/";
export const NEW_DOCTOR_NOTIFICATIONS =
  process.env.REACT_APP_URL + "/api/v1/notification/new-doctor-notifications/";
export const CONFIRM_NOTIFICATION =
  process.env.REACT_APP_URL + "/api/v1/notification/confirm-notification/";
export const NOT_SEEN_NOTIFICATION =
  process.env.REACT_APP_URL + "/api/v1/notification/not-seen-notification/";

const Requests = {
  DAILY_FORM_REQUEST,
  RED_EVAT_REQUEST,
  PATIENT_FILTER_REQUEST,
  RECORD_REQUEST,
  PATIENT_REQUEST,
  EMPLOYEE_FILTER_REQUEST,
  EMPLOYEE_REQUEST,
  PATIENT_ASSIGN_NURSE,
  LOGIN_REQUEST,
  EMPLOYEE_NURSES_REQUEST,
  EMPLOYEE_NURSE_PATIENTS_REQUEST,
  EMPLOYEE_DOCTORS_REQUEST,
  NOTIFICATION_REQUEST,
  PATIENT_NOTIFICATIONS_REQUEST,
  DOCTOR_NOTIFICATIONS_REQUEST,
  NURSE_NOTIFICATIONS_REQUEST,
  PATIENT_EVAT_FORMS,
  NEW_DOCTOR_NOTIFICATIONS,
  CONFIRM_NOTIFICATION,
  NOT_SEEN_NOTIFICATION,
  CHANGE_PASSWORD,
};

export default Requests;
