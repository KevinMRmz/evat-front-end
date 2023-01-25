import useAlert from "../useAlert";
import useFetch from "../useFetch";
import Messages from "../../constants/alertMessages";

const useEvatAction = () => {
  const { confirmAlertErrorSuccessMsg } = useAlert();
  const { postEvatForm, deleteEvatForm, deletePatientEvatForms } = useFetch();
  const { ResponseMessages, QuestionMessages } = Messages;

  const createEvatForm = confirmAlertErrorSuccessMsg(
    async (data) => {
      await postEvatForm({
        ...data,
      });
    },
    QuestionMessages.EVAT_FORM,
    ResponseMessages.EVAT_FORM
  );

  const removeEvatForm = confirmAlertErrorSuccessMsg(
    async (id) => await deleteEvatForm(id),
    QuestionMessages.DELETE_EVAT_FORM,
    ResponseMessages.DELETE_EVAT_FORM
  );

  const removeAllPatientForms = confirmAlertErrorSuccessMsg(
    async (idPatient) => await deletePatientEvatForms(idPatient),
    QuestionMessages.DELETE_ALL_PATIENT_EVAT_FORM,
    ResponseMessages.DELETE_ALL_PATIENT_EVAT_FORM
  );

  return { createEvatForm, removeEvatForm, removeAllPatientForms };
};

export default useEvatAction;
