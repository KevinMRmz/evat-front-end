import React, { createContext, useState } from "react";

export const ErrorMessageContext = createContext();

const ErrorMessageProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const cleanMessage = () => {
    setErrorMessage("");
  };

  return (
    <ErrorMessageContext.Provider
      value={{ errorMessage, setErrorMessage, cleanMessage }}
    >
      {children}
    </ErrorMessageContext.Provider>
  );
};

export default ErrorMessageProvider;
