import React, { useState } from "react";
import Modal from "react-responsive-modal";
import Components from "..";
import usePatientActions from "../../hooks/Actions/usePatientActions";

const PatientHeader = ({ setPatientInfo, id }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [nursesModal, setNursesModal] = useState(false);

  const { deletePatientHome, deleteNurseId } = usePatientActions();

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
          onClick={() => setNursesModal(true)}
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
        <Components.ModalPatientUpdate />
      </Modal>
      <Modal open={nursesModal} onClose={() => setNursesModal(false)}>
        <Components.ModalPatientNurses />
      </Modal>
    </div>
  );
};

export default PatientHeader;
