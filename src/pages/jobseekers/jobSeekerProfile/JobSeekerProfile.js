import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/userContext";
import styles from "./jobSeekerProfile.module.css";
import RecommendedJobsCard from "./resume/RecommendedJobsCard";
import SkillsetsCard from "./resume/SkillsetsCard";
import ExperienceCard from "./resume/ExperienceCard";
import EducationCard from "./resume/EducationCard";
import dummyRecommendedJobsData from "./recommendedJobs-dummy";
import autismIcon from "./resume/images/autism.png";
import hearingIcon from "./resume/images/hearing.png";
import intellectualIcon from "./resume/images/intellectual.png";
import physicalIcon from "./resume/images/physical.png";
import visualIcon from "./resume/images/visual.png";
import profilePic from "./profile.png";

const JobSeekerProfile = (props) => {
  console.log(props);
  // =========
  // Variables
  // =========
  // Change this profileIsCompleted initial value to false/true to access the NoProfile/CompletedProfile pages
  // const [profileIsCompleted, setProfileIsComplete] = useState(false);
  // const [profileData, setProfileData] = useState(undefined);

  const [recommendedJobsData, setRecommendedJobsData] = useState(
    dummyRecommendedJobsData
  );
  const [mappedComponents, setMappedComponents] = useState({});
  const userCtx = useContext(UserContext);

  // ====================================
  // onMount useEffect fetch Profile Data
  // ====================================
  useEffect(() => {
    getProfileData();
  }, [props.profileIsCompleted]);

  const getProfileData = async () => {
    console.log("get profile start");
    try {
      const res = await fetch(
        "https://project-dignity-backend.onrender.com/api/jobseekers/get",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: userCtx.userDetails.id }),
        }
      );
      const fetchedProfileData = await res.json();
      props.setProfileData(fetchedProfileData);
      console.log(`get profile end`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // check if logged in user already has a profile to render the appropriate view
    if (props.profileData !== undefined) {
      props.setProfileIsCompleted(true);
    } else {
      props.setProfileIsCompleted(false);
    }
  }, [props.profileData]);

  // ================================================================
  // useEffect to map the Resume Cards after profileData has been set
  // ================================================================
  useEffect(() => {
    if (props.profileData !== undefined)
      // to prevent this from running onMount {
      mapResumeCards();
  }, [props.profileData]);

  function mapResumeCards() {
    // Map SkillsetsCard
    const skillsetsCards = props.profileData.skills.map((element) => (
      <SkillsetsCard skillset={element} key={Math.random()} />
    ));

    // Map Experience Cards
    const experienceCards = props.profileData.experience.map((element) => (
      <ExperienceCard experience={element} key={Math.random()} />
    ));

    // Map Education Cards
    const educationCards = props.profileData.education.map((element) => (
      <EducationCard education={element} key={Math.random()} />
    ));

    // Map AbilityDifferencesIcons
    const abilityDifferencesIcons =
      props.profileData.abilityDifferences.diff.map((element) => {
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
        }

        return (
          <div className={styles.abilityDifferencesIcon} key={Math.random()}>
            <div style={{ transform: "scale(0.8)" }}>
              <img src={iconImage} alt={`${element} Ability Difference Icon`} />
            </div>

            <p className="text-center p-0 m-0">{element}</p>
          </div>
        );
      });

    // Set the mapped components to state
    setMappedComponents({
      skillsetsCards: skillsetsCards,
      experienceCards: experienceCards,
      educationCards: educationCards,
      abilityDifferencesIcons: abilityDifferencesIcons,
    });
  }

  // ==================================================================================================
  // Display either the NoProfile page or CompletedProfile page depending on whether profileIsCompleted
  // ==================================================================================================
  function displayProfile() {
    if (!props.profileIsCompleted) {
      // ==============
      // NoProfile Page
      // ==============
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
      // =====================
      // CompletedProfile Page
      // =====================
      // Convert Support short forms in database to long forms
      let supportFirstIndex = "";
      let supportList = "";

      if (props.profileData) {
        supportFirstIndex = supportConvertToFull(
          props.profileData.abilityDifferences.support[0]
        );
        const fullFormSupportArray =
          props.profileData.abilityDifferences.support.map((element) => {
            return supportConvertToFull(element);
          });
        supportList = fullFormSupportArray.join(", ");
      }

      function supportConvertToFull(supportShortForm) {
        switch (supportShortForm) {
          case "Structured":
            return "Training through Structured Programmes";
          case "Shadowing":
            return "Shadowing by a Dedicated Job Coach";
          case "Redesign":
            return "Workplace Redesigned";
          case "Assistive":
            return "Assistive Technology (AT)";
          case "Social":
            return "Social Integration";
          case "Trial":
            return "Trial Period";
        }
      }

      // The CompletedProfile Page
      return (
        <div className="d-flex align-items-center flex-column">
          <div className="d-flex justify-content-end mt-3 w-75">
            <button className="btn btn-secondary mx-2">
              Save Resume as PDF
            </button>
            <button className="btn btn-secondary">Print Your Resume</button>
          </div>
          <div className="d-flex justify-content-center w-75">
            <div className="w-100 my-3">
              <div className={styles.resumeBanner}>
                <button className={styles.editProfileButton}>
                  <Link to="/profile-form">Edit Profile</Link>
                </button>
                <div className="container d-flex">
                  <div className="d-flex w-25 justify-content-center">
                    <img src={profilePic} alt="profile pic" className="w-50" />
                  </div>
                  <div className="d-flex flex-column justify-content-center w-75">
                    <h1 className="display-6">
                      {props.profileData && props.profileData.about.name}
                    </h1>
                    <h1 className={styles.bannerAspirations}>
                      {props.profileData && props.profileData.about.aspiration}
                    </h1>
                    <p className="">
                      {props.profileData && props.profileData.about.brand}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.resumeMain}>
                <div className={styles.resumeSkillsets}>
                  <div className="mx-3">
                    <h1>Skillsets</h1>
                  </div>

                  <ul className={styles.skillsetsCards}>
                    {mappedComponents.skillsetsCards}
                  </ul>
                </div>
                <div className={styles.resumeAbilityDifferences}>
                  <p className={styles.abilityDifferencesTitle}>
                    About My Ability Differences
                  </p>
                  <div className={styles.abilityDifferencesIconsAndDescription}>
                    <div className={styles.abilityDifferencesIcons}>
                      {mappedComponents.abilityDifferencesIcons}
                    </div>
                    <div className={styles.abilityDifferencesDescription}>
                      <p>
                        <b>Diagnosis</b>:{" "}
                        {props.profileData &&
                          props.profileData.abilityDifferences.diagnosis}
                        <br />
                        <br />
                        {props.profileData &&
                          props.profileData.abilityDifferences.diffDesc}
                      </p>
                    </div>
                  </div>
                  <div className={styles.abilityDifferencesSupport}>
                    <li>
                      <span className={styles.supportRequiredTypeWords}>
                        Type of Support Required:{" "}
                      </span>
                      {props.profileData &&
                        (props.profileData.abilityDifferences.support.length ===
                        1
                          ? supportFirstIndex
                          : supportList)}
                    </li>
                    <br />
                    {props.profileData &&
                      props.profileData.abilityDifferences.supportDesc}
                  </div>
                  <div className={styles.abilityDifferencesExtraInfo}>
                    <li>
                      <span className={styles.supportRequiredTypeWords}>
                        My Preferred Mode of Communication:{" "}
                      </span>
                      {props.profileData &&
                        (props.profileData.abilityDifferences.comm.length === 1
                          ? props.profileData.abilityDifferences.comm[0]
                          : [...props.profileData.abilityDifferences.comm].join(
                              ", "
                            ))}
                    </li>
                    <br />
                    <li>
                      <span className={styles.supportRequiredTypeWords}>
                        My Aids Used:{" "}
                      </span>
                      {props.profileData &&
                        (props.profileData.abilityDifferences.aids.length === 1
                          ? props.profileData.abilityDifferences.aids[0]
                          : [...props.profileData.abilityDifferences.aids].join(
                              ", "
                            ))}
                    </li>
                    <br />
                    <li>
                      <span className={styles.supportRequiredTravel}>
                        I am{" "}
                        <b>
                          {props.profileData &&
                            (props.profileData.abilityDifferences.travel
                              ? "Able"
                              : "Unable")}
                        </b>{" "}
                        to travel independently.
                      </span>
                    </li>
                  </div>
                </div>
                <div className="border border-warning border-top-0 border-2 mb-5">
                  <p className={styles.experienceTitle}>Experience</p>
                  {mappedComponents.experienceCards}
                </div>
                <div className="border border-warning border-top-0 border-start-0 border-2 mb-5">
                  <p className={styles.educationTitle}>Education</p>
                  {mappedComponents.educationCards}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  // ======
  // Return
  // ======
  const profilePage = displayProfile();
  return <>{profilePage}</>;
};

export default JobSeekerProfile;
