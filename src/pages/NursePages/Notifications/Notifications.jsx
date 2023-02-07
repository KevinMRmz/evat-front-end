import React, { useState, useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import Components from "../../../components";
import Modal from "react-responsive-modal";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";

const Notifications = () => {
  const { user } = useContext(UserContext);
  const { nurseNotifications } = useFetch();
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({});
  const { data, updateDataById } = useFetchDataById(
    nurseNotifications,
    user.id
  );

  return (
    <>
      <Layouts.CardsLayout
        title={Titles.NURSE_NOTIFICATIONS}
        cards={data.map((result) => (
          <div
            onClick={() => {
              setNotification(result);
              setOpen(true);
            }}
          >
            {<Components.NotificationCard notification={result} />}
          </div>
        ))}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Components.NotificationModalInfo
          notification={notification}
          updateNotifications={updateDataById}
          action={"DELETE"}
        />
      </Modal>
    </>
  );
};

export default Notifications;
