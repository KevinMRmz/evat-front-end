import React, { useContext, useEffect } from "react";
import { ErrorMessageContext } from "../../../contexts/errorMessageContext";
import { useEmployee } from "../../../hooks/Actions/useStaffActions";
import Components from "../../../components";
import "./add-staff.css";

const AddStaff = () => {
  const { errorMessage, cleanMessage } = useContext(ErrorMessageContext);
  const { createEmployee } = useEmployee();

  useEffect(() => cleanMessage(), []);

  return (
    <div className="main-patient-container flex flex-column">
      <div className="w-60 mt-5 title-container-patients">
        <h2 className="p-5">Add staff</h2>
      </div>
      <Components.StaffForm action={createEmployee}>
        <Components.Message message={errorMessage} />
      </Components.StaffForm>
    </div>
  );
};

export default AddStaff;
