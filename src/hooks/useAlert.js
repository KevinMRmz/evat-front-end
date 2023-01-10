import Swal from "sweetalert2";
import { useContext } from "react";
import { LoaderContext } from "../contexts/loaderContext";
import { ErrorMessageContext } from "../contexts/errorMessageContext";

const useAlert = () => {
  const { hiddeLoader, showLoader } = useContext(LoaderContext);
  const { cleanMessage, setErrorMessage } = useContext(ErrorMessageContext);

  /**
   * @description
   * Provides a modal question to confirm the execution of the callback passed as a parameter
   * and Handle the possible errors during the execution of a function.
   *
   * @param {Function} func Provide a function to be called right after to confirm the swal modal
   * @param {String} [msg] Title of the modal question
   * @param {String} [btnMsg] Button message
   * @returns Return the result of the function provided as a parameter
   */
  const confirmAlert = (
    func,
    msg = "You won't be able to revert this!",
    btnMsg = "Yes!"
  ) => {
    return async (...args) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: msg,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: btnMsg,
        });

        if (result.isConfirmed) {
          showLoader();
          const result = await func(...args);
          hiddeLoader();
          return result;
        }
      } catch (error) {
        hiddeLoader(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    };
  };

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
  const confirmAlertSuccessMsg = (
    func,
    msg = "You won't be able to revert this!",
    successMsg = "Task completed successfully!",
    btnMsg = "Yes!"
  ) => {
    return async (...args) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: msg,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: btnMsg,
        });

        if (result.isConfirmed) {
          showLoader();
          const result = await func(...args);
          hiddeLoader();
          Swal.fire("Success", successMsg, "success");
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
  const confirmAlertErrorSuccessMsg = (
    func,
    msg = "You won't be able to revert this!",
    successMsg = "Task completed successfully!",
    btnMsg = "Yes!"
  ) => {
    return async (...args) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: msg,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: btnMsg,
        });

        if (result.isConfirmed) {
          cleanMessage();

          showLoader();
          const result = await func(...args);
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

  /**
   * @description
   * Handle the possible errors during the execution of a function
   * with a modal that shows the error messages.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   */
  const waitingResponseAlert = (func) => {
    return async (...args) => {
      showLoader();
      try {
        const results = await func(...args);
        hiddeLoader();
        return results;
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

  /**
   * @description
   * Shows a success modal in case that the function has been called successfully,
   * and Handle the possible errors during the execution of a function
   * with a modal that shows the error messages.
   *
   * @param {Function} func
   * @param {String} [msg] Title of the success modal
   * @returns Return the result of the function provided as a parameter
   */
  const waitingResponseAlertSuccessMsg = (
    func,
    msg = "Task completed successfully!"
  ) => {
    return async (...args) => {
      showLoader();
      try {
        const result = await func(...args);
        hiddeLoader();
        Swal.fire("Success", msg, "success");
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

  /**
   * @description
   * Handle the possible errors during the execution of a function
   * setting the error message.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   */
  const waitingResponseMessage = (func) => {
    return async (...args) => {
      cleanMessage();
      try {
        showLoader();
        return await func(...args);
      } catch (error) {
        setErrorMessage(error.message);
        hiddeLoader();
      }
    };
  };

  /**
   * @description
   * Shows a success modal in case that the function has been called successfully,
   * Handle the possible errors during the execution of a function setting the error message.
   *
   * @param {Function} func
   * @param {String} msg Title of the success modal
   * @returns Return the result of the function provided as a parameter
   */
  const waitingResponseMessageSuccessMsg = (
    func,
    msg = "Task completed successfully!"
  ) => {
    return async (...args) => {
      cleanMessage();
      try {
        showLoader();
        const result = await func(...args);
        hiddeLoader();
        Swal.fire("Success", msg, "success");
        return result;
      } catch (error) {
        setErrorMessage(error.message);
        hiddeLoader();
      }
    };
  };

  /**
   * @description
   * Handle the possible erros during the executio no the function passed as a
   * parameter, in case of a error the function will take the error message and
   * will throw it.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   * @throws Returns the error resulted of the execution of the function
   */
  const funcErrorWrapper = (func) => {
    return async (...args) => {
      try {
        return await func(...args);
      } catch (error) {
        const errMsg =
          error?.response?.data.msg || "Something went wrong, try again later.";

        throw new Error(errMsg);
      }
    };
  };

  return {
    confirmAlert,
    confirmAlertSuccessMsg,
    confirmAlertErrorSuccessMsg,
    waitingResponseAlert,
    waitingResponseMessage,
    waitingResponseAlertSuccessMsg,
    waitingResponseMessageSuccessMsg,
    funcErrorWrapper,
  };
};

export default useAlert;
