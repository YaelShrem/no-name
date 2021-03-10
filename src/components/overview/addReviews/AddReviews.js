import React from "react";
import "./addReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Button } from "react-bootstrap";
import Icon from "../../Icon";
import UserMenu from "../../shoppingCart/userMenu/UserMenu";

export default function AddReviews() {
  return (
    <>
      <Container className="container-add-reviews">
        <div>{/* <UserMenu></UserMenu> */}</div>
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
          {/* <Button
            className="button-uplaod-img"
            variant="outline-warning"
            size="sm"
          >
            add picture <Icon name="picture" />
          </Button> */}
        </Form>
        <Button className="btn-review" variant="outline-warning">
          Send Reviews
        </Button>
      </Container>
    </>
  );
}
