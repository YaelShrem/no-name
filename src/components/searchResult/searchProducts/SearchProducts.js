import React, { useState } from "react";
import "./searchProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductImg from "../../../style/images/productImg.png";
import food1 from "../../../style/images/food-1.png";
import food2 from "../../../style/images/food-2.png";
import food3 from "../../../style/images/food-3.png";
import food4 from "../../../style/images/food-4.png";
import Button from "@material-ui/core/Button";
import { Container, Card, Dropdown } from "react-bootstrap";
import Icon from "../../Icon";

const SearchProducts = () => {
  const [state, setstate] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  function changeRow(index) {
    debugger;
    if ((index + 1) % 3 === 0 && index !== state.length - 1) {
      return <div className="w-100"></div>;
    }
  }
  return (
    <>
      <div className="container h-75">
        <div className="row d-flex justify-content-center">
          {state.map((item, index) => {
            let row = "";
            if (index % 3 === 0) {
              row = `<div class="w-100"></div>`;
            }
            return (
              <>
                <Card
                  key={`card${index}`}
                  className="hover01 ml-lg-5 shadow card-catalog d-flex col-lg-3 col-md-5 col-sm-10"
                >
                  <figure>
                    <Card.Img
                      className="img-catalog"
                      variant="top"
                      src={food3}
                      alt={food3}
                    />
                  </figure>
                  <div className="icon-favorite">
                    <Icon name="heartBootstrap"></Icon>
                  </div>
                  <Card.Body className="cardBody card-body-catalog d-flex-column justify-content-between">
                    <div className="card-text d-flex-column justify-content-between">
                      <Card.Title className="title-catalog">
                        A portion of hamburger vegetables
                      </Card.Title>
                      <Card.Title className="p-catalog">
                        Write stories about your business
                      </Card.Title>
                      <hr className="solid"></hr>
                    </div>
                    <div className="time-wrapper d-flex align-items-center justify-content-between">
                      <Icon name="clockFill"></Icon>
                      <Card.Text className="mr-2 time p-catalog">
                        open
                      </Card.Text>
                      <Icon name="place"></Icon>
                      <Card.Text className="mr-2 time p-catalog">
                        1.1Km
                      </Card.Text>
                      <Icon name="chatRight"></Icon>
                      <Card.Text className="m2-2 time p-catalog">
                        reviews
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                {/* {changeRow(index)} */}
              </>
            );
          })}
          <div className="d-flex mb-5 mt-3 justify-content-center">
            <button
              type="button"
              class="btn btn-outline-primary buttonBG font-weight-bold"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
