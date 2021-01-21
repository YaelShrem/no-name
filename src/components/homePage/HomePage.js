import React from 'react'
import SearchSection from './searchSection/SearchSection';
import Categories from './categories/Categories';
import TopBusinesses from './topBusinesses/TopBusinesses';
import Pricing from './pricing/Pricing';
import Footer from './footer/Footer';

export default function HomePage() {
    return (
        <div>
            <br/><br/><br/><br/>
            <SearchSection/>
            <Categories/>
            <TopBusinesses/>
            <Pricing/>
            <Footer/>
        </div>
    )
}
