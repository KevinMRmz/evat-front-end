import React, { useEffect } from "react";
import EvatAlgorithm from "../../../evat-algorithm";
import colors from "../../../constants/evatColors";

const EvatColorCardio = ({ cardioInput, patientMonths, setEvatCardio }) => {
  const { heartRateTable, resultRateLevel } = EvatAlgorithm;

  const result = resultRateLevel(patientMonths, cardioInput, heartRateTable);

  useEffect(() => {
    setEvatCardio(result);
  }, [result]);

  return (
    <span style={{ color: colors[result] }} className="bold">
      {result}
    </span>
  );
};

export default EvatColorCardio;
