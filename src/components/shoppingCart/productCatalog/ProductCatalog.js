import React from "react";
import "./productCatalog.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../overview/businessDetails/node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductImg from "../../../style/images/productImg.png";
import food1 from "../../../style/images/food-1.png";
import food2 from "../../../style/images/food-2.png";
import food3 from "../../../style/images/food-3.png";
import food4 from "../../../style/images/food-4.png";
import { Container, Card} from "react-bootstrap";
import Icon from "../../Icon";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function ProductCatalog() {
  return (
    <>
      <Container className="container-catalog d-flex flex-column align-items-center">
        <div className="wrapper-catalog d-flex flex-column justify-content-center">
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
      breakpoints={{
        576:{
          navigation:false,
          },
        760: {
          slidesPerView:1,
        },
        1050: {
          slidesPerView:1,
        }, 
        1500: {
          slidesPerView: 1,
        },
        2000: {
          slidesPerView: 1,
        }
      }}
    >
       <SwiperSlide>
       <div className="row d-flex justify-content-center">
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
               </Card.Body>
            </Card>
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between" >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
          </SwiperSlide>
          <SwiperSlide>
          <div className="row d-flex justify-content-center">
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between" >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
            <Card className="card-catalog d-flex col-lg-3 col-md-3 col-sm-3 offset-sm-4">
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
                <div className="card-text d-flex-column justify-content-between"  >
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
          </SwiperSlide>
      </Swiper>
        </div>
      </Container>
    </>
  );
}
