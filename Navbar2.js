import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Form, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import classes from "./Navbar2.module.css";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PersonOutline } from "@mui/icons-material";

const Navbar2 = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <div className={classes.container}>
        <div className={classes.navlinks}>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link href="#">Store</Nav.Link>
              <Nav.Link href="#">Graphics</Nav.Link>
              <NavDropdown title="Lookbooks">
                <NavDropdown.Item href="#">Lookbook 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Lookbook 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Lookbook 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Favorites</Nav.Link>
              <Nav.Link href="#">
                <PersonOutline />
              </Nav.Link>
              <Nav.Link href="#">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className={classes.logo}>
          <Navbar.Brand className={classes.navbrand}>
            <img src={logo} alt="" />
          </Navbar.Brand>
        </div>
        <div className={classes.search}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar2;
