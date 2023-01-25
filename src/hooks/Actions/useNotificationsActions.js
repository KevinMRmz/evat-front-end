import useAlert from "../useAlert";
import useFetch from "../useFetch";
import Messages from "../../constants/alertMessages";

const useNotificationsActions = () => {
  const { confirmAlertSuccessMsg, waitingResponseAlert } = useAlert();
  const {
    postNotification,
    deleteNotification,
    confirmNotification,
    notSeenNotification,
  } = useFetch();
  const { QuestionMessages, ResponseMessages } = Messages;

  const createNotification = confirmAlertSuccessMsg(
    async (data, idPatient, idDoctor, idTransmitter) => {
      await postNotification({
        ...data,
        idPatient,
        idDoctor,
        idTransmitter,
      });
    },
    QuestionMessages.SEND_NOTIFICATION,
    ResponseMessages.SEND_NOTIFICATION
  );

  const deleteNotificationRequest = confirmAlertSuccessMsg(
    async (id) => await deleteNotification(id),
    QuestionMessages.DELETE_NOTIFICATION,
    ResponseMessages.DELETE_NOTIFICATION
  );

  const notificationConfirmed = waitingResponseAlert(
    async (id) => await confirmNotification(id)
  );

  const notificationNotConfirmed = waitingResponseAlert(
    async (id) => await notSeenNotification(id)
  );

  return {
    createNotification,
    deleteNotificationRequest,
    notificationConfirmed,
    notificationNotConfirmed,
  };
};

export default useNotificationsActions;
