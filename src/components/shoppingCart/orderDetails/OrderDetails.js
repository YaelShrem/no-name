import React from "react";
import "./orderdetails.css";
import ProductMenu from "../productMenu/ProductMenu";
import { Container, Button, Form, Col, Row } from 'react-bootstrap';

export default function OrderDetails() {
  return (
    <>
      <div className="wrapper-order-details">
        <Container dir="ltr" className="container-order-details d-flex">
          <ProductMenu></ProductMenu>
          <div className="wrapper-content">
            <section className="d-flex justify-content-center">
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
            <section className="d-flex">
              <Form>
                <Row >
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
              </Form>
            </section>
            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label className="formLable">הזן כתובת מייל</Form.Label>
              <Form.Control
                className="control input-order"
                type="email"
                placeholder="Example@email.com"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-lable">פלאפון</Form.Label>
              <Form.Control
                className="control input-order"
                type="text"
                placeholder="050-000-0000"
              />
            </Form.Group> */}
            <Button className="btn-send">Send invitation</Button>
          </div>
        </Container>
      </div>
    </>
  );
}