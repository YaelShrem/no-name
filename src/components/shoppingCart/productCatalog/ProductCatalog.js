import React from "react";
import Parser from "html-react-parser";
import "./productCatalog.css";
// import "../../overview/businessDetails/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductMenu from "../productMenu/ProductMenu";
import ProductImg from "../../../style/images/productImg.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Dropdown } from "react-bootstrap";
import { Container, Card } from "react-bootstrap";
export default function ProductCatalog() {
  const icon = {
    clockFill: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#344968" class="bi bi-clock-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
      </svg>`,
    rightArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD600" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
    </svg>`,
    leftArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD600" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
 </svg>`,
  };
  return (
    <>
      <Container className="container-catalog d-flex flex-column align-items-center">
        <div className="wrapper-header-catalog d-flex justify-content-between align-items-center row col-lg-7 col-md-8 col-sm-10 mb-3" dir="rtl">
        <ProductMenu></ProductMenu>
          <div className="wrapper-left-header-catalog d-flex col-lg-4 col-md-6 col-sm-8 align-items-center" dir="ltr">
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
         
        </div>
        <div className="wrapper-catalog d-flex flex-column justify-content-center">
          <div className="row d-flex justify-content-center">
            <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
              <Card.Img
                className="img-catalog"
                variant="top"
                src={ProductImg}
                alt={ProductImg}
              />
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
               <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
             <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
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
              <Card.Body className="card-body-catalog d-flex flex-column justify-content-between">
                <Card.Title className="title-catalog">
                  Top Search Engine Optimization Strategies!
                </Card.Title>
                <div className="time-wrapper d-flex justify-content-between align-items-center w-100">
                <Card.Text className="d-flex price-catalog">$ 25</Card.Text>
                  <Card.Text className="time">Delivery time 30 minutes</Card.Text>
                  {Parser(icon.clockFill)}
                </div>
                </Card.Body>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button className="arrow" variant="light">
            {Parser(icon.rightArrow)}
          </Button>
          <div className="line"></div>
          <div className="line"></div>
          <Button className="arrow" variant="light">
            {Parser(icon.leftArrow)}
          </Button>
        </div>
      </Container>
    </>
  );
}