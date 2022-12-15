import React from "react";
import "./header.css";

export default function NurseHeader() {
  return (
    <div className="header">
      <div>
        <div>
          <img
            src="./chihuahua.png"
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
          Formulario EVAT
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
  );
}
