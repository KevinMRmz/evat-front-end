import useStaffActions from "../../../hooks/Actions/useStaffActions";
import { StaffContext } from "../../../contexts/staffContext";
import { useSetStaffInfo } from "../../../hooks/DefaultInfo";
import GeneralComponents from "../../GeneralComponents";
import { Titles } from "../../../constants/titles";
import React, { useContext } from "react";
import Layouts from "../../../layouts";
import Forms from "../../../forms";

const UpdateStaff = () => {
  const { staff } = useContext(StaffContext);
  const defaultInfo = useSetStaffInfo(staff);
  const { updateStaff } = useStaffActions();

  return (
    <Layouts.ModalLayout>
      <GeneralComponents.Title title={Titles.UPDATE_STAFF} />
      <Forms.StaffForm
        action={updateStaff}
        staffDefaultInfo={defaultInfo}
        isUpdating={true}
      />
    </Layouts.ModalLayout>
  );
};

export default UpdateStaff;
