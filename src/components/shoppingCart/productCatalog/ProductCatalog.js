import React from "react";
import "./productCatalog.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../overview/businessDetails/node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductMenu from "../productMenu/ProductMenu";
import ProductImg from "../../../style/images/productImg.png";
import food1 from "../../../style/images/food-1.png";
import food2 from "../../../style/images/food-2.png";
import food3 from "../../../style/images/food-3.png";
import food4 from "../../../style/images/food-4.png";
import Button from "@material-ui/core/Button";
import { Container, Card, Dropdown } from "react-bootstrap";
import Icon from "../../Icon";
export default function ProductCatalog() {
  return (
    <>
      <Container className="container-catalog d-flex flex-column align-items-center">
        {/* <div
          className="wrapper-header-catalog d-flex justify-content-between align-items-center row col-lg-7 col-md-8 col-sm-10 mb-3"
          dir="ltr"
        > */}
        {/* <ProductMenu></ProductMenu> */}
        {/* <div
            className="wrapper-left-header-catalog d-flex col-lg-4 col-md-6 col-sm-8 align-items-center"
            dir="ltr"
          >
            <Button className="show-all-btn" variant="contained">
              תציג הכל
            </Button>
            <div className="dropdown">
              <Dropdown className="wrapper-dropdown-catalog">
                <Dropdown.Toggle
                  className="dropdown-product-catalog"
                  variant="secondary btn-sm"
                  id="dropdown-basic"
                >
                  מיין לפי
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: "#73a47" }}>
                  <Dropdown.Item href="#">aaaaa</Dropdown.Item>
                  <Dropdown.Item href="#">bbbbb</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div> */}
        <div className="wrapper-catalog d-flex flex-column justify-content-center">
          <div className="row d-flex justify-content-center">
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food1}
                alt={food1}
              />
             <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                 <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text></div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-between"> */}
                {/* <div className="count-wrapper d-flex">
                    <button className="Decrement">-</button>
                    <div className="count-product">1</div>
                    <button className="Increment">+</button>
                  </div> */}
                {/* </div> */}
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food2}
                alt={food2}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food3}
                alt={food3}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={ProductImg}
                alt={ProductImg}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food1}
                alt={food1}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food4}
                alt={food4}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food3}
                alt={food3}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                  </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food2}
                alt={food2}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={food4}
                alt={food4}
              />
              <div className="icon-favorite">
                <Icon name="Heart"></Icon>
              </div>
              <Card.Body className="card-body-catalog d-flex-column justify-content-between">
                <div className="card-text d-flex-column justify-content-between">
                  <Card.Title className="title-catalog">
                    A portion of hamburger vegetables
                  </Card.Title>
                  <Card.Title className="p-catalog">
                    Write stories about your business
                  </Card.Title>
                  <hr className="solid"></hr>
                </div>
                <div className="time-wrapper d-flex align-items-center justify-content-between">
                <div className="wrapper-time-delivery d-flex align-items-center">
                  <Icon name="clockFill"></Icon>
                  <Card.Text className="time-text">
                    Delivery time 30 minutes
                  </Card.Text>
                  </div>
                  <div className="wrapper-price-catalog d-flex align-items-center">
                  <Card.Text className="price-char-catalog">$</Card.Text>
                  <Card.Text className="price-catalog">25</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="d-flex footer-slider justify-content-between align-items-center">
          <Button className="arrow" variant="light">
            <Icon name="leftArrow" className="leftArrow"></Icon>
          </Button>
          <div className="wrapper-right-side-footer-catalog d-flex align-items-center">
          <div className="line-over d-flex justify-content-center">
            
          </div>
          <Button className="arrow ml-3" variant="light">
            <Icon name="rightArrow" className="rightArrow"></Icon>
          </Button></div>
        </div>
      </Container>
    </>
  );
}
