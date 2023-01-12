import React from "react";

const SectionInfo = ({ objectKey, value }) => {
  return (
    <div className="flex justify-between w-100 ">
      <span>
        {objectKey.charAt(0).toUpperCase() +
          objectKey.slice(1).replace(/[A-Z]/g, (match) => ` ${match}`)}
      </span>
      <span className="bold">{value}</span>
    </div>
  );
};

export default SectionInfo;
