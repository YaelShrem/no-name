import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartPanel.css";
// image
import productInCart from "../../../style/images/image1.png";
export default function CartPanel() {

  return (
      <div className="d-flex justify-content-end">
    <div className="cartPanel-container">
        <div  className="onlyProduct">
            <div className="item-in-cartPanel">
              <div className="wrapper-img-cartPanel">
                <img src={productInCart}></img>
              </div>
              <div className="item-description-cartPanel">lorem ipsum</div>
              <div className="count-wrapper d-flex">
                <button className="Decrement">-</button>
                <div className="count-product">1</div>
                <button className="Increment">+</button>
              </div>
              <div className="item-price-cartPanel">$299.00</div>
            </div>
            <div className="item-in-cartPanel">
              <div className="wrapper-img-cartPanel">
                <img src={productInCart}></img>
              </div>
              <div className="item-description-cartPanel">lorem ipsum</div>
              <div className="count-wrapper d-flex">
                <button className="Decrement">-</button>
                <div className="count-product">1</div>
                <button className="Increment">+</button>
              </div>
              <div className="item-price-cartPanel">$299.00</div>
            </div>
            <div className="item-in-cartPanel">
              <div className="wrapper-img-cartPanel">
                <img src={productInCart}></img>
              </div>
              <div className="item-description-cartPanel">lorem ipsum</div>
              <div className="count-wrapper d-flex">
                <button className="Decrement">-</button>
                <div className="count-product">1</div>
                <button className="Increment">+</button>
              </div>
              <div className="item-price-cartPanel">$299.00</div>
            </div>
        </div>
        <div className="container-total-cartPnael d-flex flex-column justify-content-between align-items-center">
         <div className="total-and-delivery">
          <div className="wrapper-total-cartPanel d-flex justify-content-between">
            <p className="cartTotal"> Total: </p>
            <div> $399.00</div>
          </div>
          <div className="delivery-cartPanel">Excluding Standard Delivery (Normally $10.00)</div></div>
          <div className="d-flex justify-content-between wrapper-btn-cartPanel">
              <button className="btnCartTotal">view/edit bag</button>
              <button className="btnCartTotal">checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

