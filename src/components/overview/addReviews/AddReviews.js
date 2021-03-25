import React from "react";
import "./addReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Button  } from "react-bootstrap";


export default function AddReviews() {
  return (
    <>
      <Container className="container-add-reviews">
        <Form className="form-group-review">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form-label-review">
              What do you think about Biga
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="textarea"
            ></Form.Control>
          </Form.Group>
          </Form>
        <Button className="btn-review" variant="outline-warning">
          Send Reviews
        </Button>
      </Container>
    </>
  );
}
