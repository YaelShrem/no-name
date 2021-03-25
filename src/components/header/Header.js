import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./header.css";
import Icon from "../Icon";
//import { useAuth } from "../AuthContext";

/*            {/* <nav className="nav-header">
                <Icon value="logo" size="large"/>
                <div>
                <button /*onClick={}
                        className="css-btn"><Icon value="food" size="small"/></button>
                  <button /*onClick={handleLogout}
                          className="css-btn"><Icon value="food" size="small"/></button>       
                </div>
    </nav>
*/

export default function Header() {
  // const [error, setError] = useState("");
  const [language, setLanguage] = useState("en");
  const [languageView, setLanguageView] = useState("Language");
  // const [flag, setFlag] = useState(true);
  const { t, i18n } = useTranslation();
  // const history = useHistory();

  const handleLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  //const { currentUser,logout } = useAuth();

  // async function handleLogout() {
  //   setError("");
  //   try {
  //     //   await logout()
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <header>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav-header"
      >
        <Navbar.Brand href="/">
          <h6>EasyCart</h6>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar-collapse-header" id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">{t('home')}</Nav.Link>
            <Nav.Link href="#categories">{t('Categories')}</Nav.Link>
            <Nav.Link href="/add">{t('Post for free')}</Nav.Link>
            <Nav.Link href="/signup">{t('sign up | sign in')}</Nav.Link>
            <NavDropdown title={languageView} id="collasible-nav-dropdown">
              <NavDropdown.Item className="animate slideIn"
               onClick={() => { setLanguageView('English'); handleLanguage('en') }}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
                onClick={() => { setLanguageView('עברית'); handleLanguage('he') }}>
                עברית
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
               onClick={() => { setLanguageView('Spanish'); handleLanguage('en') }}
               href="/comming-soon">
                Español
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
                onClick={() => { setLanguageView('French'); handleLanguage('en') }}
                href="/comming-soon">
                français
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
                onClick={() => { setLanguageView('Russian'); handleLanguage('en') }}>
                русский
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
                onClick={() => { setLanguageView('Italian'); handleLanguage('en') }}
                href="/comming-soon">
                Italiano
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
                onClick={() => { setLanguageView('Japanese'); handleLanguage('en') }}
                href="/comming-soon">
                日本人
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn" 
                onClick={() => { setLanguageView('Chinese'); handleLanguage('en') }}
                href="/comming-soon">
                中文
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn"
                onClick={() => { setLanguageView('Yiddish'); handleLanguage('en') }}
                href="/comming-soon">
                יידיש
              </NavDropdown.Item>
              <NavDropdown.Item className="animate slideIn" 
                onClick={() => { setLanguageView('Arabic'); handleLanguage('en') }}
                href="/comming-soon">
                عربى
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text className="icons-wrapper-header">
            <Icon name="cart" className="cart-icon-header"></Icon>
           <Icon name="userProphile" className="user-icon-header"></Icon>
           </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}