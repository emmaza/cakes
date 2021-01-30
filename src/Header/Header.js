import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__logo">Cakes</h1>
      </div>
      <div className="header__center">

        <h3> <Link style={{ textDecoration: 'none' }} to="/">Products</Link></h3>
        <h3> <Link style={{ textDecoration: 'none' }} to="/order">Order</Link></h3>
        <h3> <Link style={{ textDecoration: 'none' }} to="/about"> About</Link></h3>
      </div>
      <div className="header__right">
        <p>social media</p>
      </div>
    </div>
  );
}

export default Header;
