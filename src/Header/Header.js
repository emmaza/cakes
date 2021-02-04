import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../images/menu-24px.svg";
import { ReactComponent as CloseMenu } from "../images/clear-24px.svg";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__logo">The Taste</h1>
      </div>
      <div className={click ? "nav-options active" : "nav-options"}>
        <h3> <Link className="link" onClick={closeMobileMenu} to="/">Gallery</Link></h3>
        <h3> <Link className="link" onClick={closeMobileMenu} to="/order">Recipes</Link></h3>
        <h3> <Link className="link" onClick={closeMobileMenu} to="/about">About</Link></h3>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
            <MenuIcon className="menu-icon" />
          )}
      </div>
    </div>
  );
}

export default Header;
