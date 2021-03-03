import React from "react";
import "./addReviews.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container ,Button} from "react-bootstrap";

import UserMenu from "../../shoppingCart/userMenu/UserMenu";

export default function AddReviews() {
  return (
    <>
      <Container className="container-add-reviews">
        <div>
          <UserMenu></UserMenu>
        </div>
        <Form className="form-group-review">
          <Form.Label className="form-label-review">
            What do you think about Biga
          </Form.Label>
          <Form.Control as="textarea" rows={3} className="textarea"/>
          <Button className="button-uplaod-img" variant="primary" size="sm"></Button>
        </Form>
        <Button className="btn-review" variant="outline-warning">Send Reviews</Button>

      </Container>
    </>
  );
}
