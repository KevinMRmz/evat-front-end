import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import Components from "../../../components";
import Modal from "react-responsive-modal";

const Notifications = () => {
  const idNurse = "63b1f362e650d1d3e3dfe5ae";
  const { nurseNotifications } = useFetch();
  const { data, setData } = useFetchDataById(nurseNotifications, idNurse);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({});

  const updateNotifications = (id) => {
    const newData = data.filter((notification) => notification._id !== id);

    setData(newData);
  };

  return (
    <>
      <div className="flex justify-center w-90 m-5">
        <div className="w-80 m-5 title-container-patients">
          <h2>Your Notifications</h2>
        </div>
      </div>
      <div className="w-100 flex-center mt-5">
        <div className="flex w-90 vh-70 flex-column overflow-y-scroll">
          {data.map((result) => (
            <div
              onClick={() => {
                setNotification(result);
                setOpen(true);
              }}
            >
              <Components.NotificationCard notification={result} />
            </div>
          ))}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Components.NotificationModalInfo
          notification={notification}
          updateNotifications={updateNotifications}
          action={"DELETE"}
        />
      </Modal>
    </>
  );
};

export default Notifications;
