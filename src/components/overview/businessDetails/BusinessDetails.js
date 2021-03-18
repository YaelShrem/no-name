import React from "react";

import "./BusinessDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserMenu from "../../shoppingCart/userMenu/UserMenu";
import ProductMenu from "../../shoppingCart/productMenu/ProductMenu";
import Recommendations from "../../recommendations/Recommendations";  
export default function BusinessDetails() {
  return (
    <>
    <div>
      <div className="wrapperBuisness">
        {/* <div className="text d-flex align-items-end flex-column">
        <p className="name p-2">BIGA</p>
        <p className="menu p-2">מטבח | ביקריי | קפה</p>
        </div> */}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center w-100">
          <UserMenu/>
           <ProductMenu/>
           <Recommendations/>
        </div>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </>
  );
}

