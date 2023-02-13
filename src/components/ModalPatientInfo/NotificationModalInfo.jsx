import useNotificationsActions from "../../api/notification-service/notification-actions";
import { NotificationManager } from "react-notifications";
import { UserContext } from "../../contexts/userContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NotificationModalInfo = ({
  notification,
  updateNotifications,
  action,
}) => {
  const {
    deleteNotificationRequest,
    notificationConfirmed,
    notificationNotConfirmed,
  } = useNotificationsActions();

  const ColorList = {
    DELETE: "#F00",
    CONFIRM_NOTIFICATION: "#0F0",
    NOT_CONFIRMED: "#FA0",
  };

  const notificationAction = async () => {
    const { _id: id } = notification;
    let notif;

    switch (action) {
      case "DELETE":
        notif = await deleteNotificationRequest(id);
        if (notif) updateNotifications(id);
        break;
      case "CONFIRM_NOTIFICATION":
        notif = await notificationConfirmed(id);
        if (notif) updateNotifications(id);
        NotificationManager.success("Notification marked as seen", "Completed");
        break;
      case "NOT_CONFIRMED":
        await notificationNotConfirmed(id);
        NotificationManager.warning(
          "Notification marked as not seen",
          "Completed"
        );
        break;
      default:
        throw new Error("No action has been specified");
    }
  };

  const { user } = useContext(UserContext);

  return (
    <>
      <div>
        <h2 className="title-container-border">Notification</h2>
      </div>
      <div className="vw-50 vh-80 flex flex-column justify-evenly">
        <div>
          <div className="title-container-border">
            <h3>Title:</h3>
          </div>
          <p className="m-5">{notification.title}</p>
        </div>
        <div>
          <div className="title-container-border">
            <h3>Description: </h3>
          </div>
          <p className="m-5">{notification.description}</p>
        </div>
        <div>
          <div className="title-container-border">
            <h3>Patient: </h3>
          </div>
          <Link
            to={`/${user.role.toLowerCase()}/patient/` + notification.idPatient}
            className="no-decoration text-blue"
          >
            <p className="m-5">{notification.idPatient}</p>
          </Link>
        </div>
        <div>
          <div className="title-container-border">
            <h3>Nurse: </h3>
          </div>
          <Link
            to={
              `/${user.role.toLowerCase()}/staff/` + notification.idTransmitter
            }
            className="no-decoration text-blue"
          >
            <p className="m-5">{notification.idTransmitter}</p>
          </Link>
        </div>
        <div>
          <div className="title-container-border">
            <h3>Doctor: </h3>
          </div>
          <Link
            to={`/${user.role.toLowerCase()}/staff/` + notification.idDoctor}
            className="no-decoration text-blue"
          >
            <p className="m-5">{notification.idDoctor}</p>
          </Link>
        </div>
        <div className="flex-center w-100">
          <button
            className="btn w-70"
            style={{ "background-color": ColorList[action] }}
            onClick={async () => await notificationAction()}
          >
            {action === "DELETE" ? (
              <>Delete Notification</>
            ) : action === "CONFIRM_NOTIFICATION" ? (
              <>Mark as seen</>
            ) : action === "NOT_CONFIRMED" ? (
              <>Mark as not seen</>
            ) : (
              <></>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationModalInfo;
