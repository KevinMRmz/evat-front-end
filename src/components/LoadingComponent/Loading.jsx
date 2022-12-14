import React from "react";
import "./loading.css";

const Loader = ({ show }) => {
  return (
    <>
      {show ? (
        <>
          <span className={"loader"}></span>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
