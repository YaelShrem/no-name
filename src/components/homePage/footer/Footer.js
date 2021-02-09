import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

export default function Footer() {
  return (
    <MDBFooter color="blue" className="footer d-flex font-small pt-4 mt-4">
      <MDBContainer
        fluid
        className="text-center d-flex justify-content-center text-md-left"
      >
        <MDBRow className="text-center row col-lg-9 col-md-10 col-sm-12">
          <MDBCol md="6">
            <h5 className="title">Logo</h5>
            <div className="content">
              <p>
                {" "}
                Xbiz.io מנוע חיפוש מקומי למציאת נקודות עניין, עסקים, אירועים
              </p>
              <p>ועוד מגוון עצום של תחומי חיפוש. הנתונים נאספים מכל רחבי </p>
              <p> הרשת וממשתמשי Xbiz על בסיס יום יומי, באופן אוטומטי.</p>
              <p>האלגוריתם של האתר והמידע בתוכו מתעדכנים באופן קבוע.</p>
            </div>
          </MDBCol>
          <MDBCol className="d-flex justify-content-between" md="6">
            <MDBCol md="6">
              <h5 className="title">לינקים שימושיים</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">איך זה עובד</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">צור קשר</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">מדיניות ופרטיות</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">הרשמה</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">כניסה</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">החשבון שלי</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">יצירת קשר</h5>
              <div className="contact">
                <p>בר כוכבא 4 קומה 6</p>
                <p>טלפון: (123) 123-456</p>
                <p> אמייל:office@example.com</p>
              </div>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div> */}
    </MDBFooter>
  );
}
