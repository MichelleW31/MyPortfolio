import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../icons/Logo";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo className={styles.Header_logo} />
      Hamburger menu
    </div>
  );
};

export default Header;
