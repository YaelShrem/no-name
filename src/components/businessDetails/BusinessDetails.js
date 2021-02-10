import React from "react";
import backgroundGray from "../../style/images/backgroundGray.png";
import imageFood from "../../style/images/imageFood.png";
import "./BusinessDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BusinessDetails() {
  return (
    <>
    <div>
      <div
        className="d-flex justify-content-between"
        style={{ height: "30vh", minHeight: "800px", marginTop: "77px" }}
      >
        <img
          src={backgroundGray}
          alt={backgroundGray}
          className="col-9"
          // style={{ height: "70vh" }}
        />
          <img src={imageFood} alt={imageFood} className="imageFood" />
        
      </div>
      <div className="text d-flex align-items-end flex-column">
        <p className="name p-2">BIGA</p>
        <p className="menu p-2">מטבח | ביקריי | קפה</p>
      </div>
   
      </div>
       </>
  );
}
