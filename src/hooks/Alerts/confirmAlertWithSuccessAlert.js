import alertQuestion from "../../utils/alertQuestion";
import { useContext } from "react";
import { LoaderContext } from "../../contexts/loaderContext";
import throwErrorMessage from "../../utils/throwErrorMessage";
import Swal from "sweetalert2";

const useConfirmAlertWithSuccessAlert = () => {
  const { hiddeLoader, showLoader } = useContext(LoaderContext);

  /**
   * @description
   * Provides a modal question to confirm the execution of the callback passed as a parameter,
   * Shows a success modal in case that the function has been called successfully,
   * and Handle the possible errors during the execution of a function with a modal.
   *
   * @param {Function} func Function called right after to confirm the modal
   * @param {String} [msg] Title of the modal question
   * @param {String} [successMsg] Title of the success modal
   * @returns Return the result of the function provided as a parameter
   */
  const confirmAlertWithSuccessAlert = (
    func,
    msg = "You won't be able to revert this!",
    successMsg = "Task completed successfully!",
    btnMsg = "Yes!"
  ) => {
    return async (...args) => {
      try {
        if (await alertQuestion(msg, btnMsg)) {
          showLoader();

          // if an error occurs the error's message will be handled
          const funcErrorHandled = throwErrorMessage(func);

          // the new function will handle the error's message
          const result = await funcErrorHandled(...args);

          // The loader is hidden
          hiddeLoader();

          // Shows a success alert
          Swal.fire("Success", successMsg, "success");

          // return the result of the function
          return result;
        }
      } catch (error) {
        hiddeLoader();

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    };
  };

  return confirmAlertWithSuccessAlert;
};

export default useConfirmAlertWithSuccessAlert;
