import React from "react";
import backgroundGray from "../../style/images/backgroundGray.png";
import imageFood from "../../style/images/imageFood.png";
import "./BusinessDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";
import Recommendations from "../recommendations/Recommendations";

export default function BusinessDetails() {
  return (
    <>
    <div>
      <div
        className=""
        style={{ height: "30vh", minHeight: "650px", marginTop: "77px" }}
      >
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
        <Container
          className="d-flex justify-content-between"
          style={{ width: "75vw",height: "30vh", minHeight: "500px" }}
        >
          <div className="d-flex flex-column justify-content-between align-items-end">
            <p className="details">פרטי המסעדה</p>
            <p className="preDetails">כתובת</p>
              <div className="d-1">
                <p>יגאל אלון 51 תל אביב</p>
                <p> 6706204 Tel Aviv</p>
              </div>
            
            <a className="map" href="#!">
              להצגה במפה
            </a>
              <p className="preDetails">שעות פתיחה</p>
              <div className="d-1">
                <p>ראשון 10.00 –24.00 </p>
                <p> שני - חמישי 10.00–24.00 </p>
                <p>שישי 10.00–14.00 </p>
                <p>שבת סגור</p>
              </div>
          </div>

          <div className="d-flex flex-column">
            <div className="tabs d-flex">
              <Tabs>
                <Tab label="סקירה כללית">
                <div className="p1">
              <p>.הנכם מוזמנים לחוויה קולינרית, בריאה, מגוונת ובאווירה אחרת</p>
              <p>.שילוב של בריא וטעים לצד שירות אדיב ומקצועי</p>
              <p>.ניתן לקיים אירועים בסניף ולהזמין משלוחים</p>
              <p>.​השירותים והחנייה בסניף נגישים</p>
         <br></br>
              <p>.הנכם מוזמנים לחוויה קולינרית, בריאה, מגוונת ובאווירה אחרת</p>
              <p>.שילוב של בריא וטעים לצד שירות אדיב ומקצועי</p>
              <p>.ניתן לקיים אירועים בסניף ולהזמין משלוחים</p>
              <p>.​השירותים והחנייה בסניף נגישים</p>
            </div>
                </Tab>
                <Tab label="הזמנות">
                  <div className="p1">כאן תוכלו להזמין את המוצרים שלכם</div>
                </Tab>
                <Tab label="המלצות">
                  <div className="p1">כאן תוכלו לראות את ההמלצות עלינו</div>
                </Tab>
              </Tabs>
            </div>
            
          </div>
        </Container>
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
