import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './homeHeader.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, FormControl } from 'react-bootstrap'
const HomeHeader = () => {
    return (
        <>
            <Container fluid className='backColor HeightHeader'>
                <Row className='h-100 d-flex align-items-center justify-content-center'>
                    <Col sm={7} >
                        <p class="h1 textWhite text-center">the largest search engine in the world</p>
                        <p class="h3 textWhite text-center setText">Explore top-rated attractions , activities and more!</p>
                        <InputGroup className="whiteColor borderRadiuse mt-5" size='lg'>
                            <FormControl className='focusNone heightSearch borderNone'
                                placeholder="What are you looking for?"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append className='p-2'>
                                <Button className='focusNone btnColor borderNone borderRadiuse' variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeHeader
