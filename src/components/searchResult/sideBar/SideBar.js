import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './sideBar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import SearchProducts from '../searchProducts/SearchProducts'
import Icon from '../../Icon';

const SideBar = () => {
    let [listOrMenu, setlistOrMenu] = useState(`menu`)
    return (
        <>
            <div>
                <Accordion>
                    <Card >
                        <div className='container-fluid marginSide'>
                            <div className='row d-flex justify-content-end align-items-center'>
                                <div type='button' onClick={() => { setlistOrMenu(`menu`) }} className='mt-3 ml-3 mb-xs-3 d-inline'><Icon name='menu'></Icon></div>
                                <div type='button' onClick={() => { setlistOrMenu(`list`) }} className='mt-3 mr-4 ml-3 mb-xs-3 d-inline'><Icon name='list'></Icon></div>
                            </div>
                        </div>
                        <Accordion.Toggle className="d-lg-none text-left mt-md-3" as={Card.Header} eventKey="4">
                            <b>***</b>
                        </Accordion.Toggle>
                        <div className="container-fluid font marginSide" style={{height:'160vh'}} >
                            <div className="row">
                                <div className="sideFixed col-lg-3 col-sm-12 col-md-12" style={{ backgroundColor: "#F2F2F2" }}>
                                    <Accordion.Collapse className="collapse d-lg-block" eventKey="4">
                                        <div className="paddingGroup" style={{ backgroundColor: "#F2F2F2" }}>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <Accordion>
                                                        <Card className="text-center text-sm-left" >
                                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                                <b>Open</b>
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse className="collapse  d-lg-block" eventKey="0">
                                                                <ListGroup variant="flush">
                                                                    <ListGroup.Item>
                                                                        <Card.Body >
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio1" name="example" />
                                                                                <label className="custom-control-label" htmlFor="customRadio1">Open now</label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio2" name="example" />
                                                                                <label className="custom-control-label" htmlFor="customRadio2">Open at night</label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio3" name="example" />
                                                                                <label className="custom-control-label" htmlFor="customRadio3">Open on saturday</label>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </ListGroup.Item>
                                                                </ListGroup>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                    <Accordion >
                                                        <Card>
                                                            <Accordion.Toggle className="text-center text-sm-left" as={Card.Header} eventKey="1">
                                                                <b>How close?</b>
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse className="collapse d-lg-block" eventKey="1">
                                                                <Card.Body className="paddingRange">
                                                                    <input type="range" size="3" className="form-range slider" id="customRange" name="points1" />
                                                                    <label htmlFor="customRange">Distance up to 3 km</label>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                    <Accordion>
                                                        <Card>
                                                            <Accordion.Toggle className="text-center text-sm-left" as={Card.Header} eventKey="2">
                                                                <b>parking</b>
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse className="collapse d-lg-block" eventKey="2">
                                                                <ListGroup variant="flush">
                                                                    <ListGroup.Item>
                                                                        <Card.Body>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio4" name="example1" />
                                                                                <label className="custom-control-label" htmlFor="customRadio4">Free parking</label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio5" name="example1" />
                                                                                <label className="custom-control-label" htmlFor="customRadio5">Open at night</label>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </ListGroup.Item>
                                                                </ListGroup>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                    <Accordion>
                                                        <Card>
                                                            <Accordion.Toggle className="text-center text-sm-left" as={Card.Header} eventKey="3">
                                                                <b>What a kitchen</b>
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse className="collapse d-lg-block" eventKey="3">
                                                                <ListGroup variant="flush">
                                                                    <ListGroup.Item>
                                                                        <Card.Body>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio6" name="example1" />
                                                                                <label className="custom-control-label" htmlFor="customRadio6">milky</label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio7" name="example1" />
                                                                                <label className="custom-control-label" htmlFor="customRadio7">meat</label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" className="custom-control-input" id="customRadio8" name="example1" />
                                                                                <label className="custom-control-label" htmlFor="customRadio8">פרווה</label>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </ListGroup.Item>
                                                                </ListGroup>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </Accordion.Collapse>
                                </div>
                                <div className='ml-lg-5 col-lg col-sm-12' >
                                    <SearchProducts view={listOrMenu}></SearchProducts>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Accordion>
            </div>
        </>
    )
}

export default SideBar
