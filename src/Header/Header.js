import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__logo">The Taste</h1>
      </div>
      <div className="header__center">

        <h3> <Link className="link" to="/">Gallery</Link></h3>
        <h3> <Link className="link" to="/order">Recipes</Link></h3>
        <h3> <Link className="link" to="/about"> About</Link></h3>
      </div>
      <div className="header__right">
        <p>social media</p>
      </div>
    </div>
  );
}

export default Header;
