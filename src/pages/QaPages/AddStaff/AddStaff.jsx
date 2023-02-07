import GeneralComponents from "../../../components/GeneralComponents";
import { useEmployee } from "../../../hooks/Actions/useStaffActions";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";
import Forms from "../../../forms";
import React from "react";

const AddStaff = () => {
  const { createEmployee } = useEmployee();

  return (
    <Layouts.AddUserLayout>
      <GeneralComponents.Title title={Titles.ADD_EMPLOYEE} />
      <Forms.StaffForm action={createEmployee} />
    </Layouts.AddUserLayout>
  );
};

export default AddStaff;
