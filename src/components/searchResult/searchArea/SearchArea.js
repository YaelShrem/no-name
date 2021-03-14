import React from 'react'
import { Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import './searchArea.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Icon from "../../Icon";

const SearchArea = () => {

    return (
        <>
            <div className="container-fluid BackColor borderDivRadius">
                <div className="row">
                    <div className="container">
                        <Form.Group className="row d-flex justify-content-center align-items-center">
                            <Form.Label className="mb-2 mt-5"><b>Search result for food</b></Form.Label>
                        </Form.Group>
                        <Form.Group className="row d-flex align-items-center justify-content-center">
                            <Form.Group as={Col} xs="10" sm='3' controlId="formGridEmail">
                                <InputGroup className="mb-sm-3">
                                    <Form.Control className="inputSize"
                                        type="text"
                                        placeholder="food"
                                    />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="BackColor">
                                            <Icon name="search" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} xs="10" sm='3' controlId="formGridEmail mb-3">
                                <InputGroup className="mb-sm-3">
                                    <Form.Control className="inputSize" type="text" placeholder="Tel Aviv Yafo" />
                                </InputGroup>
                            </Form.Group>
                        </Form.Group>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchArea
