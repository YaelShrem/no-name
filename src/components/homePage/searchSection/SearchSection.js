import React from 'react'
import backgroundShape from '../../../style/images/backgroundShape.png';
import mainImg from '../../../style/images/mainImg.png';
import './searchSection.css';

export default function SearchSection() {
    return (
        <>
                    {/* <Row> */}
                    <section style={{
                       height: '90vh',
                       position: 'relative',
                      //  backgroundSize: 'cover',
                       backgroundColor: 'red',
                       paddingTop: '8rem',
                       paddingBottom: '8rem'}}>
                                       <img src={backgroundShape}
                 alt={backgroundShape}
                 className="background-shape"/>
                <img src={mainImg}
                 alt={mainImg}
                 className="main-img"/> 
                    </section>
            {/* </Row> */}
            </>
    )
}
