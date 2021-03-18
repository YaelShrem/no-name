import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import ProductImg from "../../../style/images/productImg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "../../Icon";
import "./shoppingBag.css";

export default function MyShoppingBag() {
  return (
    <>
      <div className="div-wrap">
        <Container className="container-shopping-bag">
          <div>
          </div>
          <div className="devide d-flex">
            <img
              className="img-shopping-bag"
              src={ProductImg}
              alt={ProductImg}
            ></img>
            <div className="div-detail-bag d-flex flex-column justify-content-between">
              <div>
                <p className="p1-bag">Italian pizza with the finest toppings</p>
                <p className="p2-bag">Write stories about your business</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="wrapper-time-shopping d-flex justify-content-between align-items-center">
                  <p className="p3-dollar">$</p>
                  <p className="p3-bag-count">25</p>
                  <Icon name="clockFill"></Icon>
                  <p className="p2-bag">Delivery time 30 minutes</p>
                </div>
                <div className="count-wrapper d-flex">
                  <button className="Decrement">-</button>
                  <div className="count-product">1</div>
                  <button className="Increment">+</button>
                </div>
              </div>
            </div>
          </div>

          <hr className="solid"></hr>

          <div className="devide d-flex">
            <img
              className="img-shopping-bag"
              src={ProductImg}
              alt={ProductImg}
            ></img>
            <div className="div-detail-bag d-flex flex-column justify-content-between">
              <div>
                <p className="p1-bag">Italian pizza with the finest toppings</p>
                <p className="p2-bag">Write stories about your business</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="wrapper-time-shopping d-flex justify-content-between align-items-center">
                  <p className="p3-dollar">$</p>
                  <p className="p3-bag-count">25</p>
                  <Icon name="clockFill"></Icon>
                  <p className="p2-bag">Delivery time 30 minutes</p>
                </div>
                <div className="count-wrapper d-flex">
                  <button className="Decrement">-</button>
                  <div className="count-product">1</div>
                  <button className="Increment">+</button>
                </div>
              </div>
            </div>
          </div>

          <hr className="solid"></hr>

          <div className="submit d-flex justify-content-between">
            <div className="wrapper-button-shopping-bag d-flex justify-content-between">
              <Button className="btn-invite" variant="outline-light">
                Invite me
              </Button>
              <Button className="btn-invite" variant="outline-light">
                Continue shop
              </Button>
            </div>
            <div>
              <Row>
                <Col className="count-p">SUB TOTAL</Col>
                <Col className="count-price">$299.00</Col>
              </Row>
              <Row>
                <Col className="count-p">SHIPPING</Col>
                <Col className="count-price">$100.00</Col>
              </Row>

              <hr className="solid"></hr>
              <Row>
                <Col className="count-equal">TOTAL</Col>
                <Col className="count-equal-price">$399.00</Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
