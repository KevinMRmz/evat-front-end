import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);

  const showLoader = () => {
    setDisplay(true);
  };

  const hiddeLoader = () => {
    setDisplay(false);
  };

  return (
    <LoaderContext.Provider value={{ display, hiddeLoader, showLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
