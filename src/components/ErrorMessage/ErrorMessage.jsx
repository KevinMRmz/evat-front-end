import React from "react";

const Message = ({ message }) => {
  return (
    <div className="error-alert-msg">
      <p className="alert-msg text-center">{message}</p>
    </div>
  );
};

export default Message;
