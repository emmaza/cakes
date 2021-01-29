import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__logo">Cakes</h1>
      </div>
      <div className="header__center">
        <p>产品及价格 Products</p>
        <p>购买方式 Order</p>
        <p>简介 About</p>
      </div>
      <div className="header__right">
        <p>social media</p>
      </div>
    </div>
  );
}

export default Header;
