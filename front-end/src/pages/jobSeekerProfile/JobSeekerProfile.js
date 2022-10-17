import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./jobSeekerProfile.module.css";
import RecommendedJobsCard from "../../components/jobSeekerProfile/RecommendedJobsCard";
import SkillsetsCard from "../../components/jobSeekerProfile/SkillsetsCard";
import ExperienceCard from "../../components/jobSeekerProfile/ExperienceCard";
import EducationCard from "../../components/jobSeekerProfile/EducationCard";
import dummyProfileData from "./job-seeker-profile-dummy";
import dummyRecommendedJobsData from "./recommendedJobs-dummy";
import autismIcon from "../../components/jobSeekerProfile/images/autism.png";
import hearingIcon from "../../components/jobSeekerProfile/images/hearing.png";
import intellectualIcon from "../../components/jobSeekerProfile/images/intellectual.png";
import physicalIcon from "../../components/jobSeekerProfile/images/physical.png";
import visualIcon from "../../components/jobSeekerProfile/images/visual.png";

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

      // Map Experience Cards
      const experienceCards = profileData.experience.map((element) => (
        <ExperienceCard jobData={element} key={Math.random()} />
      ));

      // Map Education Cards
      const educationCards = profileData.education.map((element) => (
        <EducationCard jobData={element} key={Math.random()} />
      ));

      // Map AbilityDifferencesIcons
      const abilityDifferencesIcons = profileData.abilityDifferences.diff.map(
        (element) => {
          let iconImage = "";

          switch (element) {
            case "Autism":
              iconImage = autismIcon;
              break;
            case "Hearing":
              iconImage = hearingIcon;
              break;
            case "Intellectual":
              iconImage = intellectualIcon;
              break;
            case "Physical":
              iconImage = physicalIcon;
              break;
            case "Visual":
              iconImage = visualIcon;
              break;
            default:
              break;
          }

          return (
            <div className={styles.abilityDifferencesIcon} key={Math.random()}>
              <img
                src={iconImage}
                alt={`${element} Ability Difference Icon`}
                className={styles.abilityDifferencesImage}
              />
              <p className={styles.abilityDifferencesName}>{element}</p>
            </div>
          );
        }
      );

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
                  <p className={styles.skillsetsTitle}>Skillsets</p>
                  <ul className={styles.skillsetsCards}>{skillsetsCards}</ul>
                </div>
                <div className={styles.resumeAbilityDifferences}>
                  <p className={styles.abilityDifferencesTitle}>
                    About My Ability Differences
                  </p>
                  <div className={styles.abilityDifferencesIconsAndDescription}>
                    <div className={styles.abilityDifferencesIcons}>
                      {abilityDifferencesIcons}
                    </div>
                    <div className={styles.abilityDifferencesDescription}>
                      {profileData.abilityDifferences.diffDesc}
                    </div>
                  </div>
                  <div className={styles.abilityDifferencesSupport}>
                    <li>
                      <span className={styles.supportRequiredTypeWords}>
                        Type of Support Required:{" "}
                      </span>
                      {profileData.abilityDifferences.support.length === 1
                        ? profileData.abilityDifferences.support[0]
                        : [...profileData.abilityDifferences.support].join(
                            ", "
                          )}
                    </li>
                    <br />
                    {profileData.abilityDifferences.supportDesc}
                  </div>
                  <div className={styles.abilityDifferencesExtraInfo}>
                    <li>
                      <span className={styles.supportRequiredTypeWords}>
                        My Preferred Mode of Communication:{" "}
                      </span>
                      {profileData.abilityDifferences.comm.length === 1
                        ? profileData.abilityDifferences.comm[0]
                        : [...profileData.abilityDifferences.comm].join(", ")}
                    </li>
                    <br />
                    <li>
                      <span className={styles.supportRequiredTypeWords}>
                        My Aids Used:{" "}
                      </span>
                      {profileData.abilityDifferences.aids.length === 1
                        ? profileData.abilityDifferences.aids[0]
                        : [...profileData.abilityDifferences.aids].join(", ")}
                    </li>
                    <br />
                    <li>
                      <span className={styles.supportRequiredTravel}>
                        I am{" "}
                        <b>
                          {profileData.abilityDifferences.travel
                            ? "able"
                            : "unable"}
                        </b>{" "}
                        to travel independently.
                      </span>
                    </li>
                  </div>
                </div>
                <div className={styles.resumeExperience}>
                  <p className={styles.experienceTitle}>Experience</p>
                  {experienceCards}
                </div>
                <div className={styles.resumeEducation}>
                  <p className={styles.educationTitle}>Education</p>
                  {educationCards}
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
