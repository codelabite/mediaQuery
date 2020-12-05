import React, { useState } from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SideHeader from "./SideHeader";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ClickEffect = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ zIndex: "999" }}>
      <div className="header">
        <div className="header__container">
          <img src={logo} />
          <div className="header__containerNav">
            <div className="header__containerNavItem">Home</div>
            <div className="header__containerNavItem">About</div>
            <div className="header__containerNavItem">Contact</div>
          </div>
          <div className="searchContainer">
            <div className="search">
              <input placeholder="Search" />
            </div>
          </div>
          <div className="mobileHeader">
            <MenuIcon style={{ color: "white" }} onClick={ClickEffect} />
          </div>
        </div>
        <SideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Header;
