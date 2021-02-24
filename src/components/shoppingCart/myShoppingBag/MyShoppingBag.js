import React from "react";
import Parser from "html-react-parser";
import { Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import ProductMenu from "../productMenu/ProductMenu";
import ProductImg from "../../../style/images/productImg.png";
import "./myShoppingBag.css";

export default function MyShoppingBag() {
  const icon = {
    clockFill: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#344968" class="bi bi-clock-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          </svg>`,
  };
  return (
    <>
      <Container className="container-shopping-bag d-flex-col justify-content-center">
        <div className="d-flex justify-content-between">
          <ProductMenu></ProductMenu>
          <Button className="show-all-bag" variant="contained">
            תציג הכל
          </Button>
        </div>
        <div className="d-flex">
          <img
            className="img-shopping-bag"
            src={ProductImg}
            alt={ProductImg}
          ></img>
          <div className="div-detail-bag justify-content-between">
            <p className="p1-bag">מנת ירקות של בורגר</p>
            <div className="div-time-bag d-flex">
              {Parser(icon.clockFill)}
              <p className="p2-bag">זמן משלוח 30 דק'</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="p3-bag">ש"ח 25</p>
              <text className="count">+ 2 -</text>
            </div>
          </div>
        </div>
        <div>
          <Button className="invite" variant="contained">
            אני רוצה להזמין
          </Button>
        </div>
      </Container>
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
