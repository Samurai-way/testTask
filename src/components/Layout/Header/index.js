import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header" data-testid="layout-header">
      <Link className="header__logo header__item" to="/" name="logo">
        TickerChart
      </Link>
      <Link
        className="header__button header__item"
        to="/settings"
        name="settings"
      >
        Settings
      </Link>
    </header>
  );
};

export default Header;
