import React from "react";

const SectionInfo = ({ objectKey, value }) => {
  return (
    <div className="flex flex-column w-100">
      <span className="letter-spacing-3 font-size-1 title-container-border w-100">
        {objectKey.charAt(0).toUpperCase() +
          objectKey.slice(1).replace(/[A-Z]/g, (match) => ` ${match}`)}
      </span>
      <span className="bold font-size-1-1 m-5 opacity-9">{value}</span>
    </div>
  );
};

export default SectionInfo;
