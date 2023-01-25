import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useFetchDataById from "../../../hooks/useFetchDataById";
import Components from "../../../components";
import Modal from "react-responsive-modal";

const CurrentNotifications = () => {
  const idDoctor = "63b59a69775e132b0acec6e6";
  const { newDoctorNotifications } = useFetch();
  const { data, setData } = useFetchDataById(newDoctorNotifications, idDoctor);
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
          <h2>Your Current Notifications</h2>
        </div>
      </div>
      <div className="w-100 flex-center mt-5">
        <div className="flex w-90 vh-70 flex-column overflow-y-scroll">
          {data.length !== 0 ? (
            data.map((result) => (
              <div
                onClick={() => {
                  setNotification(result);
                  setOpen(true);
                }}
              >
                <Components.NotificationCard notification={result} />
              </div>
            ))
          ) : (
            <h2 className="danger-text m-5 text-center">
              No Current Records where found
            </h2>
          )}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Components.NotificationModalInfo
          notification={notification}
          updateNotifications={updateNotifications}
          action={"CONFIRM_NOTIFICATION"}
        />
      </Modal>
    </>
  );
};

export default CurrentNotifications;
