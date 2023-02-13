import React from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";

export default function QaHeader() {
  return (
    <>
      <div className="header">
        <div>
          <div className="mr-5">
            <Link to="/admin/config" className="pointer">
              <ion-icon name="contact"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="header-sub-container">
          <div className="mr-5">
            <Link to="/admin/create-staff" className="pointer">
              <ion-icon name="person-add"></ion-icon>
            </Link>
          </div>
          <div className="mr-5">
            <Link to="/admin/create-patient" className="pointer">
              <ion-icon name="add-circle-outline"></ion-icon>
            </Link>
          </div>
          <div className="mr-5 text-center uppercase lp-5">
            <h2 className="font-size-1-2">administration</h2>
          </div>
          <div className="mr-5">
            <div>
              <Link to="/admin/">
                <ion-icon name="folder"></ion-icon>
              </Link>
            </div>
          </div>
          <div className="mr-5">
            <Link to="/admin/patient-search">
              <ion-icon name="search"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="log-out">
            <Link to="/">
              <ion-icon name="exit" className="text-white"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
      <span className="background-img-user" />
      <Outlet></Outlet>
    </>
  );
}
