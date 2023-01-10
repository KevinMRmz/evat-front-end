const QuestionMessages = {
  ASSIGN_PATIENT: "Do you want to assign this nurse for this patient?",
  PATIENT_FORM:
    "Are you sure the information provided to register the patient is correct?",
  EMPLOYEE_FORM:
    "Are you sure the information provided to register the employee is correct?",
  REMOVE_NURSE_PATIENT:
    "Are you sure you want to remove the current nurse for this patient?",
  SEND_NOTIFICATION: "Are you sure to send this notification?",
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
};

const Messages = {
  QuestionMessages,
  ButtonMessages,
  ResponseMessages,
};

export default Messages;
