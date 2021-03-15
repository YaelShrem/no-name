import React from "react";
import "./productMenu.css";
import { Button } from "@material-ui/core";
import ProductCatalog from "../productCatalog/ProductCatalog";
import MyShoppingBag from "../shoppingBag/ShoppingBag";


export default function ProductMenu() {
  return (
    <>
      <div className="wrapper-product-menu d-flex justify-content-center align-items-center w-100">
        <div className="tab-div-product-menu d-flex justify-content-between col-lg-8 col-md-10 col-sm-10">
          <Tabs className="d-flex">
            <Tab className="product-tab" label="Product catalog">
              <ProductCatalog/>
            </Tab>
            <Tab className="product-tab" label="My shopping cart">
              <MyShoppingBag/>
            </Tab>
            <Tab className="product-tab" label="Finish an order"></Tab>
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
