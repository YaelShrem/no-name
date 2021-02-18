import React from 'react';
import Parser from 'html-react-parser';
import './pricing.css';

export default function Pricing() {
    const icon={
        checkCircle: `<svg xmlns="http://www.w3.org/2000/svg"
                            fill="url('#myGradient')"
                            class="bi bi-check2-circle try mini-icon check-icon"
                            viewBox="0 0 16 16">
                            <defs>
                            <linearGradient id="myGradient" gradientTransform="rotate(90)">
                              <stop offset="5%"  stop-color="#4DDC6B" />
                              <stop offset="95%" stop-color="#22C5BB" />
                            </linearGradient>
                          </defs>                                             
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
      </svg>`, 
      checkCircleWhite: `<svg xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="bi bi-check2-circle try mini-icon check-icon-white"
      viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
      </svg>`, 
    };
    return (
        <>
<section>
  {/* <center>
      <h1>
          Responsive Pricing Table (HTML &amp; CSS) Only
      </h1>
</center> */}

  <div className="pricing pricing-palden">
    <div className="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-0" style={{minHeight: 497}}>
      <div className="pricing-deco">
        <div className="pricing-price pricing-circle">
          {/* <span className="pricing-currency">$</span> */}
          29
          {/* <span className="pricing-period">לחודש</span> */}
        </div>
        <h3 className="pricing-title">Freelance</h3>
      </div>
      <p>short description of package</p>
      <br/>
      <ul className="pricing-feature-list">
        <li className="pricing-feature">
           {Parser(icon.checkCircle)}
            1 GB of space
        </li>
        <li className="pricing-feature">
            {Parser(icon.checkCircle)}
            Support at $25/hour</li>
        <li className="pricing-feature">
            {Parser(icon.checkCircle)}
            Limited cloud access
        </li>
      </ul>
      <button className="pricing-action">Choose plan</button>
    </div>

    <div className="pricing-item features-item ja-animate pricing__item--featured" data-animation="move-from-bottom" data-delay="item-1" style={{minHeight: 497}}>
      <div className="pricing-deco">
        <div className="pricing-price pricing-circle light">
            {/* <span className="pricing-currency">$</span> */}
            59
          {/* <span className="pricing-period">/ mo</span> */}
        </div>
        <h3 className="pricing-title text-light">
            Business
        </h3>
      </div>
      <p className="text-light">short description of package</p>
      <br/>
      <ul className="pricing-feature-list text-light">
        <li className="pricing-feature">
            {Parser(icon.checkCircleWhite)}
            5 GB of space
        </li>
        <li className="pricing-feature">
            {Parser(icon.checkCircleWhite)}
            Support at $5/hour
        </li>
        <li className="pricing-feature">
            {Parser(icon.checkCircleWhite)}
            Full cloud access
        </li>
      </ul>
      <button className="pricing-action light">Choose plan</button>
    </div>

    <div className="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-2" style={{minHeight: 497}}>
      <div className="pricing-deco">
        <div className="pricing-price pricing-circle">
            {/* <span className="pricing-currency">$</span> */}
            99
           {/* <span className="pricing-period">/ mo</span> */}
        </div>
        <h3 className="pricing-title">Enterprise</h3>
      </div>
      <p>short description of package</p>
      <br/>
      <ul className="pricing-feature-list">
        <li className="pricing-feature">
            {Parser(icon.checkCircle)}
            10 GB of space
        </li>
        <li className="pricing-feature">
            {Parser(icon.checkCircle)}
            Support at $5/hour
        </li>
        <li className="pricing-feature">
            {Parser(icon.checkCircle)}
            Full cloud access
        </li>
      </ul>
      <button className="pricing-action">Choose plan</button>
    </div>
  </div>
  
</section>

</>
    )
}
