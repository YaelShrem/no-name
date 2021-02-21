import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SearchSection from './searchSection/SearchSection';
import Categories from './categories/Categories';
import TopBusinesses from './topBusinesses/TopBusinesses';
import Pricing from './pricing/Pricing';
// import Footer from '../footer/Footer';

export default function HomePage() {
    return (
        <div>
            <Container fluid>
                {/* <Row> 
                    <SearchSection/>
                </Row> */}
                <Row>
                    <h1>hjkfldkjflskfjdhlk</h1>
                </Row>
                <Row>
                    {/* <Categories/> */}
                    <h1>Categories</h1>
                    fdskdfskfjshlk  fjkdls;flkjjhl
                </Row>
                <Row>
                   <TopBusinesses/>
                </Row>
                {/* <Row>
                    <Pricing/>
                </Row> */}
            </Container>
            {/* <Footer/> */}
        </div>
    )
}