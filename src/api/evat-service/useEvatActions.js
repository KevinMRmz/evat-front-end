import { EvatService } from "./EvatService";
import useConfirmAlertErrorMsgSuccessAlert from "../../hooks/Alerts/confirmAlertErrorMsgSuccessAlert";
import useConfirmAlertWithSuccessAlert from "../../hooks/Alerts/confirmAlertWithSuccessAlert";
import Messages from "../../constants/alertMessages";

const evatService = new EvatService();

const useEvatActions = () => {
  const confirmErrorMsgSuccessAlert = useConfirmAlertErrorMsgSuccessAlert();
  const confirmAlertErrorMsgSuccessAlert = useConfirmAlertWithSuccessAlert();
  const { ResponseMessages, QuestionMessages } = Messages;

  const createEvatForm = confirmErrorMsgSuccessAlert(
    async (data) => {
      await evatService.postEvatForm({
        ...data,
      });
    },
    QuestionMessages.EVAT_FORM,
    ResponseMessages.EVAT_FORM
  );

  const removeEvatForm = confirmAlertErrorMsgSuccessAlert(
    async (id) => await evatService.deleteEvatForm(id),
    QuestionMessages.DELETE_EVAT_FORM,
    ResponseMessages.DELETE_EVAT_FORM
  );

  const removeAllPatientForms = confirmAlertErrorMsgSuccessAlert(
    async (idPatient) => await evatService.deleteAllPatientForms(idPatient),
    QuestionMessages.DELETE_ALL_PATIENT_EVAT_FORM,
    ResponseMessages.DELETE_ALL_PATIENT_EVAT_FORM
  );

  return { createEvatForm, removeEvatForm, removeAllPatientForms };
};

export default useEvatActions;
