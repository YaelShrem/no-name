import React from 'react'
import backgroundShape from '../../../style/images/backgroundShape.png';
import mainImg from '../../../style/images/mainImg.png';
import './searchSection.css';

export default function SearchSection() {
    return (
        <div>
            <video src='../../../style/images/video.mp4' autoPlay loop muted/>
            {/* <div className="background-shape"></div> */}
             <img src={backgroundShape} alt={backgroundShape} style={{ maxWidth: "50px", maxHeight: "50px" }}/>
            <img src={mainImg} alt={mainImg} style={{ maxWidth: "50px", maxHeight: "50px" }} /> 
        </div>
    )
}
