import React, { useRef, useState } from "react";
import { TextField, FormControlLabel, Radio } from "@material-ui/core";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import backgroundShape from "../../style/images/backgroundShape.png";
import "./login.css";

export default function Login2() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //   const { login } = useAuth();
  // const [error, setError] = useState("");
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
        className="d-flex align-items-center justify-content-center col-4"
        style={{ minHeight: "100vh",minWidth:"400px"}}
      >
        <div
          className="col-12"
         
        >
          <Card className="css-shadow">
            <Card.Body className="d-flex justify-content-center">
              <div
                className="sign-in-form style-1"
                style={{ maxWidth: "300px" }}
              >
                <ul className="tabs-nav d-flex justify-content-center">
                  <li className>
                    <a href="#tab1">הרשם</a>
                  </li>
                  <li>
                    <a href="#tab2">התחבר</a>
                  </li>
                </ul>
                <div className="tabs-container alt">
                  {/* Login */}
                  <div
                    className="tab-content"
                    id="tab1"
                    style={{ display: "none" }}
                  >
                    <form method="post" className="login">
                      <p className="form-row form-row-wide">
                        <label htmlFor="username">
                          Username:
                          <i className="im im-icon-Male" />
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username"
                            defaultValue
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password"
                            id="password"
                          />
                        </label>
                        <span className="lost_password">
                          <a href="#">Lost Your Password?</a>
                        </span>
                      </p>
                      <div className="form-row">
                        <input
                          type="submit"
                          className="button border margin-top-5"
                          name="login"
                          defaultValue="Login"
                        />
                        {/* <div className="checkboxes margin-top-10">
                          <input
                            id="remember-me"
                            type="checkbox"
                            name="check"
                          />
                          <label htmlFor="remember-me">Remember Me</label>
                        </div> */}
                      </div>
                    </form>
                  </div>
                  {/* Register */}
                  <div
                    className="tab-content"
                    id="tab2"
                    style={{ display: "none" }}
                  >
                    <form method="post" className="register">
                      <p className="form-row form-row-wide">
                        <label htmlFor="username2">
                          Username:
                          <i className="im im-icon-Male" />
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username2"
                            defaultValue
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="email2">
                          Email Address:
                          <i className="im im-icon-Mail" />
                          <input
                            type="text"
                            className="input-text"
                            name="email"
                            id="email2"
                            defaultValue
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password1">
                          Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password1"
                            id="password1"
                          />
                        </label>
                      </p>
                      <p className="form-row form-row-wide">
                        <label htmlFor="password2">
                          Repeat Password:
                          <i className="im im-icon-Lock-2" />
                          <input
                            className="input-text"
                            type="password"
                            name="password2"
                            id="password2"
                          />
                        </label>
                      </p>
                      <input
                        type="submit"
                        className="button border fw margin-top-10"
                        name="register"
                        defaultValue="Register"
                      />
                    </form>
                  </div>
                </div>
                {/* <button class="button">bygole</button> */}
                <button
                  variant="contained"
                  type="button"
                  className="login-with-google-btn d-flex justify-content-center align-items-center"
                >
                  <img
                    class="firebaseui-idp-icon"
                    alt=""
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  ></img>{" "}
                  <p className="m-0">הרשם עם גוגל</p>
                </button>

                <div className="header__center">או</div>
                <Form className="form  d-flex flex-column justify-content-center">
                  <Form.Label type="email" ref={emailRef} required>
                    {/* {t("userName")} */}
                  </Form.Label>
                  <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="אמייל" />
                  </form>
                  <Form.Label
                    className="input-form"
                    type="email"
                    ref={passwordRef}
                    required
                  >
                    {/* {t("userName")} */}
                  </Form.Label>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="standard-password-input"
                      label="סיסמא"
                      type="password"
                    />
                  </form>
                  <div className="d-flex justify-content-around mb-3">
                    <p classnames="p">תזכור אותי</p>
                    <p className="p">אפס סיסמא</p>
                  </div>
                </Form>
                <section title=".roundedOne">
                  <div className="roundedOne">
                    <input
                      type="checkbox"
                      defaultValue="None"
                      id="roundedOne"
                      name="check"
                      defaultChecked
                    />
                    <label1 htmlFor="roundedOne" />
                  </div>
                </section>
                <div className="d-flex justify-content-center mb-4 mt-4">
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    className="submit"
                    type="submit"
                  >
                    הרשם
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

<div id="style-switcher">
  <h2>
    Color Switcher{" "}
    <a href="#">
      <i className="sl sl-icon-settings" />
    </a>
  </h2>
  <div>
    <ul className="colors" id="color1">
      <li>
        <a href="#" className="main" title="Main" />
      </li>
      <li>
        <a href="#" className="blue" title="Blue" />
      </li>
      <li>
        <a href="#" className="green" title="Green" />
      </li>
      <li>
        <a href="#" className="orange" title="Orange" />
      </li>
      <li>
        <a href="#" className="navy" title="Navy" />
      </li>
      <li>
        <a href="#" className="yellow" title="Yellow" />
      </li>
      <li>
        <a href="#" className="peach" title="Peach" />
      </li>
      <li>
        <a href="#" className="beige" title="Beige" />
      </li>
      <li>
        <a href="#" className="purple" title="Purple" />
      </li>
      <li>
        <a href="#" className="celadon" title="Celadon" />
      </li>
      <li>
        <a href="#" className="red" title="Red" />
      </li>
      <li>
        <a href="#" className="brown" title="Brown" />
      </li>
      <li>
        <a href="#" className="cherry" title="Cherry" />
      </li>
      <li>
        <a href="#" className="cyan" title="Cyan" />
      </li>
      <li>
        <a href="#" className="gray" title="Gray" />
      </li>
      <li>
        <a href="#" className="olive" title="Olive" />
      </li>
    </ul>
  </div>
</div>;