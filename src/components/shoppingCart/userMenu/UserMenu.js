import React from "react";
import "./userMenu.css";
import AddReviews from "../../overview/addReviews/AddReviews";
import ReactScrollbar from 'react-scrollbar';

export default function UserMenu() {
 
  return (
    <>
      <div className="user-menu-div justify-content-center col-lg-8 col-md-10 col-sm-10">
        <Tabs className="main-tab">
          <Tab className="user-tab" label="Overview">
            <div className="content-overview"> 
            <ReactScrollbar className="content-overview">
        <div className="should-have-a-children scroll-me">
        <p>  Aenean in felis egestas, fringilla magna eget, lobortis tortor. Phasellus finibus sed enim sit amet luctus. Cras et ultrices mi, id venenatis massa. Suspendisse mattis justo a venenatis mattis. Pellentesque venenatis vehicula ullamcorper. Suspendisse placerat ligula velit, non varius dolor consectetur faucibus. Cras maximus nulla libero, ut tincidunt sapien finibus sit amet. Etiam tristique nulla elit, at dapibus neque dictum id.
           </p>
           <p>
            Aenean in felis egestas, fringilla magna eget, lobortis tortor. Phasellus finibus sed enim sit amet luctus. Cras et ultrices mi, id venenatis massa. Suspendisse mattis justo a venenatis mattis. Pellentesque venenatis vehicula ullamcorper. Suspendisse placerat ligula velit, non varius dolor consectetur faucibus. Cras maximus nulla libero, ut tincidunt sapien finibus sit amet. Etiam tristique nulla elit, at dapibus neque dictum id.
            </p>
        </div>
      </ReactScrollbar>
                    </div>
          </Tab>
          <Tab className="user-tab" label="Location"></Tab>

          <Tab className="user-tab" label="Add Reviews">
            <AddReviews />
          </Tab>
        </Tabs>
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
