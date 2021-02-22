import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center font-small pt-4">
      <div  className="container-footer d-flex justify-content-center align-items-center" >
        <div className="containerFooter d-flex justify-content-between row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h5 className="titleFooter" style={{color:"#B9B9B9"}}>Logo</h5>
            <div className="content">
              <p>
                {" "}
                Xbiz.io מנוע חיפוש מקומי למציאת נקודות עניין, עסקים, אירועים
              </p>
              <p>ועוד מגוון עצום של תחומי חיפוש. הנתונים נאספים מכל רחבי </p>
              <p> הרשת וממשתמשי Xbiz על בסיס יום יומי, באופן אוטומטי.</p>
              <p>האלגוריתם של האתר והמידע בתוכו מתעדכנים באופן קבוע.</p>
            </div>
          </div>
          <div className="d-flex justify-content-between wrapper col-lg-6 col-md-6 col-sm-6">
            <div className="ulWrapper" lg="6" md="6" sm="6">
              <h5 className="titleFooter" style={{color:"#B9B9B9"}} >לינקים שימושיים</h5>
              <ul className="ul-footer d-flex flex-column justify-content-between">
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
            </div>
            <div lg="6" md="6" sm="6">
              <h5 className="titleFooter" style={{color:"#B9B9B9"}}>יצירת קשר</h5>
              <div className="contact">
                <p>בר כוכבא 4 קומה 6</p>
                <p>טלפון: (123) 123-456</p>
                <p> אמייל:office@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
