import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__logo">Cakes</h1>
      </div>
      <div className="header__center">
        <h3> Products</h3>
        <h3> Order</h3>
        <h3> About</h3>
      </div>
      <div className="header__right">
        <p>social media</p>
      </div>
    </div>
  );
}

export default Header;
