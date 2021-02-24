import React from "react";
import {Container, Row} from 'react-bootstrap';
import './footer.css';
import Logo from '../../../style/images/logo.png'
import Icon from "../../../style/Icon";
import {Link} from 'react-router-dom' 
export default function Footer() {
  return (
    <footer className="footer-area footer--light">
      <div className="footer-big">
        <Container className="footer">
          <Row>
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                    <Icon value="logo" size="medium"/>
                  <p>
                  Xbiz.io מנוע חיפוש מקומי למציאת נקודות עניין, עסקים, אירועים
              ועוד מגוון עצום של תחומי חיפוש. הנתונים נאספים מכל רחבי
             הרשת וממשתמשי Xbiz על בסיס יום יומי, באופן אוטומטי. )
                  </p>
                  <ul className="contact-details ul-footer">
                    <li>
                      <span className="icon-earphones" /> Call Us:
                      <a href="tel:344-755-111">344-755-111</a>
                    </li>
                    <li>
                      <span className="icon-envelope-open" />
                      <a href="mailto:support@aazztech.com">
                        support@aazztech.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Ends: .footer-widget */}
            </div>
            {/* end /.col-md-4 */}
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title">Popular Category</h4>
                  <ul className="ul-footer">
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Deliveries</a>
                    </li>
                    <li>
                      <a href="#">Professionals</a>
                    </li>
                    <li>
                      <a href="#">Vacations</a>
                    </li>
                    <li>
                      <a href="#">Trips</a>
                    </li>
                  </ul>
                </div>
                {/* end /.footer-menu */}
              </div>
              {/* Ends: .footer-widget */}
            </div>
            {/* end /.col-md-3 */}
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title">Our Company</h4>
                  <ul className="ul-footer">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">How It Works</a>
                    </li>
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Plan &amp; Pricing</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                {/* end /.footer-menu */}
              </div>
              {/* Ends: .footer-widget */}
            </div>
            {/* end /.col-lg-3 */}
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title">Help Support</h4>
                  <ul className="ul-footer">
                    <li>
                      <a href="#">Support Forum</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Buyers Faq</a>
                    </li>
                    <li>
                      <a href="#">Sellers Faq</a>
                    </li>
                  </ul>
                </div>
                {/* end /.footer-menu */}
              </div>
              {/* Ends: .footer-widget */}
            </div>
            {/* Ends: .col-lg-3 */}
          </Row>
          {/* end /.row */}
        </Container>
        {/* end /.container */}
      </div>
      {/* end /.footer-big */}
      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © 2021
                  <a href="#"> Leader.codes</a>. All rights reserved. Created by
                  <a href="#"> Odelya Elimelech</a>
                </p>
              </div>
              {/* <div className="go_top">
                <span className="icon-arrow-up" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
