import React from "react";
import backgroundGray from "../../style/images/backgroundGray.png";
import imageFood from "../../style/images/imageFood.png";
import "./BusinessDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";

export default function BusinessDetails() {
  return (
    <>
      <div>
        <div
          className=""
          style={{ height: "30vh", minHeight: "800px", marginTop: "77px" }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={backgroundGray}
              alt={backgroundGray}
              // className="col-9"
              style={{
                height: "560px",
                width: "1000px",
                position: "absolute",
                right: "0 ",
                padding: "0",
              }}
            />
            <div className="text d-flex align-items-end flex-column">
              <p className="name p-2">BIGA</p>
              <p className="menu p-2">מטבח | ביקריי | קפה</p>
            </div>
          </div>
          <img src={imageFood} alt={imageFood} className="imageFood" />
        </div>
      </div>
      <div>
        <Container className="d-flex justify-content-center">
          <div>
            <div></div>
            <div>
              <p className="p1">
                .הנכם מוזמנים לחוויה קולינרית, בריאה, מגוונת ובאווירה אחרת
              </p>
              <p className="p1">.שילוב של בריא וטעים לצד שירות אדיב ומקצועי</p>
              <p className="p1">.ניתן לקיים אירועים בסניף ולהזמין משלוחים</p>
              <p className="p1">.​השירותים והחנייה בסניף נגישים</p>
            </div>
          </div>
          <div className="d-flex column">
            <p className="">פרטי המסעדה</p>
            <div>
              <p>כתובת</p>
            </div>
            <div>
              <p>שעות פתיחה</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
