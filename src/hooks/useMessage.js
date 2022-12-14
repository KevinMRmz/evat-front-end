import React, { useState } from "react";

const Message = ({ children }) => {
  return (
    <div className="error-alert-msg">
      <p className="alert-msg text-center">{children}</p>
    </div>
  );
};

const useMessage = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const cleanMsg = () => {
    setErrorMsg("");
  };

  const setMsg = (msg) => {
    setErrorMsg(msg);
  };

  return { errorMsg, cleanMsg, setMsg, Message };
};

export default useMessage;
