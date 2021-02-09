import React from "react";
import "./recommendations.css";
import RecommendationsImg from "../../style/images/recommendationsImg.png";
import message from "../../style/images/message.png";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

export default function Recommendations() {
  return (
    <>
      <div>
        <div>
          <img
            src={RecommendationsImg}
            alt={RecommendationsImg}
            className="recommendations"
          />
        </div>
        <div className="d-flex">
          <div className="container">
            <img src={message} alt={message} className="message" />
            <p className="p">אחלה שירות אוכל טעים ומוגש ברמה.</p>
          </div>
          <div>
            <img src={message} alt={message} className="message" />
          </div>
          <div>
            <img src={message} alt={message} className="message" />
          </div>
          <div>
            <img src={message} alt={message} className="message" />
          </div>
        </div>
      </div>
    </>
  );
}
