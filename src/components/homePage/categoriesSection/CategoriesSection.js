import React from 'react'
import Icon from '../../Icon';
import {Row, Col} from 'react-bootstrap';
import './categoriesSection.css';
import {useSpring, animated} from 'react-spring'

export default function CategoriesSection() {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (

        <section className="categories-section">
             <h2 className="main-title">Categories</h2>
             <Row>
                <Col>
                <Icon name="foodCategory"/>
                    <h5>Food</h5>
                </Col>
                <Col>
                <Icon name="foodCategory"/>
                    <h5>Shopping</h5>
                </Col>
                <Col>
                <Icon name="tripCategory"/>
                <h5>Trips</h5>
                </Col>
                <Col>
                <Icon name="vacationCategory"/>
                <h5>Vacation</h5>
                </Col>
                <Col>
                <Icon name="professionalCategory"/>
                <h5>Professionals</h5>
                </Col>
                <Col>
                <Icon name="medicineCategory"/>
                <h5>Medicine</h5>
                </Col>
            </Row>
         </section>
    )
}
