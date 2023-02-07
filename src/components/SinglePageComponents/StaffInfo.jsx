import React from "react";
import SectionInfo from "./SectionInfo";

const StaffInfo = ({ staff }) => {
  const staffInfo = ["name", "email", "phone", "role", "specialty"];

  return (
    <div className="mt-5 w-60 h-80 flex flex-column justify-evenly font-size-modal align-items-center">
      {staffInfo.map((key) => {
        if (key === "") {
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
