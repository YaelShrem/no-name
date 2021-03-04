import React from "react";
import "./orderdetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductMenu from "../productMenu/ProductMenu";
import { Container, Button, Form, Col, Row } from "react-bootstrap";

export default function OrderDetails() {
  return (
    <>
      <div className="wrapper-order-details">
        <Container className="container-order-details">
          <div className="d-flex">
            <ProductMenu></ProductMenu>
          </div>
          <div className="wrapper-content">
            <section className="section-details">
              <p className="title-order-details">Almost done...</p>
              <div className="detail">
                <p>
                  All that remains is to update your email and phone details and
                  order on the way...
                </p>
                <p>
                  The order time is calculated from the moment the order is
                  completed
                </p>
              </div>
            </section>
            <section>
              <Form>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable w-100">First Name</Form.Label>
                    <Form.Control className="form-control w-100"/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <Form.Label className="form-lable w-100">Last Name</Form.Label>
                  <Form.Control className="form-control w-100"/>
                  </Col>
                  </Row>
                  <Row>
                  <Col lg={6} md={6} sm={12}>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable w-100">Adress</Form.Label>
                    <Form.Control className="form-control w-100 input-order-details" placeholder="City and neighborhood"/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <Form.Label className="form-lable w-100">Address</Form.Label>
                  <Form.Control className="form-control w-100 input-order-details" placeholder="Street and house number"/>
                  </Col>
                 </Row>
                 <Row>
                  <Col lg={6} md={6} sm={12}>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable w-100">Email</Form.Label>
                    <Form.Control className="form-control w-100"/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <Form.Label className="form-lable w-100">Phone Number</Form.Label>
                  <Form.Control className="form-control w-100"/>
                  </Col>
                </Row>
              </Form>
            </section>
            <Button className="btn-send" variant="outline-warning">Send invitation</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
