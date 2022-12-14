import React from "react";
import "./header.css";
import { Outlet } from "react-router-dom";

export default function QaHeader() {
  return (
    <>
      <div className="header">
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Coat_of_arms_of_Chihuahua.svg/1200px-Coat_of_arms_of_Chihuahua.svg.png"
              alt="Imagen del escudo del estado de Chihuahua"
              className="img-header"
            />
          </div>
        </div>
        <div className="header-sub-container">
          <div className="mr-5 pointer">
            <ion-icon name="home"></ion-icon>
          </div>
          <div className="mr-5 text-center uppercase lp-5 pointer">
            administration
          </div>
          <div className="mr-5 pointer">
            <ion-icon name="cog"></ion-icon>
          </div>
        </div>
        <div>
          <div>
            <ion-icon name="exit"></ion-icon>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
