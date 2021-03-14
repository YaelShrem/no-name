import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./addListing.css";
import { Container, Button, Form, Col, Row ,Card} from "react-bootstrap";

export default function AddListing() {
  return (
    <>
      <Container className="container-add-listing">
        <Form>
          <Button className="btn-add-listing" variant="primary">
            Add Listing
          </Button>
          {/* <section> */}
          <Card style={{ width: "57rem" }}>
            <Card.Body className="body-add-listing">
              <Card.Title className="basic-information">Basic Information</Card.Title>
              <Card.Text>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">
                        Listing Title
                      </Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">
                        Category
                      </Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">
                        Keywords
                      </Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* </section> */}
        </Form>
      </Container>
    </>
  );
}
