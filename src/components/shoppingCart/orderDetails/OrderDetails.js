import React from "react";
import "./orderdetails.css";
import { BootstrapInput ,Form } from "react-bootstrap";

export default function OrderDetails() {
  return (
    <>
      <div
        className="background"
        style={{ width: "100wh", hight: "100vh", direction: "rtl" }}
      >
        <Form className="d-flex-column">
          <div className="tabs d-flex">
            <Tabs>
              <Tab label="סקירה כללית">
                <div></div>
              </Tab>
              <Tab label="הזמנות">
                <div></div>
              </Tab>
              <Tab label="המלצות">
                <div>{/* <p>המלצות</p> */}</div>
              </Tab>
            </Tabs>
          </div>
          <p className="title">כמעט סיימנו...</p>
          <div className="detail">
            <p>נשאר רק לעדכן פרטי מייל וטלפון שלך וההזמנה בדרך...</p>
            <p>.זמן ההזמנה נחשב מרגע סיום ההזמנה</p>
          </div>
        </Form>
      </div>
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
