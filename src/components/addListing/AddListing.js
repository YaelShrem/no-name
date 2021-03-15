import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { colourOptions } from "../data";
import Icon from "../Icon";
import "bootstrap/dist/css/bootstrap.min.css";
import "./addListing.css";
import { Container, Button, Form, Col, Row, Card } from "react-bootstrap";

const animatedComponents = makeAnimated();

export default function AddListing() {
  return (
    <>
      <Container className="container-add-listing d-flex flex-col justify-content-center">
        <Form>
          <Button className="btn-add-listing" variant="primary">
            Add Listing
          </Button>
          <Card className="card-add-listing" style={{ width: "57rem" }}>
            <Card.Body className="body-add-listing">
              <Card.Title className="basic-information">
                Basic Information
              </Card.Title>
              <hr className="solid"></hr>
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
                      {/* <Form.Control type="email" className="listing-control" /> */}
                      <Select
                        className="form-control select"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[]}
                        isMulti
                        options={[1, 2, 3]}
                      />
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

          <Card className="card-add-listing" style={{ width: "57rem" }}>
            <Card.Body className="body-add-listing">
              <Card.Title className="basic-information">Location</Card.Title>
              <hr className="solid"></hr>
              <Card.Text>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">Address</Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">Region</Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">
                        neighborhood
                      </Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                </Row>
                <p>כאן תהיה מפה</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-add-listing" style={{ width: "57rem" }}>
            <Card.Body className="body-add-listing">
              <Card.Title className="basic-information">Gallery</Card.Title>
              <hr className="solid"></hr>
              <div className="context-gallery d-flex-column">
                <div>
                  <Icon name="imageDownload"></Icon>
                </div>
                <p>Drop image here</p>
                <p>Or</p>
                <Button className="btn-choose-files" variant="primary">
                  Choose files
                </Button>
              </div>
              {/* <Card.Text className="image-download d-flex-column">
                <Row>
                  <Col className="col-sm-12">
                    <Icon name="imageDownload"></Icon>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="listing-lable">
                      Drop image here
                    </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-sm-12">
                    <Form.Label className="listing-lable">Or</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="btn-choose-files" variant="primary">
                      Choose files
                    </Button>
                  </Col>
                </Row>
              </Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card-add-listing" style={{ width: "57rem" }}>
            <Card.Body className="body-add-listing">
              <Card.Title className="basic-information">Details</Card.Title>
              <hr className="solid"></hr>
              <Card.Text>
                <Row>
                  <Col>
                    {/* <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">Description</Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group> */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="listing-lable">
                        Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="listing-control"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">Website</Form.Label>
                      <Form.Control
                        type="Website"
                        className="listing-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">Video</Form.Label>
                      <Form.Control type="Video" className="listing-control" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">Phone</Form.Label>
                      <Form.Control type="phone" className="listing-control" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="listing-lable">E-mail</Form.Label>
                      <Form.Control type="email" className="listing-control" />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Button className="btn-preview" variant="outline-primary">Preview</Button>
        </Form>
      </Container>
    </>
  );
}
