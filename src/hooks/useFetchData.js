import { useState, useEffect, useContext } from "react";
import { LoaderContext } from "../contexts/loaderContext";

const useFetchData = (fetchFunction) => {
  const { hiddeLoader, showLoader } = useContext(LoaderContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    showLoader();

    fetchFunction()
      .then((result) => setData(result))
      .catch((err) => console.log(err))
      .finally(() => hiddeLoader());
  }, []);

  const updateDataById = (id) => {
    const newData = data.filter((element) => element._id !== id);
    setData(newData);
  };

  return { data, setData, updateDataById };
};

export default useFetchData;
