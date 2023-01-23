import React from "react";
import "./header.css";
import logo from "./chihuahua.png";
import { Outlet, Link } from "react-router-dom";

export default function DoctorHeader() {
  return (
    <>
      <div className="header">
        <div>
          <div>
            <img
              src={logo}
              alt="Imagen del escudo del estado de Chihuahua"
              className="img-header"
            />
          </div>
        </div>
        <div className="header-sub-container">
          <div className="mr-5 pointer">
            <Link to="/doctor/">
              <ion-icon name="home"></ion-icon>
            </Link>
          </div>
          <div className="mr-5 text-center uppercase lp-5 pointer">
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
