import { Component } from "react";
import logo from "./../resources/logo.png";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <img id="logo" src={logo} alt="logo" />
        <button id="login">Log in</button>
      </div>
    );
  }
}

export default Header;
