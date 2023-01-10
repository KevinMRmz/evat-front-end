import React from "react";
import { useForm } from "react-hook-form";

const PatientForm = ({ action, patientDefaultInfo, children }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: patientDefaultInfo?.name || "",
      age: patientDefaultInfo?.age || "",
      palliative: patientDefaultInfo?.palliative || "",
      typeOfCancer: patientDefaultInfo?.typeOfCancer || "",
      services: patientDefaultInfo?.services || "",
    },
  });

  const onSubmit = (data) => action({ ...data });

  return (
    <div className="form-patient-container mt-5 flex w-100">
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
        <div className="flex radio-btn-container w-100">
          <label className="bold text-opacity">Palliative</label>
          <div className="flex-center">
            <label className="flex-center m-5 bold text-opacity">
              Si
              <input
                type="radio"
                name="palliative"
                value="Si"
                placeholder="Age"
                {...register("palliative")}
                className="form m-5"
              />
            </label>
            <label className="flex-center m-5 bold text-opacity">
              No
              <input
                type="radio"
                name="palliative"
                value="No"
                {...register("palliative")}
                className="form m-5"
              />
            </label>
          </div>
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
          className="form m-5"
        />
        {children}
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default PatientForm;
