import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo-instock.svg";
import { activeInventory } from "../helpers/activePage";

export default class Header extends Component {
  state = {
    inventory: "",
    location: "active"
  };
  activePage = event => {
    const clicked = event.target.className;
    console.log(event.name);
    if (clicked.indexOf("active") !== -1) {
      this.setState({
        [event.name]: ""
      });
    } else {
      this.setState({
        [event.name]: "active"
      });
    }
  };
  render() {
    return (
      <header className="header">
        <div className="header__wrap">
          <a className="header__logo-link" href="/">
            <img className="header__logo" src={Logo} alt="InStock Logo" />
          </a>
          <nav className="header__menu">
            <Link
              className={`header__menu-link ${this.state.inventory}`}
              to="/inventory"
              onClick={activeInventory}
              id="inventory"
            >
              Inventory
            </Link>
            <Link
              className={`header__menu-link ${this.state.location}`}
              to="/locations"
              onClick={activeInventory}
              id="locations"
            >
              Locations
            </Link>
          </nav>
        </div>
        {/* <Link className="header__logo-link" to="/">
        <img className="header__logo" src={Logo} alt="BrainFlix Logo" />
      </Link>
      <Link to="/upload">
        <button className="header__button">UPLOAD</button>
      </Link> */}
      </header>
    );
  }
}
