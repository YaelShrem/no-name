import React from "react";
import "./orderdetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form, Col, Row } from "react-bootstrap";

export default function OrderDetails() {
  return (
    <>
      <div className="wrapper-order-details">
        <Container className="container-order-details">
           <div >
            <section className="section-details d-flex-col">
              <p className="title-order-details">Almost done...</p>
              <div className="details">
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
                    <Form.Label className="form-lable mt-2 w-100">First Name</Form.Label>
                    <Form.Control className="form-control w-100 input-order-details"/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <Form.Label className="form-lable mt-2 w-100">Last Name</Form.Label>
                  <Form.Control className="form-control w-100 input-order-details"/>
                  </Col>
                  </Row>
                  <Row>
                  <Col lg={6} md={6} sm={12}>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable mt-2 w-100">Adress</Form.Label>
                    <Form.Control className="form-control w-100 input-order-details" placeholder="City and neighborhood"/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <Form.Label className="form-lable mt-2 w-100">Address</Form.Label>
                  <Form.Control className="form-control w-100 input-order-details" placeholder="Street and house number"/>
                  </Col>
                 </Row>
                 <Row>
                  <Col lg={6} md={6} sm={12}>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable mt-2 w-100">Email</Form.Label>
                    <Form.Control className="form-control w-100 input-order-details"/>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                  <Form.Label className="form-lable mt-2 w-100">Phone Number</Form.Label>
                  <Form.Control className="form-control w-100 input-order-details"/>
                  </Col>
                </Row>
              </Form>
            </section>
            <Button className="btn-send" variant="outline-light">Send invitation</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
