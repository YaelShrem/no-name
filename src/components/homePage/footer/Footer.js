import React from "react";
import {Container, Row} from 'react-bootstrap';
import './footer.css';
//import Logo from '../../../style/images/logo.png'
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
                  {/* <p>
                      Download the Xbiz.io App!
                      Available for Android and iOS:)
                  </p> */}
                  <ul className="contact-details ul-footer">
                    <li>
                      <span className="icon-earphones" /> Call Us:
                      <a href="tel:344-755-111">000-000-111</a>
                    </li>
                    <li>
                      <span className="icon-envelope-open" />
                      <a href="mailto:support@aazztech.com">
                        support@xbiz.io
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
                      <Link to="">Food</Link>
                    </li>
                    <li>
                      <Link to="">Deliveries</Link>
                    </li>
                    <li>
                      <Link to="">Professionals</Link>
                    </li>
                    <li>
                      <Link to="">Vacations</Link>
                    </li>
                    <li>
                      <Link to="">Trips</Link>
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
                  <h4 className="footer-widget-title">Xbiz links</h4>
                  <ul className="ul-footer">
                    <li>
                      <Link to="">About Us</Link>
                    </li>
                    <li>
                      <Link to="">How It Works</Link>
                    </li>
                    <li>
                      <Link to="">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="">Plan &amp; Pricing</Link>
                    </li>
                    <li>
                      <Link to="">Blog</Link>
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
                      <Link to="">Support Forum</Link>
                    </li>
                    <li>
                      <Link to="">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="">Support Policy</Link>
                    </li>
                    <li>
                      <Link to="">FAQs</Link>
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
                  <a href="https://leader.codes"> Leader.codes</a>. All rights reserved. Designed by
                  <a href="https://leader.codes"> Odelya Elimelech</a>
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
