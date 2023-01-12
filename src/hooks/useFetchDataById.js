import { useState, useEffect, useContext } from "react";
import { LoaderContext } from "../contexts/loaderContext";

const useFetchDataById = (fetchFunction, id) => {
  const [data, setData] = useState([]);
  const { hiddeLoader, showLoader } = useContext(LoaderContext);

  useEffect(() => {
    showLoader();

    fetchFunction(id)
      .then((result) => setData(result))
      .catch((err) => console.log(err))
      .finally(() => hiddeLoader());
  }, []);

  return { data, setData };
};

export default useFetchDataById;
