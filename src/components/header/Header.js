import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
/*import {
  Link,
  useHistory
} from "react-router-dom";*/
import Icon from "../../style/Icon";
import './header.css';
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
    return (
            <Navbar fixed="top"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                className="nav-header">
                <Navbar.Brand href="/">
                    <Icon value="logo" size="medium" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto main-nav">
                        <Nav.Link href="/">
                            Categories
            </Nav.Link>
                        <Nav.Link href="/">
                            Post for free
            </Nav.Link>
                        <Nav.Link href="/signup">
                            Signin | Signup
            </Nav.Link>
                        <NavDropdown title="Language" id="collasible-nav-dropdown">
                            <NavDropdown.Item className="animate slideIn"/*href="English"*/ >English</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn" /*href="Hebrew"*/>עברית</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn" /*href="Spanish"*/>Español</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="French"*/ >français</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="Russian"*/ >русский</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="Italian"*/ >Italiano</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="Japanese"*/ >日本人</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="Chinese"*/ >中文</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="Yiddish"*/ >יידיש</NavDropdown.Item>
                            <NavDropdown.Item className="animate slideIn"/*href="Arabic"*/ >عربى</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
