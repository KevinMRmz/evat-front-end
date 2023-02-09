import React, { useState, useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import { Titles } from "../../../constants/titles";
import Layouts from "../../../layouts";
import Components from "../../../components";
import Modal from "react-responsive-modal";

const NotificationsRecord = () => {
  const { user } = useContext(UserContext);
  const { doctorNotifications } = useFetch();
  const { data, setData } = useFetchDataById(doctorNotifications, user.id);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({});

  const updateNotifications = (id) => {
    const newData = data.filter((notification) => notification._id !== id);

    setData(newData);
  };

  return (
    <>
      <Layouts.CardsLayout
        title={Titles.NOTIFICATION_RECORD}
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
          updateNotifications={updateNotifications}
          action={"NOT_CONFIRMED"}
        />
      </Modal>
    </>
  );
};

export default NotificationsRecord;
