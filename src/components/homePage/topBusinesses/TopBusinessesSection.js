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
export default function TopBusinesses() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
       nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1600,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       initialSlide: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 5,
    //       initialSlide: 1,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 670,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 5,
    //       initialSlide: 1,
    //     },
    //   },
    // ],
  };
    return (
    <>
      <section className="wrapper-section-topBusiness d-flex flex-column">
        <animated.h2 style={props} className="main-title">
          TopBusinesses
        </animated.h2>
        <Slider className="wrapper-slider-topBusiness " {...settings}>
       
           <Card className="wrapper-card-topBusiness">
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
          </Card>
          <Card  className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image2} />
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
          </Card>
          <Card  className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image3} />
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
          </Card>
          <Card  className="wrapper-card-topBusiness">
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
          </Card>
          <Card  className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image2} />
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
          </Card>
          <Card  className="wrapper-card-topBusiness">
            <Card.Img variant="top" src={image3} />
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
          </Card>
        </Slider> 
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
