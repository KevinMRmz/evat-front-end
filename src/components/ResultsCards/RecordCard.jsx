import React from "react";
import "./cards-results.css";

const RecordCard = ({ record }) => {
  return (
    <div className="w-100 flex flex-column justify-between card-shadow p-5 pointer">
      <div className="w-100 flex justify-between m-3 nowrap">
        <div>
          Date: <span className="name-color bold">{record.createdAt}</span>
        </div>
        <div>
          Evat Result <span className="age-color">{record.evatResult}</span>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
