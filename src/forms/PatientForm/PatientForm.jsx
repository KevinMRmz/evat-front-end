import React from "react";
import { useForm } from "react-hook-form";
import GeneralComponents from "../../components/GeneralComponents";
import { useSetPatientInfo } from "../../hooks/DefaultInfo";

const PatientForm = ({ action, patientInfo }) => {
  const defaultInfo = useSetPatientInfo(patientInfo);

  const { register, handleSubmit } = useForm({
    defaultValues: defaultInfo,
  });

  return (
    <div className="h-90 form-patient-container mt-5 flex w-100">
      <form
        onSubmit={handleSubmit((data) => action({ ...data }))}
        className="flex w-100 h-100 flex-column justify-evenly align-items-center"
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="form m-5"
        />
        <input type="date" {...register("birthDateIso")} className="form m-5" />

        <div className="flex justify-evenly w-100">
          <label className="bold text-opacity">Palliative</label>
          <div className="flex-center">
            <label className="flex-center m-5 bold text-opacity">
              Si
              <input
                type="radio"
                name="palliative"
                value="Si"
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

        <GeneralComponents.ErrorMessage />
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default PatientForm;
