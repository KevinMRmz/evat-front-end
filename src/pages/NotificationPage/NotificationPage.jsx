import React, { useState, useContext } from "react";
import useFetchData from "../../hooks/useFetchData";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import Components from "../../components";
import useNotificationsActions from "../../hooks/Actions/useNotificationsActions";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const NotificationPage = () => {
  const { handleSubmit, register } = useForm();
  const [doctor, setDoctor] = useState({});
  const { getDoctors } = useFetch();
  const { data } = useFetchData(getDoctors);
  const { createNotification } = useNotificationsActions();
  const { id: idPatient } = useParams();
  const { user } = useContext(UserContext);

  return (
    <div className="w-100 vh-80 flex">
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Notification form</h2>
          </div>
          <div className="w-100">
            <form
              onSubmit={handleSubmit((data) =>
                createNotification(data, idPatient, doctor._id, user._id)
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
        </div>
      </div>
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Doctors</h2>
          </div>
          <div className="w-100 h-90 overflow-y-scroll">
            {data.map((result, index) => (
              <div
                onClick={() => setDoctor({ ...result, index })}
                className={`${
                  doctor.index === index ? "card-shadow-pick" : ""
                }`}
              >
                <Components.StaffResultCard staff={result} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
