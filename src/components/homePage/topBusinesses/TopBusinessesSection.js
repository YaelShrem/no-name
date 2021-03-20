import React from "react";
import { useSpring, animated } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";
import image1 from"../../../style/images/image1.png";
import image2 from"../../../style/images/image2.png";
import image3 from"../../../style/images/image3.png";
import iconClock from "../../../style/images/icon-clock.png";
import iconReview from "../../../style/images/icon-review.png";
import Icon from "../../Icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./topBusinessesSection.css"
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
export default function TopBusinesses() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
    <>
      <section className="wrapper-section-topBusiness d-flex flex-column justify-content-between">
       <div className="wrapper-main-title d-flex align-items-center justify-content-center">
        <animated.h2 style={props} className="main-title">
          TopBusinesses
        </animated.h2></div>
        <Swiper
      spaceBetween={50}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        760: {
          slidesPerView:2,
        },
        1050: {
          slidesPerView:3,
        }, 
        1500: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 5,
        }
      }}
    >
      <SwiperSlide>  <Card className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>business name</Card.Title>
              <Card.Text className="location-topBuisness"> Business location address </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper-footer-card-topBuisness d-flex justify-content-between align-items-center">
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"23px",height:"20px"}} src={iconClock} />
              <Card.Text className="pfooter-topBuisness">Open</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
             <Icon name="place"/>
              <Card.Text className="pfooter-topBuisness">1.1 km</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"21px",height:"20px"}} src={iconReview} />
              <Card.Text className="pfooter-topBuisness">24 Reviews</Card.Text></div>
              </Card.Footer>
          </Card></SwiperSlide>
      <SwiperSlide>  <Card className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>business name</Card.Title>
              <Card.Text className="location-topBuisness"> Business location address </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper-footer-card-topBuisness d-flex justify-content-between align-items-center">
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"23px",height:"20px"}} src={iconClock} />
              <Card.Text className="pfooter-topBuisness">Open</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
             <Icon name="place"/>
              <Card.Text className="pfooter-topBuisness">1.1 km</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"21px",height:"20px"}} src={iconReview} />
              <Card.Text className="pfooter-topBuisness">24 Reviews</Card.Text></div>
              </Card.Footer>
          </Card></SwiperSlide>
      <SwiperSlide>  <Card className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>business name</Card.Title>
              <Card.Text className="location-topBuisness"> Business location address </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper-footer-card-topBuisness d-flex justify-content-between align-items-center">
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"23px",height:"20px"}} src={iconClock} />
              <Card.Text className="pfooter-topBuisness">Open</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
             <Icon name="place"/>
              <Card.Text className="pfooter-topBuisness">1.1 km</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"21px",height:"20px"}} src={iconReview} />
              <Card.Text className="pfooter-topBuisness">24 Reviews</Card.Text></div>
              </Card.Footer>
          </Card></SwiperSlide>
      <SwiperSlide>  <Card className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>business name</Card.Title>
              <Card.Text className="location-topBuisness"> Business location address </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper-footer-card-topBuisness d-flex justify-content-between align-items-center">
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"23px",height:"20px"}} src={iconClock} />
              <Card.Text className="pfooter-topBuisness">Open</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
             <Icon name="place"/>
              <Card.Text className="pfooter-topBuisness">1.1 km</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"21px",height:"20px"}} src={iconReview} />
              <Card.Text className="pfooter-topBuisness">24 Reviews</Card.Text></div>
              </Card.Footer>
          </Card></SwiperSlide>
      <SwiperSlide>  <Card className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>business name</Card.Title>
              <Card.Text className="location-topBuisness"> Business location address </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper-footer-card-topBuisness d-flex justify-content-between align-items-center">
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"23px",height:"20px"}} src={iconClock} />
              <Card.Text className="pfooter-topBuisness">Open</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
             <Icon name="place"/>
              <Card.Text className="pfooter-topBuisness">1.1 km</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"21px",height:"20px"}} src={iconReview} />
              <Card.Text className="pfooter-topBuisness">24 Reviews</Card.Text></div>
              </Card.Footer>
          </Card></SwiperSlide>
      <SwiperSlide>  <Card className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>business name</Card.Title>
              <Card.Text className="location-topBuisness"> Business location address </Card.Text>
            </Card.Body>
            <Card.Footer className="wrapper-footer-card-topBuisness d-flex justify-content-between align-items-center">
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"23px",height:"20px"}} src={iconClock} />
              <Card.Text className="pfooter-topBuisness">Open</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
             <Icon name="place"/>
              <Card.Text className="pfooter-topBuisness">1.1 km</Card.Text></div>
              <div className="wrapper-item-footer-topBuisness">
              <Card.Img style={{width:"21px",height:"20px"}} src={iconReview} />
              <Card.Text className="pfooter-topBuisness">24 Reviews</Card.Text></div>
              </Card.Footer>
          </Card></SwiperSlide>
  
    </Swiper>

      </section>
    </>
  );
}
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}
