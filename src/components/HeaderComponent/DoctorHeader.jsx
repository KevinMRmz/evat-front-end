import React from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";

export default function DoctorHeader() {
  return (
    <>
      <div className="header">
        <div>
          <div className="pointer mr-5">
            <Link to="/doctor/config">
              <ion-icon name="contact"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="header-sub-container">
          <div className="mr-5 pointer">
            <Link to="/doctor/">
              <ion-icon name="home"></ion-icon>
            </Link>
          </div>
          <div className="mr-5 text-center uppercase lp-5 pointer font-size-1-2">
            Notifications
          </div>
          <div className="mr-5 pointer">
            <Link to="/doctor/record-notifications">
              <ion-icon name="mail"></ion-icon>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/">
              <ion-icon name="exit"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
      <span className="background-img-user" />
      <Outlet></Outlet>
    </>
  );
}
