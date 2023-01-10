import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-responsive-modal";
import Components from "..";

const PatientButtons = ({ id }) => {
  const navigate = useNavigate();

  const [recordModal, setRecordModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  return (
    <div className="flex justify-evenly w-100">
      <button
        className="btn w-30 bg-orange"
        onClick={() => setNotificationModal(true)}
      >
        Send Notification
      </button>
      <button className="btn w-30" onClick={() => setRecordModal(true)}>
        Patient Record
      </button>
      <button
        className="btn w-30 bg-green"
        onClick={() => navigate("/evat-form/" + id)}
      >
        Evat Form
      </button>

      <Modal open={recordModal} onClose={() => setRecordModal(false)}>
        <Components.RecordModal id={id} />
      </Modal>
      <Modal
        open={notificationModal}
        onClose={() => setNotificationModal(false)}
      >
        <Components.NotificationModal
          idPatient={id}
          idTransmitter={"63b1f362e650d1d3e3dfe5ae"}
        />
      </Modal>
    </div>
  );
};

export default PatientButtons;
