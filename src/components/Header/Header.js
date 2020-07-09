import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../icons/Logo";
import Hamburger from "../HamburgerMenu/Hamburger";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo className={styles.Header_logo} />
      <Hamburger />
    </header>
  );
};

export default Header;
