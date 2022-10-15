import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import dignityCareersLogo from "./dignity-careers-logo.png";

const NavBar = () => {
  return (
    <div className={`${styles.navBar} centered`}>
      <div className={styles.dignityCareersLogoContainer}>
        <Link to="/" className={styles.linkDignityCareersLogo}>
          <img
            src={dignityCareersLogo}
            alt="Dignity Careers Logo"
            className={styles.dignityCareersLogo}
          />
        </Link>
        <p className={styles.dignityCareersName}>
          <Link to="/">
            <span className={styles.dignityWord}>Dignity</span>Careers
          </Link>
        </p>
      </div>
      Nav Bar
    </div>
  );
};

export default NavBar;
