import useAlert from "../useAlert";
import useFetch from "../useFetch";
import Messages from "../../constants/alertMessages";
import { useNavigate } from "react-router-dom";
import { StaffContext } from "../../contexts/staffContext";
import { useContext, useState } from "react";

const useStaffActions = () => {
  const { staff, setStaffInfo } = useContext(StaffContext);
  const { QuestionMessages, ResponseMessages } = Messages;
  const { confirmAlertSuccessMsg } = useAlert();
  const { updateEmployee, deleteEmployee, changePassword } = useFetch();
  const navigate = useNavigate();

  const updateStaff = confirmAlertSuccessMsg(
    async (data) => {
      const result = await updateEmployee(staff.id, {
        ...data,
      });
      setStaffInfo(result);
    },
    QuestionMessages.EMPLOYEE_FORM,
    ResponseMessages.EMPLOYEE_UPDATED
  );

  const deleteEmployeeRequest = confirmAlertSuccessMsg(async (id) => {
    await deleteEmployee(id);
    navigate("/admin/");
  });

  const newPassword = confirmAlertSuccessMsg(
    async ({ password, confirmPassword }, id) => {
      if (password !== confirmPassword) {
        throw new Error("Passwords are different");
      }

      await changePassword({ password }, id);
    }
  );

  return { updateStaff, deleteEmployeeRequest, newPassword };
};

export const useEmployee = () => {
  const { QuestionMessages, ResponseMessages } = Messages;
  const { confirmAlertErrorSuccessMsg, waitingResponseAlert } = useAlert();
  const { AddStaff, getEmployeesFilter } = useFetch();
  const [employees, setEmployees] = useState([]);

  const createEmployee = confirmAlertErrorSuccessMsg(
    async (data) => {
      await AddStaff({ ...data });
    },
    QuestionMessages.EMPLOYEE_FORM,
    ResponseMessages.EMPLOYEE_CREATED
  );

  const searchEmployees = waitingResponseAlert(async (query) => {
    const result = await getEmployeesFilter(query);
    setEmployees(result);
  });

  return { createEmployee, searchEmployees, employees };
};

export default useStaffActions;
