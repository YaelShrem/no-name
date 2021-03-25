import React from "react";
import "./recommendations.css";
import message from "../../style/images/messageltr.png";
import Avater from "../../style/images/avater.png";
import { Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
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


export default function Recommendations(props) {
  const [value] = React.useState(5);
   
  return (
    <>
      <div className="wrapperRecommendations d-flex flex-column justify-content-between align-items-center">
      <Swiper
      spaceBetween={50}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        700: {
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
          <SwiperSlide>  <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="star-wrapper">
            <Box component="fieldset" className="fieldset-star" mt={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={true}
               />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
        <p className="avaterText">Amanda Robertson</p>
      </div>
    </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="star-wrapper">
            <Box component="fieldset" className="fieldset-star" mt={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={true}
               />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
        <p className="avaterText">Amanda Robertson</p>
      </div>
    </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="star-wrapper">
            <Box component="fieldset" className="fieldset-star" mt={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={true}
               />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
        <p className="avaterText">Amanda Robertson</p>
      </div>
    </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="star-wrapper">
            <Box component="fieldset" className="fieldset-star" mt={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={true}
               />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
        <p className="avaterText">Amanda Robertson</p>
      </div>
    </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="star-wrapper">
            <Box component="fieldset" className="fieldset-star" mt={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={true}
               />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
        <p className="avaterText">Amanda Robertson</p>
      </div>
    </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="star-wrapper">
            <Box component="fieldset" className="fieldset-star" mt={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                readOnly={true}
               />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
        <p className="avaterText">Amanda Robertson</p>
      </div>
    </div>
          </div></SwiperSlide>
          </Swiper>
      </div>
      {/* Fonts to support Material Design  */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/* Icons to support Material Design  */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div id="root"></div>
    </>
  );
}
