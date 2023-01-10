import { useEffect, useContext } from "react";
import { PatientContext } from "../contexts/patientContext";
import useFetch from "./useFetch";
import { LoaderContext } from "../contexts/loaderContext";

const useFetchPatientData = (id) => {
  const { patient, setPatientInfo } = useContext(PatientContext);
  const { hiddeLoader, showLoader } = useContext(LoaderContext);
  const { getPatientById } = useFetch();

  useEffect(() => {
    showLoader();

    getPatientById(id)
      .then((result) => setPatientInfo(result))
      .catch((err) => console.log(err))
      .finally(() => hiddeLoader());
  }, []);

  return { patient, setPatientInfo };
};

export default useFetchPatientData;
