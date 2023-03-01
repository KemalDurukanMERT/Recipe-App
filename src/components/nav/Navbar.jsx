import React, { useState } from "react";
import "./Navbar.style";
import Nav, { Brand, Menu, MenuLink, Hamburger, Logout } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ log, setLog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <Logout
          onClick={() => {
            setLog("Login");
            sessionStorage.clear();
            navigate(log === "Login" ? "login" : "logout")
          }}
        >
          {log}
        </Logout>
      </Menu>
    </Nav>
  );
};

export default Navbar;
