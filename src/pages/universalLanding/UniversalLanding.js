import React from "react";
import { Link } from "react-router-dom";
import styles from "./universalLanding.module.css";
import banner from "./banner.png";
import jobSeekerImage from "./jobSeekerImage.png";
import employerImage from "./employerImage.png";

const UniversalHome = () => {
  return (
    <div className={styles.universalLanding}>
      <div className={styles.bannerContainer}>
        <img src={banner} alt="banner" className={styles.banner} />
        <p className={styles.bannerText}>
          Since day one, our mission has been to restore dignity to the
          differently-abled through vocation with passion.
        </p>
      </div>

      <div className={styles.universalLandingBottom}>
        <div className={styles.universalLandingBottomText}>
          Let us help you fulfil your employment needs today
        </div>
        <div className={styles.iAmAJobSeekerAndEmployerContainer}>
          <div className={styles.iAmAjobSeekerImageContainer}>
            <Link to="/job-seekers" className={styles.imageLink}>
              <img
                src={jobSeekerImage}
                alt="I am a Job Seeker"
                className={styles.iAmAJobSeekerImage}
              />
            </Link>
            <div className={styles.iAmAJobSeekerButton}>I am a Job Seeker</div>
          </div>
          <div className={styles.iAmAjobSeekerImageContainer}>
            <Link to="/employers" className={styles.imageLink}>
              <img
                src={employerImage}
                alt="I am an Employer"
                className={styles.iAmAJobSeekerImage}
              />
            </Link>
            <div className={styles.iAmAJobSeekerButton}>I am an Employer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalHome;
