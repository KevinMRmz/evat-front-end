import { useEffect, useContext } from "react";
import { StaffContext } from "../contexts/staffContext";
import useFetch from "./useFetch";
import { LoaderContext } from "../contexts/loaderContext";

const useFetchEmployeeData = (id) => {
  const { staff, setStaffInfo } = useContext(StaffContext);
  const { hiddeLoader, showLoader } = useContext(LoaderContext);
  const { getEmployeeById } = useFetch();

  useEffect(() => {
    showLoader();

    getEmployeeById(id)
      .then((employee) => setStaffInfo(employee))
      .catch((err) => console.log(err))
      .finally(() => hiddeLoader());
  }, []);

  return { staff, setStaffInfo };
};

export default useFetchEmployeeData;
