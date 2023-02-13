import React from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";

export default function NurseHeader() {
  return (
    <>
      <div className="header">
        <div>
          <div className="pointer mr-5">
            <Link to="/nurse/config">
              <ion-icon name="contact"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="header-sub-container">
          <div className="mr-5 pointer">
            <Link to="/nurse/">
              <ion-icon name="home"></ion-icon>
            </Link>
          </div>
          <div className="text-center uppercase lp-5 pointer font-size-1-2">
            EVAT Form
          </div>
          <div className="mr-5 pointer">
            <Link to="/nurse/notifications">
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
