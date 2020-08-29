import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../icons/Logo";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo className={styles.Header_logo} fill="000" />
      <Hamburger />
    </header>
  );
};

export default Header;
