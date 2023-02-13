import { NotificationsService } from "./notification-service";
import useWaitingResponseAlert from "../../hooks/Alerts/waitingResponseAlert";
import useConfirmAlertWithSuccessAlert from "../../hooks/Alerts/confirmAlertWithSuccessAlert";
import Messages from "../../constants/alertMessages";

const notificationService = new NotificationsService();

const useNotificationsActions = () => {
  const waitingResponseAlert = useWaitingResponseAlert();
  const confirmAlertWithSuccessAlert = useConfirmAlertWithSuccessAlert();
  const { QuestionMessages, ResponseMessages } = Messages;

  const createNotification = confirmAlertWithSuccessAlert(
    async (data, idPatient, idDoctor, idTransmitter) => {
      await notificationService.postNotification({
        ...data,
        idPatient,
        idDoctor,
        idTransmitter,
      });
    },
    QuestionMessages.SEND_NOTIFICATION,
    ResponseMessages.SEND_NOTIFICATION
  );

  const deleteNotificationRequest = confirmAlertWithSuccessAlert(
    async (id) => await notificationService.deleteNotification(id),
    QuestionMessages.DELETE_NOTIFICATION,
    ResponseMessages.DELETE_NOTIFICATION
  );

  const notificationConfirmed = waitingResponseAlert(
    async (id) => await notificationService.confirmNotification(id)
  );

  const notificationNotConfirmed = waitingResponseAlert(
    async (id) => await notificationService.notSeenNotification(id)
  );

  return {
    createNotification,
    deleteNotificationRequest,
    notificationConfirmed,
    notificationNotConfirmed,
  };
};

export default useNotificationsActions;
