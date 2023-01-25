import React, { useContext, useEffect } from "react";
import { StaffContext } from "../../contexts/staffContext";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";
import useStaffActions from "../../hooks/Actions/useStaffActions";
import Components from "..";

const UpdateStaff = () => {
  const { cleanMessage, errorMessage } = useContext(ErrorMessageContext);
  const { staff } = useContext(StaffContext);
  const { updateStaff } = useStaffActions();

  useEffect(() => cleanMessage(), []);

  return (
    <>
      <div className="title-container-border">
        <h2>Update Staff</h2>
      </div>
      <div className="vw-50 vh-80 flex-center overflow-hidden">
        <Components.StaffForm
          action={updateStaff}
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
