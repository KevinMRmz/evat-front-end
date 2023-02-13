import { StaffService } from "./staff-service";
import useConfirmAlertWithSuccessAlert from "../../hooks/Alerts/confirmAlertWithSuccessAlert";
import useConfirmAlertErrorMsgSuccessAlert from "../../hooks/Alerts/confirmAlertErrorMsgSuccessAlert";
import useWaitingResponseAlertError from "../../hooks/Alerts/waitingResponseAlert";
import Messages from "../../constants/alertMessages";
import { useNavigate } from "react-router-dom";
import { StaffContext } from "../../contexts/staffContext";
import { useContext, useState } from "react";

const staffService = new StaffService();

const useEmployeeContextActions = () => {
  const { staff, setStaffInfo } = useContext(StaffContext);
  const { QuestionMessages, ResponseMessages } = Messages;
  const confirmAlertWithSuccessAlert = useConfirmAlertWithSuccessAlert();
  const navigate = useNavigate();

  const updateStaff = confirmAlertWithSuccessAlert(
    async (data) => {
      const result = await staffService.updateEmployee(staff.id, {
        ...data,
      });
      setStaffInfo(result);
    },
    QuestionMessages.EMPLOYEE_FORM,
    ResponseMessages.EMPLOYEE_UPDATED
  );

  const deleteEmployeeRequest = confirmAlertWithSuccessAlert(async (id) => {
    await staffService.deleteEmployee(id);
    navigate("/admin/");
  });

  const newPassword = confirmAlertWithSuccessAlert(
    async ({ password, confirmPassword }, id) => {
      if (password !== confirmPassword) {
        throw new Error("Passwords are different");
      }

      await staffService.changePassword(password, id);
    }
  );

  return { updateStaff, deleteEmployeeRequest, newPassword };
};

export const useEmployeeActions = () => {
  const { QuestionMessages, ResponseMessages } = Messages;
  const ConfirmAlertErrorSuccessAlert = useConfirmAlertErrorMsgSuccessAlert();
  const waitingResponseAlertError = useWaitingResponseAlertError();
  const [employees, setEmployees] = useState([]);

  const createEmployee = ConfirmAlertErrorSuccessAlert(
    async (data) => {
      await staffService.addEmployee({ ...data });
    },
    QuestionMessages.EMPLOYEE_FORM,
    ResponseMessages.EMPLOYEE_CREATED
  );

  const searchEmployees = waitingResponseAlertError(async (query) => {
    const result = await staffService.getEmployeesFilter(query);
    setEmployees(result);
  });

  return { createEmployee, searchEmployees, employees };
};

export default useEmployeeContextActions;
