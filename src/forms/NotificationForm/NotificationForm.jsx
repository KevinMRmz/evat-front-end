import React from "react";
import { useForm } from "react-hook-form";

const NotificationForm = ({ action, idPatient, idDoctor, idTransmitter }) => {
  const { handleSubmit, register } = useForm();

  return (
    <div className="w-100">
      <form
        onSubmit={handleSubmit((data) =>
          action(data, idPatient, idDoctor, idTransmitter)
        )}
        className="flex flex-column justify-evenly w-100 h-100 align-items-center"
      >
        <input
          type="text"
          className="form w-100"
          placeholder="Title"
          {...register("title")}
        />
        <textarea
          {...register("description")}
          className="form w-100"
          placeholder="Description"
          cols="25"
          rows="10"
        ></textarea>
        <button className="btn w-100">Send</button>
      </form>
    </div>
  );
};

export default NotificationForm;
