import React from "react";
import { Head, Nav, Logo, Menu, MenuItem, Img } from "./HeaderElements";
import logo from "../../images/logo.svg";
import img from "../../images/illustration-intro.png";

const Header = () => {
  return (
    <Head>
      <Nav>
        <Logo src={logo} />
        <Menu>
          <MenuItem>features</MenuItem>
          <MenuItem>team</MenuItem>
          <MenuItem>sign in</MenuItem>
        </Menu>
      </Nav>
      <Img src={img} />
    </Head>
  );
};

export default Header;
