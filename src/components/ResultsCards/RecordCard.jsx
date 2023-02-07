import React from "react";
import colors from "../../constants/evatColors";
import "./cards-results.css";

const RecordCard = ({ record }) => {
  return (
    <div className="w-100 flex flex-column justify-between card-shadow p-5 pointer">
      <div className="w-100 flex justify-between m-3 nowrap align-items-center">
        <div>
          Evat Result:{" "}
          <span style={{ color: colors[record.evatResult] }} className="bold">
            {record.evatResult}
          </span>
        </div>
        <div>
          Date:{" "}
          <span className="name-color bold">{record.createdAtFormat}</span>
        </div>
      </div>
      <div className="m-5">
        Shift: <span className="bold">{record.shift}</span>
      </div>
    </div>
  );
};

export default RecordCard;
