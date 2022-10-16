import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./jobSeekerProfile.module.css";
import dummyProfileData from "./job-seeker-profile-dummy";

const JobSeekerProfile = () => {
  // Change this profileIsCompleted initial value to false/true to access the NoProfile/CompletedProfile pages
  const [profileIsCompleted, setProfileIsComplete] = useState(true);
  const [profileData, setProfileData] = useState(dummyProfileData);

  // Display either the NoProfile page or CompletedProfile page depending on whether profileIsCompleted
  function displayProfile() {
    if (!profileIsCompleted) {
      // NoProfile Page
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
    } else {
      // CompletedProfile Page
      return (
        <div className={styles.completedProfileJobSeeker}>
          <div className={styles.savePrintResumeContainer}>
            <button className={styles.savePrintResumeButton}>
              Save Resume as PDF
            </button>
            <button className={styles.savePrintResumeButton}>
              Print Your Resume
            </button>
          </div>
          <div className={styles.completedProfileJobSeekerBottom}>
            <div className={styles.resume}>
              <div className={styles.resumeBanner}>
                <button className={styles.editProfileButton}>
                  Edit Profile
                </button>
                <div className={styles.bannerContents}>
                  <img className={styles.bannerPhoto} />
                  <div className={styles.bannerText}>
                    <p>Name</p>
                    <p>Aspiration</p>
                    <p>Brand Statement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profileRecommendedJobs}>
              <div className={styles.recommendedJobsHeader}>
                <div className={styles.recommendedJobsHeaderLineOne}>
                  Only visible to you
                </div>
                <div className={styles.recommendedJobsHeaderLineTwo}>
                  Jobs Recommended For You
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return <>{displayProfile()}</>;
};

export default JobSeekerProfile;
