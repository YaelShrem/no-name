import React from 'react'
import "./userMenu.css"

export default function UserMenu() {
    return (
        <>
          <div className="user-menu-div d-flex justify-content-center">
              <Tabs className="main-tab">
                <Tab className="user-tab" label="סקירה כללית">
                <div className="p1">
              <p>הנכם מוזמנים לחוויה קולינרית, בריאה, מגוונת ובאווירה אחרת.</p>
              <p>שילוב של בריא וטעים לצד שירות אדיב ומקצועי.</p>
              <p>ניתן לקיים אירועים בסניף ולהזמין משלוחים.</p>
              <p>​השירותים והחנייה בסניף נגישים</p>
         <br></br>
              <p>הנכם מוזמנים לחוויה קולינרית, בריאה, מגוונת ובאווירה אחרת.</p>
              <p>שילוב של בריא וטעים לצד שירות אדיב ומקצועי.</p>
              <p>ניתן לקיים אירועים בסניף ולהזמין משלוחים.</p>
              <p>​השירותים והחנייה בסניף נגישים.</p>
            </div>
                </Tab>
                <Tab className="user-tab" label="הזמנות">
                  <div className="p1">כאן תוכלו להזמין את המוצרים שלכם</div>
                </Tab>
                <Tab  className="user-tab" label="המלצות">
                  <div className="p1">כאן תוכלו לראות את ההמלצות עלינו</div>
                </Tab>
              </Tabs>
            </div>   
        </>
    )
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
  