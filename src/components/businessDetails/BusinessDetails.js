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
        className=""
        style={{ height: "30vh", minHeight: "800px", marginTop: "77px" }}
      >
        <div style={{position:"relative"}}>
        <img
          src={backgroundGray}
          alt={backgroundGray}
          // className="col-9"
          style={{ height: "560px",width:"1000px",    position: "absolute",
          right:"0 ",padding:"0" }}
        /><div className="text d-flex align-items-end flex-column">
        <p className="name p-2">BIGA</p>
        <p className="menu p-2">מטבח | ביקריי | קפה</p>
      </div>
        </div>
          <img src={imageFood} alt={imageFood} className="imageFood" />
        
      </div>
      
   
      </div>
       </>
  );
}
