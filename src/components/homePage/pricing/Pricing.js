import React from 'react';
import './pricing.css';
import Icon from '../../Icon'
export default function Pricing() {
    return (
        <>
<section className="pricing-section">
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
          <Icon name="checkCircle"/>
            1 GB of space
        </li>
        <li className="pricing-feature">
          <Icon name="checkCircle"/>
            Support at $25/hour</li>
        <li className="pricing-feature">
          <Icon name="checkCircle"/>
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
            <Icon name="checkCircleWhite"/>
            5 GB of space
        </li>
        <li className="pricing-feature">
        <Icon name="checkCircleWhite"/>
            Support at $5/hour
        </li>
        <li className="pricing-feature">
        <Icon name="checkCircleWhite"/>
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
        <Icon name="checkCircle"/>
            10 GB of space
        </li>
        <li className="pricing-feature">
        <Icon name="checkCircle"/>
            Support at $5/hour
        </li>
        <li className="pricing-feature">
        <Icon name="checkCircle"/>
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
