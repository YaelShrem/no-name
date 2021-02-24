import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center font-small pt-4">
      <div  className="container-footer d-flex justify-content-center align-items-center col-xl-10 col-lg-11" >
        <div className="wrapper-footer d-flex justify-content-between row">
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <h5 className="titleFooter" style={{color:"#B9B9B9"}}>Logo</h5>
            <div className="content">
               Xbiz.io מנוע חיפוש מקומי למציאת נקודות עניין, עסקים, אירועים
              ועוד מגוון עצום של תחומי חיפוש. הנתונים נאספים מכל רחבי
             הרשת וממשתמשי Xbiz על בסיס יום יומי, באופן אוטומטי.
             האלגוריתם של האתר והמידע בתוכו מתעדכנים באופן קבוע.
            </div>
          </div>
          <div className="d-flex justify-content-between wrapper col-xl-7 col-lg-6 col-md-12 col-sm-12">
            <div className="ulWrapper col-xl-5 col-lg-6 col-md-6 col-sm-12">
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
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
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
