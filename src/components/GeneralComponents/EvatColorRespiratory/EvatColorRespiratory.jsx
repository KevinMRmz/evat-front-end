import React, { useEffect } from "react";
import EvatAlgorithm from "../../../evat-algorithm";
import colors from "../../../constants/evatColors";

const EvatColorRespiratory = ({ respInput, patientMonths, setEvatResp }) => {
  const { breathingRateTable, resultRateLevel } = EvatAlgorithm;

  const result = resultRateLevel(patientMonths, respInput, breathingRateTable);

  useEffect(() => {
    setEvatResp(result);
  }, [result]);

  return (
    <span style={{ color: colors[result] }} className="bold">
      {result}
    </span>
  );
};

export default EvatColorRespiratory;
