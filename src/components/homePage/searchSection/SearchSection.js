import React from 'react'
import backgroundShape from '../../../style/images/backgroundShape.png';
import mainImg from '../../../style/images/mainImg.png';
import './searchSection.css';

export default function SearchSection() {
    return (
        <>
            <img src={backgroundShape}
                 alt={backgroundShape}
                 className="background-shape"/>
                <img src={mainImg}
                 alt={mainImg}
                 className="main-img"/> 
            </>
    )
}
