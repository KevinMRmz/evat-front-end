import useAlert from "../useAlert";
import useFetch from "../useFetch";
import Messages from "../../constants/alertMessages";
import { useNavigate } from "react-router-dom";
import { StaffContext } from "../../contexts/staffContext";
import { useContext } from "react";

const useStaffActions = () => {
  const { staff, setStaffInfo } = useContext(StaffContext);
  const { QuestionMessages, ResponseMessages } = Messages;
  const { confirmAlertSuccessMsg } = useAlert();
  const { updateEmployee, deleteEmployee } = useFetch();
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
    navigate("/admin/staff-search");
  });

  return { updateStaff, deleteEmployeeRequest };
};

export const useCreateEmployee = () => {
  const { QuestionMessages, ResponseMessages } = Messages;
  const { confirmAlertErrorSuccessMsg } = useAlert();
  const { AddStaff } = useFetch();

  const createPatient = confirmAlertErrorSuccessMsg(
    async (data) => {
      await AddStaff({ ...data });
    },
    QuestionMessages.EMPLOYEE_FORM,
    ResponseMessages.EMPLOYEE_CREATED
  );

  return createPatient;
};

export default useStaffActions;
