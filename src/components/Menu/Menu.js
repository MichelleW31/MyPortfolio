import React from "react";
import styles from "./Menu.module.scss";
import ComputerIcon from "../../icons/ComputerIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import UserIcon from "../../icons/UserIcon";

const Menu = () => {
  return (
    <>
      <ul className={styles.MenuItems}>
        <div className={`${styles.MenuItem} ${styles.AboutMe}`}>
          <UserIcon />
          <li>About Me</li>
        </div>
        <div className={`${styles.MenuItem} ${styles.Projects}`}>
          <ComputerIcon />
          <li>Projects</li>
        </div>
        <div className={`${styles.MenuItem} ${styles.ContactMe}`}>
          <PhoneIcon />
          <li>Contact Me</li>
        </div>
      </ul>
    </>
  );
};

export default Menu;
