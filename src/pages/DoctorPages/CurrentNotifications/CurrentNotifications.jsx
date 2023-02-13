import React, { useState, useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import { UserContext } from "../../../contexts/userContext";
import Components from "../../../components";
import Layouts from "../../../layouts";
import Modal from "react-responsive-modal";
import { Titles } from "../../../constants/titles";

const CurrentNotifications = () => {
  const { user } = useContext(UserContext);
  const { newDoctorNotifications } = useFetch();
  const { data, updateDataById } = useFetchDataById(
    newDoctorNotifications,
    user.id
  );
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({});

  return (
    <>
      <Layouts.CardsLayout
        title={Titles.CURRENT_NOTIFICATIONS}
        cards={data.map((result) => (
          <div
            onClick={() => {
              setNotification(result);
              setOpen(true);
            }}
          >
            <Components.NotificationCard notification={result} />
          </div>
        ))}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Components.NotificationModalInfo
          notification={notification}
          updateNotifications={updateDataById}
          action={"CONFIRM_NOTIFICATION"}
        />
      </Modal>
    </>
  );
};

export default CurrentNotifications;
