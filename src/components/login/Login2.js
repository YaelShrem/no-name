import React, { useRef, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundShape from "../../style/images/backgroundShape.png";
import "./login.css";

export default function Login2() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const { login } = useAuth();
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div>
        <img
          src={backgroundShape}
          alt={backgroundShape}
          className="background-shape"
        />
      </div>
      <Container
        dir="rtl"
        className="container-login d-flex align-items-center justify-content-center"
      >
        <div className="wrapper-card-login d-flex justify-content-center col-4">
          <Card className="css-shadow">
            <Card.Body className="card d-flex justify-content-center align-items-center">
              <div className="sign-in-form style-1 d-flex flex-column justify-content-between">
                <div className="tab-div d-flex-column justify-content-between">
                  <Tabs>
                    <Tab label="SIGN UP">
                      {/* Login */}
                      <h3 className="wellcome-login">Wellcome to easycart!</h3>
                      <p className="psign">sign in with Google</p>
                      <button
                        variant="contained"
                        type="button"
                        className="login-with-google-btn d-flex justify-content-center align-items-center"
                      > 
                      <p className="p-google-button m-0">Google</p>
                        <img
                          class="firebaseui-idp-icon"
                          alt=""
                          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        ></img>{" "}
                       
                      </button>

                      <div className="header__center">Or</div>
                      <Form className="form formRegister  d-flex flex-column justify-content-between">
                        <TextField
                          id="userName"
                          label="user name"
                          type="text"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <TextField
                          id="email"
                          label="Email"
                          type="text"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <TextField
                          id="password"
                          label="Password"
                          type="password"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center w-100">
                            <section title=".roundedOne">
                              <div class="roundedOne">
                                <input
                                  type="checkbox"
                                  value="None"
                                  id="roundedOne"
                                  name="check"
                                  //  checked
                                />
                                <label
                                  for="roundedOne"
                                  className="labelClass"
                                ></label>
                              </div>
                            </section>
                            <p className="link-login">Remember me</p>
                          </div>
                          <p className="link-login">Recover password</p>
                        </div>
                      </Form>

                      <div className="d-flex justify-content-center mt-4">
                        <Button
                          variant="contained"
                          type="submit"
                          disabled={loading}
                          className="submit"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Tab>
                    <Tab className="" label="SIGN IN">
                      {/* Register */}
                      <h2>Welcome to easycart!</h2>
                      <p className="psign">sign in with Google</p>
                      <button
                        variant="contained"
                        type="button"
                        className="login-with-google-btn d-flex justify-content-center align-items-center"
                      >
                        <p className="p-google-button m-0">Google</p>
                        <img
                          class="firebaseui-idp-icon"
                          alt=""
                          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        ></img>{" "}
                      </button>

                      <div className="header__center">Or</div>
                      <Form className="form  d-flex flex-column justify-content-between">
                        <TextField
                          id="email"
                          label="Email"
                          type="text"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <TextField
                          id="password"
                          label="Password"
                          type="password"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center w-100">
                            <section title=".roundedOne">
                              <div class="roundedOne">
                                <input
                                  type="checkbox"
                                  value="None"
                                  id="roundedOne"
                                  name="check"
                                  checked
                                />
                                <label
                                  for="roundedOne"
                                  className="labelClass"
                                ></label>
                              </div>
                            </section>
                            <p className="link-login">Remember me</p>
                          </div>
                          <p className="link-login">Recover password</p>
                        </div>
                      </Form>

                      <div className="d-flex justify-content-center mt-4">
                        <Button
                          variant="contained"
                          type="submit"
                          disabled={loading}
                          className="submit"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Card.Body>
          </Card>
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
        <div className="tab-content d-flex flex-column justify-content-between">
          {content}
        </div>
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
