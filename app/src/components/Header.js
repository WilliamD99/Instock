import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo-instock.svg";
import activePage from "../helpers/activePage";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <a className="header__logo-link" href="/">
          <img className="header__logo" src={Logo} alt="InStock Logo" />
        </a>
        <nav className="header__menu">
          <Link
            className="header__menu-link"
            to="/inventory"
            onClick={activePage}
            id="inventory"
          >
            Inventory
          </Link>
          <Link
            className="header__menu-link active"
            to="/locations"
            onClick={activePage}
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
