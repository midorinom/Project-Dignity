import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import dignityCareersLogo from "./dignityCareersLogo.png";
import profileIcon from "./profileIcon.png";

const NavBar = () => {
  return (
    <div className={`${styles.navBar} border-bottom`}>
      <div className={styles.dignityCareersLogoContainer}>
        <Link to="/">
          <img
            src={dignityCareersLogo}
            alt="Dignity Careers Logo"
            className={styles.dignityCareersLogo}
          ></img>
          <p className={styles.dignityCareersName}>
            <span className={styles.dignityWord}>Dignity</span>Careers
          </p>
        </Link>
      </div>
      <div className={styles.navBarRight}>
        <div className={styles.accessibilityButton}>
          Need help seeing this site better?
        </div>
        <p className={styles.jobListingsButton}>
          <Link to="/job-listings">Job Listings </Link>
        </p>
        <div className={styles.profileIconContainer}>
          <Link to="/profile">
            <img
              src={profileIcon}
              alt="Profile Button"
              className={styles.profileIcon}
            />
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
