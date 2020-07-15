import React from "react";
import "../styles/header.scss";
import logo from "../logo2.svg";

const Header = (props) => {
  return (
    <header>
      <h1>Change is expected, growth is voluntary — and so much fun!</h1>
      <img src={logo} />
    </header>
  );
};

export default Header;
