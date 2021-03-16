import React from 'react'
import "./searchProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import food3 from "../../../style/images/food-3.png";
import { Card } from "react-bootstrap";
import Icon from "../../Icon";

const SearchProducts = (props) => {
    const state = [1, 2, 3,]
    return (
        <>
            <div className="container cardsPositionFixed scroll" >
                <div className="row mt-4 d-flex justify-content-center">
                    {
                        state.map((item, index) => {
                            return (
                                props.view === 'menu' ?
                                    <Card key={`cardMenu${index}`} className='card ml-lg-4 shadow card-catalog d-flex col-lg-3 col-md-5 col-sm-10'>
                                        <div className="card-img-wrap"><Card.Img
                                            className="img-catalog  card-img-top"
                                            variant="top"
                                            src={food3}
                                            alt='Card image cap'
                                        /></div>
                                        <div className="icon-favorite">
                                            <Icon name="Heart"></Icon>
                                        </div>
                                        <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
                                            <div className="card-text d-flex-column justify-content-between">
                                                <Card.Title className="title-catalog">
                                                    A portion of hamburger vegetables</Card.Title>
                                                <Card.Title className="p-catalog">
                                                    Write stories about your business</Card.Title>
                                                <hr className="solid"></hr>
                                            </div>
                                            <div className="time-wrapper d-flex align-items-center justify-content-between">
                                                <Card.Text className=" time p-catalog">
                                                    <Icon name="clockFill"></Icon>open
                                                    </Card.Text>

                                                <Card.Text className=" time p-catalog">
                                                    <Icon name="place"></Icon>1.1Km</Card.Text>

                                                <Card.Text className=" time p-catalog">
                                                    <Icon name="chatRight"></Icon><small className='text-muted'>24 reviews</small></Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    :
                                    <div key={`cardList${index}`} className='mb-2 col-sm-9'>
                                        <div className="shadow card">
                                            <div className="row g-0">
                                                <div className="col-md-4 card-img-wrap">
                                                    <img src={food3} alt="Card cap" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body containerBG">
                                                        <h5 className="card-title">A portion of hamburger vegetables</h5>
                                                        <p className="card-text">Write stories about your business</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                                            <div className="time-wrapper d-flex align-items-center justify-content-between">

                                                                <Icon name="clockFill"></Icon>
                                                                <Card.Text className="mr-2 time p-catalog">
                                                                    open</Card.Text>
                                                                <Icon name="place"></Icon>
                                                                <Card.Text className="mr-2 time p-catalog">
                                                                    1.1Km</Card.Text>
                                                                <Icon name="chatRight"></Icon>
                                                                <Card.Text className="mr-2 time p-catalog">
                                                                    24 reviews</Card.Text>
                                                            </div></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }


                </div>

                <div className="row ">
                    <div className="ml-lg-4 col-12 d-flex mb-5 mt-3 justify-content-center">
                        <button type="button" className="btn btn-outline-primary buttonBG font-weight-bold">Show more</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchProducts;
