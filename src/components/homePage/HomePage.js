import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SearchSection from './searchSection/SearchSection';
import Categories from './categories/Categories';
import TopBusinesses from './topBusinesses/TopBusinesses';
import Pricing from './pricing/Pricing';
import Footer from '../footer/Footer';

export default function HomePage() {
    return (
        <Container fluid style={{padding: 0, margin: 0}}>
            {/* <Row> */}
            <section style={{
                       height: '90vh',
                       position: 'relative',
                      //  backgroundSize: 'cover',
                       backgroundColor: 'red',
                       paddingTop: '8rem',
                       paddingBottom: '8rem'}}>
      </section>
            {/* </Row> */}
      <section style={{height: '50vh',
                      //  position: 'relative',
                      //  backgroundSize: 'cover',
                       backgroundColor: 'blue'}}><h2>fhdjkslkjh</h2></section>
      <section style={{height: '50vh',
                      //  position: 'relative',
                      //  backgroundSize: 'cover',
                       backgroundColor: 'green'}}><h2>fhdjkslkjh</h2></section>
      <section style={{height: '100vh',
                      //  position: 'relative',
                      //  backgroundSize: 'cover',
                       backgroundColor: 'yellow'}}><h2>fhdjkslkjh</h2></section>
                {/* <Row>
                    <Pricing/>
                </Row> */}
            <section style={{//height: '100vh',
                      //  position: 'relative',
                      //  backgroundSize: 'cover',
                    }}>
                                       <Footer/>

                           </section>
        </Container>
    )
}