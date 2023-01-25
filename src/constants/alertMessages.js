const QuestionMessages = {
  ASSIGN_PATIENT: "Do you want to assign this nurse for this patient?",
  PATIENT_FORM:
    "Are you sure the information provided to register the patient is correct?",
  EMPLOYEE_FORM:
    "Are you sure the information provided to register the employee is correct?",
  REMOVE_NURSE_PATIENT:
    "Are you sure you want to remove the current nurse for this patient?",
  SEND_NOTIFICATION: "Are you sure to send this notification?",
  DELETE_NOTIFICATION: "Are you sure you want to delete this notification?",
  EVAT_FORM: "Are you sure to send this Evat form?",
  DELETE_EVAT_FORM: "Are you sure to delete this Evat form?",
  DELETE_ALL_PATIENT_EVAT_FORM: "Are you sure to delete all Evat forms?",
};

const ButtonMessages = {};

const ResponseMessages = {
  PATIENT_CREATED: "Patient Registered successfully!",
  PATIENT_UPDATED: "Patient has been updated successfully!",
  EMPLOYEE_CREATED: "Employee Registered successfully!",
  EMPLOYEE_UPDATED: "Employee has been updated successfully!",
  ASSIGN_PATIENT: "Patient has been assigned to a nurse successfully!",
  REMOVE_PATIENT_NURSE: "The nurse assigned for this patient has been removed!",
  SEND_NOTIFICATION: "The notification has been sent successfully!",
  DELETE_NOTIFICATION: "The notification has been deleted successfully!",
  EVAT_FORM: "Evat form was created successfully!",
  DELETE_EVAT_FORM: "Evat form has been deleted!",
  DELETE_ALL_PATIENT_EVAT_FORM: "All evat forms have been deleted!",
};

const Messages = {
  QuestionMessages,
  ButtonMessages,
  ResponseMessages,
};

export default Messages;
