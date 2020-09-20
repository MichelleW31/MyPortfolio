import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../icons/Logo";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.Header}>
      <Logo className={styles.Header_logo} fill="000" />
      <Hamburger showMobileMenu={showMobileMenu} />

      <div
        className={
          showMenu
            ? `${styles.Visible} ${styles.MobileMenu}`
            : styles.MobileMenu
        }
      >
        <Menu />
      </div>
    </header>
  );
};

export default Header;
