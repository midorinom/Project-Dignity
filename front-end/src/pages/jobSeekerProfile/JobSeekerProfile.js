import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./jobSeekerProfile.module.css";
import dummyProfileData from "./job-seeker-profile-dummy";

const JobSeekerProfile = () => {
  const [profileIsCompleted, setProfileIsComplete] = useState(false);

  function displayProfile() {
    if (profileIsCompleted) {
      return <div>Completed Job Seeker Profile</div>;
    } else {
      return (
        <div className={styles.noProfileJobSeeker}>
          <p className={styles.noProfileHeading}>
            You Don't Have a Profile Yet
          </p>
          <p className={styles.noProfileText}>
            Create one now, so your future employer can get to know you better!
          </p>
          <Link to="/profile-form">
            <button className={styles.createProfileButton}>
              Create profile
            </button>
          </Link>
        </div>
      );
    }
  }

  return <>{displayProfile()}</>;
};

export default JobSeekerProfile;
