import throwErrorMessage from "../../utils/throwErrorMessage";
import { useContext } from "react";
import { LoaderContext } from "../../contexts/loaderContext";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";

const useMessageErrorWrapper = () => {
  const { cleanMessage, setErrorMessage } = useContext(ErrorMessageContext);
  const { hiddeLoader, showLoader } = useContext(LoaderContext);

  /**
   * @description
   * Handle the possible errors during the execution of a function
   * setting the error message.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   */
  const messageErrorWrapper = (func) => {
    return async (...args) => {
      cleanMessage();
      try {
        showLoader();

        // if an error occurs the error's message will be handled
        const funcErrorHandled = throwErrorMessage(func);

        // the new function will handle the error's message
        const result = await funcErrorHandled(...args);

        // The loader is hiddden
        hiddeLoader();

        // The result of the function will be returned
        return result;
      } catch (error) {
        // Set the specific message to the error message context
        setErrorMessage(error.message);

        // The loader is hiddden
        hiddeLoader();
      }
    };
  };

  return messageErrorWrapper;
};

export default useMessageErrorWrapper;
