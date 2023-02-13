import { useEmployeeActions } from "../../../api/staff-service/staff-actions";
import GeneralComponents from "../../../components/GeneralComponents";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";
import Forms from "../../../forms";
import React from "react";

const AddStaff = () => {
  const { createEmployee } = useEmployeeActions();

  return (
    <Layouts.AddUserLayout>
      <GeneralComponents.Title title={Titles.ADD_EMPLOYEE} />
      <Forms.StaffForm action={createEmployee} />
    </Layouts.AddUserLayout>
  );
};

export default AddStaff;
