import useStaffActions from "../../hooks/Actions/useStaffActions";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import Components from "..";
import ChangePassword from "../ModalStaff/ChangePassword";
import Modals from "../Modals";

const StaffHeader = ({ staff }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [patientModal, setPatientModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const { deleteEmployeeRequest } = useStaffActions();

  return (
    <div className="flex">
      <div>
        <span
          className="mr-5 pointer icon-size edit"
          onClick={() => setUpdateModal(true)}
        >
          <ion-icon name="create"></ion-icon>
        </span>
      </div>
      {staff.role === "NURSE" ? (
        <div>
          <span
            className="mr-5 pointer icon-size add-nurse"
            onClick={() => setPatientModal(true)}
          >
            <ion-icon name="medkit"></ion-icon>
          </span>
        </div>
      ) : (
        <></>
      )}
      <div>
        <span
          className="mr-5 pointer icon-size"
          onClick={() => setChangePasswordModal(true)}
        >
          <ion-icon name="unlock"></ion-icon>
        </span>
      </div>
      <div>
        <span
          className="mr-5 pointer icon-size delete-user"
          onClick={() => deleteEmployeeRequest(staff.id)}
        >
          <ion-icon name="trash"></ion-icon>
        </span>
      </div>
      <Modal open={updateModal} onClose={() => setUpdateModal(false)}>
        <Modals.UpdateStaff />
      </Modal>
      <Modal open={patientModal} onClose={() => setPatientModal(false)}>
        <Components.NursePatients idNurse={staff.id} />
      </Modal>
      <Modal
        open={changePasswordModal}
        onClose={() => setChangePasswordModal(false)}
      >
        <ChangePassword id={staff.id} />
      </Modal>
    </div>
  );
};

export default StaffHeader;
