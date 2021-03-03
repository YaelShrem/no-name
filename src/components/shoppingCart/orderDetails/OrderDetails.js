import React from "react";
import "./orderdetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductMenu from "../productMenu/ProductMenu";
import { Container, Button, Form, Col, Row } from "react-bootstrap";

export default function OrderDetails() {
  return (
    <>
      <div className="wrapper-order-details">
        <Container dir="ltr" className="container-order-details">
          <div className="d-flex">
            <ProductMenu></ProductMenu>
          </div>
          <div className="wrapper-content">
            <section className="section-details">
              <p className="title">Almost done...</p>
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
                  <Col>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable">First Name</Form.Label>
                    <Form.Control className="form-control"/>
                  </Col>
                  <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control className="form-control"/>
                  </Col>
                  <Col>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable">Adress</Form.Label>
                    <Form.Control className="form-control" placeholder="City and neighborhood"/>
                  </Col>
                  <Col>
                  <Form.Label>Address</Form.Label>
                  <Form.Control className="form-control" placeholder="Street and house number"/>
                  </Col>
                  <Col>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                    <Form.Label className="form-lable">Email</Form.Label>
                    <Form.Control className="form-control"/>
                  </Col>
                  <Col>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control className="form-control"/>
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
