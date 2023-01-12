import React from "react";
import "./loading.css";

const LoadingScreen = ({ show }) => {
  return (
    <>
      {show ? (
        <div className="loading-screen w-100 vh-100 flex-center">
          <span className={"loader-screen"}></span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoadingScreen;
