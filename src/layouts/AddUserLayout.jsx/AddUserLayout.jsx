import React from "react";

const AddUserLayout = ({ children }) => {
  return (
    <div className="w-100 flex flex-column flex-center vh-80">
      <div className="w-80 flex flex-column flex-center h-90">{children}</div>
    </div>
  );
};

export default AddUserLayout;
