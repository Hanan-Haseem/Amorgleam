

import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "./Amorgleam.png"; // Replace with your logo path
import "./footer.css";

const navLinks1 = [
  { path: "/", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/product", display: "Product" },
];

const navLinks2 = [
  { path: "/contact", display: "Contact" },
  { path: "/cart", display: "Cart" },
  { path: "/login", display: "Login" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="logo mb-4">
              <img src={logo} alt="logo" style={{ width: "150px" }} />
              <p className="mt-3">
              Enhancing beauty with premium skincare and haircare solutions.
              </p>
              <div className="social__links d-flex align-items-center gap-3">
                <Link to="#"><i className="ri-facebook-fill"></i></Link>
                <Link to="#"><i className="ri-linkedin-box-fill"></i></Link>
                <Link to="#"><i className="ri-instagram-line"></i></Link>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6">
            <h5 className="footer__link-title">Explore</h5>
            <ListGroup className="footer__quick-links">
              {navLinks1.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {navLinks2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <i className="ri-map-pin-line"></i>
                <span>Melbourne, Australia</span>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <i className="ri-mail-line"></i>
                <span>amorgleam@gmail.com</span>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <i className="ri-phone-line"></i>
                <span>+61 468 673 414</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

