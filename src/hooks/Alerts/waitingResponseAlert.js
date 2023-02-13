import Swal from "sweetalert2";
import throwErrorMessage from "../../utils/throwErrorMessage";
import { useContext } from "react";
import { LoaderContext } from "../../contexts/loaderContext";

const useWaitingResponseAlertError = () => {
  const { hiddeLoader, showLoader } = useContext(LoaderContext);

  /**
   * @description
   * Handle the possible errors during the execution of a function
   * with a modal that shows the error messages.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   */
  const waitingResponseAlertError = (func) => {
    return async (...args) => {
      showLoader();
      try {
        // if an error occurs the error's message will be handled
        const funcErrorHandled = throwErrorMessage(func);

        // the new function will handle the error's message
        const result = await funcErrorHandled(...args);

        hiddeLoader();
        return result;
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

  return waitingResponseAlertError;
};

export default useWaitingResponseAlertError;
