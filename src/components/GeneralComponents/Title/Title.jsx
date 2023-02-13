import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-100 title-container-border flex-center">
      <h2 className="p-5 uppercase opacity-9 letter-spacing-3">{title}</h2>
    </div>
  );
};

export default Title;
