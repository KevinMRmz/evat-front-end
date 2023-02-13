import usePatientContextActions from "../../api/patient-service/patient-actions";
import { useNavigate } from "react-router-dom";
import Modal from "react-responsive-modal";
import React, { useState } from "react";
import Modals from "../Modals";

const PatientHeader = ({ id }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const navigate = useNavigate();

  const { deletePatientHome, deleteNurseId } = usePatientContextActions();

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
      <div>
        <span
          className="mr-5 pointer icon-size add-nurse"
          onClick={() => navigate("/admin/assign-nurse/" + id)}
        >
          <ion-icon name="medkit"></ion-icon>
        </span>
      </div>
      <div>
        <span
          className="mr-5 pointer icon-size delete-user"
          onClick={() => deletePatientHome(id)}
        >
          <ion-icon name="trash"></ion-icon>
        </span>
      </div>
      <div>
        <span
          className="pointer icon-size remove-nurse"
          onClick={() => deleteNurseId(id)}
        >
          <ion-icon name="remove"></ion-icon>
        </span>
      </div>
      <Modal open={updateModal} onClose={() => setUpdateModal(false)}>
        <Modals.UpdatePatient />
      </Modal>
    </div>
  );
};

export default PatientHeader;
