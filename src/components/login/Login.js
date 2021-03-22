import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import backgroundShape from "../../style/images/backgroundShape.png";
// import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./login.css";


export default function Login() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const passwordRef = useRef();
  // //   const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //   const history = useHistory();

  return (
    <>
      <Tabs
        // value={value}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        // aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        {/* <Tab label="Disabled" disabled /> */}
        <Tab label="Active" />
      </Tabs>
      <div>
        <img
          src={backgroundShape}
          alt={backgroundShape}
          className="background-shape"
        />
      </div>
      <Container
        dir="rtl"
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="css-shadow">
            <Card.Body className="card">
              <h2 className="css-text text-center mb-4"></h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {/* <StyledFirebaseAuth
                firebaseAuth={firebase.auth()}
                type="submit"
              /> */}
              <Form>
                <Form.Label type="email" ref={emailRef} required>
                  {/* {t("userName")} */}
                </Form.Label>
                <form noValidate autoComplete="off">
                  <TextField id="standard-basic" label="אמייל" />
                </form>
                <Form.Label type="email" ref={passwordRef} required>
                  {/* {t("userName")} */}
                </Form.Label>
                <form noValidate autoComplete="off">
                  <TextField
                    id="standard-password-input"
                    label="סיסמא"
                    type="password"
                  />
                </form>
                <div className="d-flex justify-content-center mb-4 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="submit"
                    type="submit"
                  >
                    הרשם{" "}
                  </button>
                </div>
              </Form>
              {/* <div className="w-100 text-center mt-3">
                <Link to="/forgot-password" className="linka">
                  {t("forgotpassword")}
                </Link>
              </div> */}
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-4 text">
            {t("needaccount")}{" "}
            {/* <Link to="/signup" className="linka">
              {t("signup")}
            </Link> */}
          </div>
        </div>
      </Container>
      <script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </script>{" "}
    </>
  );
}
