import React from "react";
import "./cards-results.css";

const RecordCard = ({ record }) => {
  const setEvatColor = (evatResult) => {
    const COLORS = ["#000", "#0f0", "#f80", "#f00"];
    return COLORS[evatResult];
  };

  return (
    <div className="w-100 flex flex-column justify-between card-shadow p-5 pointer">
      <div className="w-100 h-100 flex justify-between m-3 nowrap align-items-center">
        <div>
          Evat Result:{" "}
          <span
            style={{ color: setEvatColor(record.evatResult) }}
            className="bold"
          >
            {record.evatResult}
          </span>
        </div>
        <div>
          Date: <span className="name-color bold">{record.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
