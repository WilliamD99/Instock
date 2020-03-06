import React from "react";
/* import { Link } from "react-router-dom"; */
import Logo from "../assets/Logo/Logo-instock.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <a className="header__logo-link" href="/">
          <img className="header__logo" src={Logo} alt="InStock Logo" />
        </a>
        <nav className="header__menu">
          <a className="header__menu-link active" href="/">
            Inventory
          </a>
          <a className="header__menu-link" href="/">
            Locations
          </a>
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
