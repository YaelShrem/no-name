import React from "react";
import backgroundGray from "../../../style/images/backgroundGray.png";
import imageFood from "../../../style/images/imageFood.png";
import "./BusinessDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserMenu from "../../shoppingCart/userMenu/UserMenu"
// import Recommendations from "../recommendations/Recommendations";
export default function BusinessDetails() {
  return (
    <>
    <div>
      <div className="wrapperBuisness">
        <div style={{position:"relative"}}>
        <img src={backgroundGray} alt={backgroundGray}  className="imgGray" />
        <div className="text d-flex align-items-end flex-column">
        <p className="name p-2">BIGA</p>
        <p className="menu p-2">מטבח | ביקריי | קפה</p>
      </div>
        </div>
          <img src={imageFood} alt={imageFood} className="imageFood" />
        </div>
      </div>
      <div className="d-flex justify-content-center w-100">
        <div className="containerBuisnessDetails row">
          <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <UserMenu></UserMenu>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center" dir="ltr">
          <div className="d-flex flex-column justify-content-between align-items-end">
            <p className="details">פרטי המסעדה</p>
            <p className="preDetails">כתובת</p>
              <div className="d-1">
                <p className="pFooter">יגאל אלון 51 תל אביב</p>
                <p className="pFooter"> 6706204 Tel Aviv</p>
              </div>
            
            <a className="map" href="#!">
              להצגה במפה
            </a>
              <p className="preDetails">שעות פתיחה</p>
              <div className="d-1">
                <p className="pFooter">ראשון 10.00 –24.00 </p>
                <p className="pFooter"> שני - חמישי 10.00–24.00 </p>
                <p className="pFooter">שישי 10.00–14.00 </p>
                <p className="pFooter">שבת סגור</p>
              </div>
          </div>
          </div>
        </div>
        </div>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

      {/* <Recommendations/> */}
    </>
  );
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
