import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import backgroundShape from "../../style/images/backgroundShape.png";
// import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./login.css";
export default function Login() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const passwordRef = useRef();
// //   const { login } = useAuth();
  const [error] = useState("");
  const [loading] = useState(false);
//   const history = useHistory();

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
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="css-shadow">
            <Card.Body>
              <h2 className="css-text text-center mb-4">{t("signin")}</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {/* <StyledFirebaseAuth
                firebaseAuth={firebase.auth()}
                type="submit"
              /> */}
              <Form>
                <Form.Label>{t("userName")}</Form.Label>
                <Form.Group id="email" className="input-group">
                  <span class="input-group-addon">
                    <i class="im im-icon-Male"></i>
                  </span>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Label>{t("password")}</Form.Label>
                <Form.Group id="password" className="input-group">
                  <span class="input-group-addon">
                    <i class="im im-icon-Lock-2"></i>
                  </span>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <div className="d-flex justify-content-center mb-4 mt-4">
                  <Button disabled={loading} className="submit" type="submit">
                    {t("signin")}{" "}
                  </Button>
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
