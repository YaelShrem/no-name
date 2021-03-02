import React from "react";
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

export default function Recommendations(props) {
  const [value, setValue] = React.useState(2);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item d-flex flex-column align-items-center" data-value="1">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>אחלה שירות אוכל טעים ומוגש ברמה</p>
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
    </div>,
    <div className="item d-flex flex-column align-items-center" data-value="2">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>אחלה שירות אוכל טעים ומוגש ברמה</p>
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
      <div className="divAvaset d-flex justify-content-center align-items-center">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>,
    <div className="item d-flex flex-column align-items-center" data-value="3">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>אחלה שירות אוכל טעים ומוגש ברמה</p>
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
      <div className="divAvaset d-flex justify-content-center align-items-center">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>,
    <div className="item d-flex flex-column align-items-center" data-value="4">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>אחלה שירות אוכל טעים ומוגש ברמה</p>
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
      <div className="divAvaset d-flex justify-content-center align-items-center">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>,
    <div className="item d-flex flex-column align-items-center" data-value="5">
      <div className="wrap">
        <img src={message} alt={message} className="message" />
        <div className="wrapperp d-flex flex-column justify-content-between">
          <p>אחלה שירות אוכל טעים ומוגש ברמה</p>
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
      <div className="divAvaset d-flex justify-content-center align-items-center">
        <p className="avaterText">Amanda Robertson</p>
        <Avatar alt="Travis Howard" src={Avater} className="avater" />
      </div>
    </div>,
  ];

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

        <div className="d-flex">
        <AliceCarousel
                 mouseTracking
                items={items}
                responsive={responsive}
            />
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
