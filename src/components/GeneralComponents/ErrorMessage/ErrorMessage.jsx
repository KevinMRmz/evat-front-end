import React, { useEffect, useContext } from "react";
import { ErrorMessageContext } from "../../../contexts/errorMessageContext";

const ErrorMessage = () => {
  const { cleanMessage, errorMessage } = useContext(ErrorMessageContext);
  useEffect(() => cleanMessage(), []);

  return (
    <div className="error-alert-msg">
      <p className="alert-msg text-center">{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
