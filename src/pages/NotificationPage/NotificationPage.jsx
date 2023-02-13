import useNotificationsActions from "../../api/notification-service/notification-actions";
import GeneralComponents from "../../components/GeneralComponents";
import { UserContext } from "../../contexts/userContext";
import React, { useState, useContext } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Titles } from "../../constants/titles";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Components from "../../components";
import Layouts from "../../layouts";
import Forms from "../../forms";

const NotificationPage = () => {
  const [doctor, setDoctor] = useState({});
  const { getDoctors } = useFetch();
  const { data } = useFetchData(getDoctors);
  const { createNotification } = useNotificationsActions();
  const { id: idPatient } = useParams();
  const { user } = useContext(UserContext);

  return (
    <>
      <GeneralComponents.ReturnPatientPage id={idPatient} />

      <Layouts.SearchLayout
        searchTitle={Titles.NOTIFICATION_FORM}
        searchForm={
          <Forms.NotificationForm
            action={createNotification}
            idPatient={idPatient}
            idDoctor={doctor._id}
            idTransmitter={user.id}
          />
        }
        results={data.map((result, index) => (
          <div
            onClick={() => setDoctor({ ...result, index })}
            className={`${doctor.index === index ? "card-shadow-pick" : ""}`}
          >
            <Components.StaffResultCard staff={result} />
          </div>
        ))}
      />
    </>
  );
};

export default NotificationPage;
