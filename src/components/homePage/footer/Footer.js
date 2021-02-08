import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

export default function Footer() {
  return (
    <MDBFooter color="blue" className="footer d-flex font-small pt-4 mt-4">
      <MDBContainer
        fluid
        className="text-center justify-content-between text-md-left"
      >
        <MDBRow className="text-center justify-content-between text-md-left col lg-8 md-10">
          <MDBCol md="6">
            <h5 className="title">Logo</h5>
            <p className="content">
              Xbiz.io מנוע חיפוש מקומי למציאת נקודות עניין, עסקים, אירועים ועוד
              מגוון עצום של תחומי חיפוש.הנתונים נאספים מכל רחבי הרשת וממשתמשי
              Xbiz על בסיס יום יומי, באופן אוטומטי. האלגוריתם של האתר והמידע
              בתוכו מתעדכנים באופן קבוע.
            </p>
          </MDBCol>
          <div className="d-flex justify-content-between">
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
              <p className="contact">
                בר כוכבא 4 קומה 6 טלפון: (123) 123-456 אמייל:office@example.com
              </p>
            </MDBCol>
          </div>
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
