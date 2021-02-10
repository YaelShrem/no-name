import React from "react";
import "./recommendations.css";
import RecommendationsImg from "../../style/images/recommendationsImg.png";
import message from "../../style/images/message.png";
import Avater from "../../style/images/avater.png";
import { Avatar } from "@material-ui/core";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

export default function Recommendations() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <div>
          <img
            src={RecommendationsImg}
            alt={RecommendationsImg}
            className="recommendations"
            style={{ maxWidth: "70vw" }}
          />
        </div>
        <section id="section02" class="demo">
          <a href="#section03">
            <span></span>Scroll
          </a>
        </section>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <div className="wrap">
              <img src={message} alt={message} className="message" />
              <p className="p">אחלה שירות אוכל טעים ומוגש ברמה.</p>
            </div>
            <div className="divAvaset d-flex justify-content-center">
              <p className="avaterText">Amanda Robertson</p>
              <Avatar alt="Travis Howard" src={Avater} className="avater" />
            </div>
          </div>
          <div className="wrap">
            <img src={message} alt={message} className="message" />
            <p className="p">אחלה שירות אוכל טעים ומוגש ברמה.</p>
          </div>
          <div className="wrap">
            <img src={message} alt={message} className="message" />
            <p className="p">אחלה שירות אוכל טעים ומוגש ברמה.</p>
          </div>
          <div className="wrap">
            <img src={message} alt={message} className="message" />
            <p className="p">אחלה שירות אוכל טעים ומוגש ברמה.</p>
          </div>
        </div>
      </div>
    </>
  );
}
