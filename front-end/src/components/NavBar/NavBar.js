import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import dignityCareersLogo from "./dignity-careers-logo.png";
import profileIcon from "./profile-icon.png";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.dignityCareersLogoContainer}>
        <Link to="/" className={styles.linkDignityCareersLogo}>
          <img
            src={dignityCareersLogo}
            alt="Dignity Careers Logo"
            className={styles.dignityCareersLogo}
          ></img>
        </Link>
        <p className={styles.dignityCareersName}>
          <Link to="/">
            <span className={styles.dignityWord}>Dignity</span>Careers
          </Link>
        </p>
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
