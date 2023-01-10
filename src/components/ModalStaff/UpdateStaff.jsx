import React, { useContext, useEffect } from "react";
import { StaffContext } from "../../contexts/staffContext";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";
import Messages from "../../constants/alertMessages";
import useFetch from "../../hooks/useFetch";
import Components from "..";
import useAlert from "../../hooks/useAlert";

const UpdateStaff = () => {
  const { updateEmployee } = useFetch();
  const { cleanMessage, errorMessage } = useContext(ErrorMessageContext);
  const { confirmAlertSuccessMsg } = useAlert();
  const { staff, setStaffInfo } = useContext(StaffContext);
  const { QuestionMessages, ResponseMessages } = Messages;

  useEffect(() => cleanMessage(), []);

  const onSubmit = confirmAlertSuccessMsg(
    async (data) => {
      const result = await updateEmployee(staff.id, {
        ...data,
      });
      setStaffInfo(result);
    },
    QuestionMessages.EMPLOYEE_FORM,
    ResponseMessages.EMPLOYEE_UPDATED
  );

  return (
    <>
      <div className="title-container-border">
        <h2>Update Staff</h2>
      </div>
      <div className="vw-50 vh-80 flex-center overflow-hidden">
        <Components.StaffForm
          action={onSubmit}
          staffDefaultInfo={staff}
          roleUser={staff.role}
        >
          <Components.Message message={errorMessage} />
        </Components.StaffForm>
      </div>
    </>
  );
};

export default UpdateStaff;
