import React from "react";
import "./productMenu.css";
import { Button } from "@material-ui/core";

export default function ProductMenu() {
  return (
    <>
      <div className="wrapper-product-menu d-flex justify-content-center align-items-center col-lg-8 col-md-12 col-sm-12">
        <div className="tab-div-product-menu d-flex justify-content-between">
          <Tabs className="d-flex">
            <Tab className="product-tab" label="קטלוג מוצרים"></Tab>
            <Tab className="product-tab" label="סל הקניות שלי"></Tab>
            <Tab className="product-tab" label="לסיים הזמנה"></Tab>
          </Tabs>
        </div>
       
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
