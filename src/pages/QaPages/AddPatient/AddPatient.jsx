import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./add-patient.css";
import useFetch from "../../../hooks/useFetch";
import useMessage from "../../../hooks/useMessage";
import Loader from "../../../components/LoadingComponent/Loading";
import Swal from "sweetalert2";

const AddPatient = () => {
  const { register, handleSubmit } = useForm();
  const { AddPatientRequest } = useFetch();
  const { cleanMsg, errorMsg, setMsg, Message } = useMessage();
  const { display, setDisplay } = useState(false);

  const onSubmit = async (data) => {
    cleanMsg();
    try {
      setDisplay(true);
      await AddPatientRequest({ ...data });
      Swal.fire("Good job!", "The register has been completed!", "success");
    } catch (error) {
      setMsg(error.message);
    }
    setDisplay(false);
  };

  return (
    <div className="main-patient-container flex">
      <div className="form-patient-container mt-5 flex">
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="form m-5"
          />
          <input
            type="number"
            placeholder="Age"
            {...register("age")}
            className="form m-5"
          />
          <div>
            <label>Palliative</label>
            <label>
              <input
                type="radio"
                name="palliative"
                value="Si"
                placeholder="Age"
                {...register("palliative")}
                className="form m-5"
              />
              Si
            </label>
            <label>
              <input
                type="radio"
                name="palliative"
                value="No"
                {...register("palliative")}
                className="form m-5"
              />
              No
            </label>
          </div>
          <input
            type="text"
            placeholder="Type of cancer"
            {...register("typeOfCancer")}
            className="form m-5"
          />
          <input
            type="text"
            placeholder="services"
            {...register("services")}
            className="form"
          />
          <Loader show={display}></Loader>
          <Message>{errorMsg}</Message>
          <input type="submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
