import React from 'react';
import Parser from 'html-react-parser';
import './pricing.css';

export default function Pricing() {
    const icon={
        checkCircle: `<svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-check2-circle try mini-icon check-icon"
                            viewBox="0 0 16 16">
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
        {/* <center>
          <h1>Pricing Table</h1>
        </center> */}
        <section className="price-comparison">
            <div className="price-column">
                <div className="price-header">
                    <div className="price price-circle">
                        {/* <div className="dollar-sign">$</div> */}
                        10
                        <div className="per-month">לחודש</div>
                    </div>
                    </div>
                    <div className="plan-name">Basic</div>
                <div className="divider" />
                <div className="feature">
                {Parser(icon.checkCircle)}
                        Feature A
                </div>
                <div className="feature">
                {Parser(icon.checkCircle)}
                    Feature B
                </div>
                <div className="feature inactive">
                {Parser(icon.checkCircle)}
                     Feature C
                </div>
                <div className="feature inactive">
                {Parser(icon.checkCircle)}
                  Feature D
                </div>
                <div className="feature inactive">
                {Parser(icon.checkCircle)}
                 Feature E
                </div>
                <div className="feature inactive">
                {Parser(icon.checkCircle)}
                     Feature F
                </div>
                <button className="cta">Start Today</button>
            </div>

            <div className="price-column popular">
                {/* <div className="most-popular">Most Popular</div> */}
                <div className="price-header">
                    <div className="price price-circle-light">
                        <div className="dollar-sign">$</div>
                        20
                        <div className="per-month">/mo</div>
                    </div>
                    <div className="plan-name">Professional</div>
                </div>
                <div className="divider" />
                <div className="feature">
            {Parser(icon.checkCircleWhite)}
                 Feature A
                </div>
                <div className="feature">
                {Parser(icon.checkCircleWhite)}
                    Feature B
                </div>
                <div className="feature">
                {Parser(icon.checkCircleWhite)}
                    Feature C
                </div>
                <div className="feature">
                {Parser(icon.checkCircleWhite)}
                     Feature D
                </div>
                <div className="feature inactive">
                {Parser(icon.checkCircleWhite)}
                     Feature E
                </div>
                <div className="feature inactive">
                {Parser(icon.checkCircleWhite)}
                     Feature F
                </div>
                <button className="cta">Start Today</button>
            </div>

            <div className="price-column">
            <div className="price-header">
                <div className="price price-circle">
                    <div className="dollar-sign">$</div>
                    50
                <div className="per-month">/mo</div>
            </div>
            <div className="plan-name">Enterprise</div>
        </div>
        <div className="divider" />
        <div className="feature">
        {Parser(icon.checkCircle)}
             Feature A
        </div>
        <div className="feature">
        {Parser(icon.checkCircle)}
          Feature B
        </div>
        <div className="feature">
        {Parser(icon.checkCircle)}
            Feature C
        </div>
        <div className="feature">
        {Parser(icon.checkCircle)}
          Feature D
        </div>
         <div className="feature">
         {Parser(icon.checkCircle)}
      Feature E
         </div>
       <div className="feature">
       {Parser(icon.checkCircle)}
          Feature F
     </div>
    <button className="cta">Start Today</button>
  </div>
</section>
</>
    )
}
