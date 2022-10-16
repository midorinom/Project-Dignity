import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./jobSeekerProfile.module.css";
import RecommendedJobsCard from "../../components/jobSeekerProfile/RecommendedJobsCard";
import SkillsetsCard from "../../components/jobSeekerProfile/SkillsetsCard";
import dummyProfileData from "./job-seeker-profile-dummy";
import dummyRecommendedJobsData from "./recommendedJobs-dummy";

const JobSeekerProfile = () => {
  // Change this profileIsCompleted initial value to false/true to access the NoProfile/CompletedProfile pages
  const [profileIsCompleted, setProfileIsComplete] = useState(true);
  const [profileData, setProfileData] = useState(dummyProfileData);
  const [recommendedJobsData, setRecommendedJobsData] = useState(
    dummyRecommendedJobsData
  );

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
      // Map RecommendedJobsCard
      const recommendedJobsCards = recommendedJobsData.map((element) => (
        <RecommendedJobsCard jobData={element} key={Math.random()} />
      ));

      // Map SkillsetsCard
      const skillsetsCards = profileData.skills.map((element) => (
        <SkillsetsCard skillset={element} key={Math.random()} />
      ));

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
                  <img className={styles.bannerPhoto} alt="Banner Mugshot" />
                  <div className={styles.bannerText}>
                    <p className={styles.bannerName}>
                      {profileData.about.name}
                    </p>
                    <p className={styles.bannerAspirations}>
                      {profileData.about.aspiration}
                    </p>
                    <p className={styles.bannerBrandStatement}>
                      {profileData.about.brand}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.resumeMain}>
                <div className={styles.resumeSkillsets}>
                  <p className={styles.skillsetsTitle}>SkillSets</p>
                  <ul className={styles.skillsetsCards}>{skillsetsCards}</ul>
                </div>
                <div className={styles.resumeAbilityDifferences}></div>
                <div className={styles.resumeExperience}></div>
                <div className={styles.resumeEducation}></div>
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
              {recommendedJobsCards}
            </div>
          </div>
        </div>
      );
    }
  }

  const profilePage = displayProfile();
  return <>{profilePage}</>;
};

export default JobSeekerProfile;
