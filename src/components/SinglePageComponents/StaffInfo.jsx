import React from "react";
import SectionInfo from "./SectionInfo";

const StaffInfo = ({ staff }) => {
  return (
    <div className="w-50 h-100 flex flex-column justify-evenly font-size-modal align-items-center">
      {Object.keys(staff).map((key) => {
        if (key === "specialty") {
          return staff["specialty"] !== "NONE" ? (
            <SectionInfo objectKey={key} value={staff[key]} />
          ) : (
            <></>
          );
        } else {
          return <SectionInfo objectKey={key} value={staff[key]} />;
        }
      })}
    </div>
  );
};

export default StaffInfo;
