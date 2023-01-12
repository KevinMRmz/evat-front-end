import React, { useState } from "react";
import Messages from "../../constants/alertMessages";
import useFetchData from "../../hooks/useFetchData";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import useAlert from "../../hooks/useAlert";
import Components from "..";

const NotificationModal = ({ idPatient, idTransmitter }) => {
  const { handleSubmit, register } = useForm();
  const [doctor, setDoctor] = useState({});
  const { getDoctors, postNotification } = useFetch();
  const { confirmAlertSuccessMsg } = useAlert();
  const { QuestionMessages, ResponseMessages } = Messages;
  const { data } = useFetchData(getDoctors);

  const onSubmit = confirmAlertSuccessMsg(
    async (data) => {
      await postNotification({
        ...data,
        idPatient,
        idDoctor: doctor._id,
        idTransmitter,
      });
    },
    QuestionMessages.SEND_NOTIFICATION,
    ResponseMessages.SEND_NOTIFICATION
  );

  return (
    <>
      <div>
        <h2 className="title-container-border">Notification</h2>
      </div>
      <div className="vw-50 vh-80">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
        <div className="title-container-border">
          <h3 className="bold">Choose a doctor</h3>
        </div>
        <div className="overflow-y-scroll h-100 w-100 m-5">
          {data.map((doc) => (
            <div onClick={() => setDoctor(doc)}>
              <Components.StaffResultCard staff={doc} />
            </div>
          ))}
        </div>
        <div
          className="flex justify-evenly align-items-center m-5 h-20"
          style={{ fontSize: "1.5em" }}
        >
          <div className="flex justify-evenly">
            Doctor: <span className="bold">{doctor.name}</span>
          </div>
          <div className="flex justify-evenly">
            Specialty: <span className="bold">{doctor.specialty}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;
