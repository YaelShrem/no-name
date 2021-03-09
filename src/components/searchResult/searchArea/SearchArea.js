import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import './searchArea.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Icon from "../../Icon";

const SearchArea = () => {

    return (
        <>
            <div className="container-fluid" style={{ background: 'linear-gradient(to  left, #4DDC6B 0%, #22C5BB 100%)' }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <b><div className="mt-5 mb-2">Search result for food</div></b>
                </div>
                {/* search a business */}
                <Form className="row d-flex align-items-center justify-content-center">
                    <Form.Group as={Col} xs="10" sm='3' controlId="formGridEmail">
                        <InputGroup className="mb-sm-3">
                            <Form.Control className="inputSize"
                                type="text"
                                placeholder="food"
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Icon name="search" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>

                    </Form.Group>
                    {/* search a place */}
                    <Form.Group as={Col} xs="10" sm='3' controlId="formGridEmail mb-3">
                        <InputGroup className="mb-sm-3">
                            <Form.Control className="inputSize" type="text" placeholder="Tel Aviv Yafo" />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default SearchArea
