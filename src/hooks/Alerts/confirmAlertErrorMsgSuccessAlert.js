import Swal from "sweetalert2";
import alertQuestion from "../../utils/alertQuestion";
import throwErrorMessage from "../../utils/throwErrorMessage";
import { useContext } from "react";
import { LoaderContext } from "../../contexts/loaderContext";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";

const useConfirmAlertErrorMsgSuccessAlert = () => {
  const { cleanMessage, setErrorMessage } = useContext(ErrorMessageContext);
  const { hiddeLoader, showLoader } = useContext(LoaderContext);

  /**
   * @description
   * Provides a modal question to confirm the execution of the callback passed as a parameter,
   * Shows a success modal in case that the function has been called successfully,
   * and Handle the possible errors during the execution of a function with a message.
   *
   * @param {Function} func Function called right after to confirm the modal
   * @param {String} [msg] Title of the modal question
   * @param {String} [successMsg] Title of the success modal
   * @param {String} [btnMsg] Button message
   * @returns Return the result of the function provided as a parameter
   */
  const confirmAlertErrorMsgSuccessAlert = (
    func,
    msg = "You won't be able to revert this!",
    successMsg = "Task completed successfully!",
    btnMsg = "Yes!"
  ) => {
    return async (...args) => {
      try {
        if (await alertQuestion(msg, btnMsg)) {
          cleanMessage();

          showLoader();

          // if an error occurs the error's message will be handled
          const funcErrorHandled = throwErrorMessage(func);

          // the new function will handle the error's message
          const result = await funcErrorHandled(...args);

          hiddeLoader();
          Swal.fire("Success", successMsg, "success");
          return result;
        }
      } catch (error) {
        setErrorMessage(error.message);
        hiddeLoader();
      }
    };
  };

  return confirmAlertErrorMsgSuccessAlert;
};

export default useConfirmAlertErrorMsgSuccessAlert;
