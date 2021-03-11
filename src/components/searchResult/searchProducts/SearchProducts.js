import React from 'react'
import "./searchProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductImg from "../../../style/images/productImg.png";
import food1 from "../../../style/images/food-1.png";
import food2 from "../../../style/images/food-2.png";
import food3 from "../../../style/images/food-3.png";
import food4 from "../../../style/images/food-4.png";
import Button from "@material-ui/core/Button";
import { Container, Card, Dropdown } from "react-bootstrap";
import Icon from "../../Icon";

const SearchProducts = () => {
    return (
        <>
            <Container className="containerBG d-flex flex-column align-items-center">
                <div className="wrapper-catalog d-flex  justify-content-center">
                    <div className="row">
                        <Card className="shadow card-catalog d-flex col-lg col-md-5 col-sm-12">
                            <Card.Img
                                className="img-catalog"
                                variant="top"
                                src={food3}
                                alt={food3}
                            />
                            <div className="icon-favorite">
                                <Icon name="Heart"></Icon>
                            </div>
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
                                <div className="card-text d-flex-column justify-content-between">
                                    <Card.Title className="title-catalog">
                                        A portion of hamburger vegetables</Card.Title>
                                    <Card.Title className="p-catalog">
                                        Write stories about your business</Card.Title>
                                    <hr className="solid"></hr>
                                </div>
                                <div className="time-wrapper d-flex align-items-center justify-content-between">
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="mr-2 time p-catalog">
                                        open</Card.Text>
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="mr-2 time p-catalog">
                                        1.1Km</Card.Text>
                                    <Icon name="chatRight"></Icon>
                                    <Card.Text className="m2-2 time p-catalog">
                                        24 Reviews</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="shadow card-catalog d-flex col-lg col-md-5 col-sm-12">
                            <Card.Img
                                className="img-catalog"
                                variant="top"
                                src={food2}
                                alt={food2}
                            />
                            <div className="icon-favorite">
                                <Icon name="Heart"></Icon>
                            </div>
                            <Card.Body className=" cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="mr-2 time p-catalog">
                                        open</Card.Text>
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="mr-2 time p-catalog">
                                        1.1Km</Card.Text>
                                    <Icon name="chatRight"></Icon>
                                    <Card.Text className="m2-2 time p-catalog">
                                        24 Reviews</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="shadow card-catalog d-flex col-lg col-md-5 col-sm-12">
                            <Card.Img
                                className="img-catalog"
                                variant="top"
                                src={food3}
                                alt={food3}
                            />
                            <div className="icon-favorite">
                                <Icon name="Heart"></Icon>
                            </div>
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="mr-2 time p-catalog">
                                        open</Card.Text>
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="mr-2 time p-catalog">
                                        1.1Km</Card.Text>
                                    <Icon name="chatRight"></Icon>
                                    <Card.Text className="m2-2 time p-catalog">
                                        24 Reviews</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* <Card className="card-catalog d-flex col-lg-3 col-md-5 col-sm-12">
                            <Card.Img
                                className="img-catalog"
                                variant="top"
                                src={ProductImg}
                                alt={ProductImg}
                            />
                            <div className="icon-favorite">
                                <Icon name="Heart"></Icon>
                            </div>
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="time">
                                        Delivery time 30 minutes
                  </Card.Text>
                                    <Card.Text className="price-char-catalog">$</Card.Text>
                                    <Card.Text className="price-catalog">25</Card.Text>
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
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="time">
                                        Delivery time 30 minutes
                  </Card.Text>
                                    <Card.Text className="price-char-catalog">$</Card.Text>
                                    <Card.Text className="price-catalog">25</Card.Text>
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
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="time">
                                        Delivery time 30 minutes
                  </Card.Text>
                                    <Card.Text className="price-char-catalog">$</Card.Text>
                                    <Card.Text className="price-catalog">25</Card.Text>
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
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="time">
                                        Delivery time 30 minutes
                  </Card.Text>
                                    <Card.Text className="price-char-catalog">$</Card.Text>
                                    <Card.Text className="price-catalog">25</Card.Text>
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
                            <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="time">
                                        Delivery time 30 minutes
                  </Card.Text>
                                    <Card.Text className="price-char-catalog">$</Card.Text>
                                    <Card.Text className="price-catalog">25</Card.Text>
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
                            <Card.Body className="cardBody 0card-body-catalog d-flex-column justify-content-between">
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
                                    <Icon name="clockFill"></Icon>
                                    <Card.Text className="time">
                                        Delivery time 30 minutes
                  </Card.Text>
                                    <Card.Text className="price-char-catalog">$</Card.Text>
                                    <Card.Text className="price-catalog">25</Card.Text> 
                                </div>
                            </Card.Body>
                        </Card>*/}
                    </div>
                </div>
                <div className="d-flex footer-slider justify-content-between">
                    <Button className="arrow" variant="light">
                        <Icon name="leftArrow"></Icon>
                    </Button>
                    <div className="line-over d-flex justify-content-center">
                        <hr className="rout-line"></hr>
                        <hr className="rout-line"></hr>
                    </div>
                    <Button className="arrow" variant="light">
                        <Icon name="rightArrow"></Icon>
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default SearchProducts





