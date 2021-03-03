import React,{ useState } from "react";
import "./recommendations.css";
import RecommendationsImg from "../../style/images/recommendationsImg.png";
import message from "../../style/images/message.png";
import Avater from "../../style/images/avater.png";
import { Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
// import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import ScrollMenu from 'react-horizontal-scrolling-menu';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function Recommendations(props) {
  const [value, setValue] = React.useState(2);
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);}
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:2
      };
  return (
    <>
      <div className="wrapperRecommendations d-flex flex-column justify-content-between align-items-center">
        <div className="d-flex justify-content-end w-100">
          <img
            src={RecommendationsImg}
            alt={RecommendationsImg}
            className="recommendations"
            style={{ maxWidth: "70vw" }}
          />
        </div>
        <div>
        <Slider {...settings}>
          <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="starWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">Controlled</Typography> */}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>
          </div>
          <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="starWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">Controlled</Typography> */}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>
          </div>
          <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="starWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">Controlled</Typography> */}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>
          </div>
          <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="starWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">Controlled</Typography> */}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>
          </div>
          <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="starWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">Controlled</Typography> */}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>
          </div>
          <div className="slide-recommendations">
          <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>Great food service delicious and served on a level.</p>
          <div className="starWrapper">
            <Box component="fieldset" mb={3} borderColor="transparent">
              {/* <Typography component="legend">Controlled</Typography> */}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="divAvaset d-flex">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>
          </div>
        </Slider>
      </div>
         
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
