// import {Link} from "react-router-dom"
import React from "react";
import {Nav} from "./Navbar.style";
import {Brand, Menu, MenuLink} from "./Navbar.style";


const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
