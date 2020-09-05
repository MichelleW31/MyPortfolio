import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ showMobileMenu }) => {
  const toggleMenu = () => {
    const topNavBar = document.querySelector(".topnavbar");
    const middleNavBar = document.querySelector(".middlenavbar");
    const bottomNavBar = document.querySelector(".bottomnavbar");

    topNavBar.classList.toggle("topclick");
    middleNavBar.classList.toggle("middleclick");
    bottomNavBar.classList.toggle("bottomclick");

    showMobileMenu();
  };

  return (
    <div className="hamburger_menu" onClick={toggleMenu}>
      <div className="bar topnavbar transition"></div>
      <div className="bar middlenavbar transition"></div>
      <div className="bar bottomnavbar transition"></div>
    </div>
  );
};

export default Hamburger;
