import React from 'react';
import {Container} from 'react-bootstrap'
import SearchSection from './searchSection/SearchSection';
import CategoriesSection from './categoriesSection/CategoriesSection';
import TopBusinessesSection from './topBusinesses/TopBusinessesSection';
import Pricing from './pricing/Pricing';
import Footer from './footer/Footer';
import './homePage.css';

export default function HomePage() {
    return (
        <Container fluid style={{padding: 0, margin: 0}}>
            <SearchSection/>
            <CategoriesSection/>
                <TopBusinessesSection/>
            <section>
                <h2 className="main-title">Pricing</h2>
                    <Pricing/>
            </section>
            <Footer/>
        </Container>
    )
}