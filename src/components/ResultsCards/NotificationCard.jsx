import React from "react";
import "./cards-results.css";

const NotificationCard = ({ notification }) => {
  return (
    <div className="w-100 flex flex-column justify-between card-shadow p-5 pointer">
      <div className="w-100 flex justify-between m-3 nowrap">
        <div>
          Title: <span className="name-color bold">{notification.title}</span>
        </div>
        <div>
          {notification.gotIt === true ? (
            <span className="font-size-eye color-blue">
              <ion-icon name="eye"></ion-icon>
            </span>
          ) : (
            <span className="font-size-eye color-red">
              <ion-icon name="eye-off"></ion-icon>
            </span>
          )}
        </div>
      </div>
      <div>
        Date: <span className="age-color">{notification.createdAt}</span>
      </div>
    </div>
  );
};

export default NotificationCard;
