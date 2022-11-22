import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/userContext";
import styles from "./jobSeekerProfileFormHeader.module.css";
import JobSeekerProfileFormAbout from "./JobSeekerProfileFormAbout";
import JobSeekerProfileFormSkills from "./JobSeekerProfileFormSkills";
import JobSeekerProfileFormAbilityDiff from "./JobSeekerProfileFormAbilityDiff";
import JobSeekerProfileFormExperience from "./JobSeekerProfileFormExperience";
import JobSeekerProfileFormEducation from "./JobSeekerProfileFormEducation";
import profilePic from "../jobSeekerProfile/profile.png";

const JobSeekerProfileForm = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState("About");
  // setting data from various section into state
  const [aboutSchema, setAboutSchema] = useState();
  const [skillsSchema, setSkillsSchema] = useState();
  const [abilityDifferencesSchema, setAbilityDifferencesSchema] = useState();
  const [experienceSchema, setExperienceSchema] = useState();
  const [educationSchema, setEducationSchema] = useState();
  // for proceed next button
  const [sectionSaved, setSectionSaved] = useState(false);
  // for complete profile button at last form section
  const [toSaveProfile, setToSaveProfile] = useState(false);
  // setting various section states into state to be send to db
  const [newProfile, setNewProfile] = useState({
    about: "",
    skills: "",
    abilityDifferences: "",
    experience: "",
    education: "",
  });

  // Render the current page
  function manageCurrentPage(e) {
    setCurrentPage(e.target.innerText);
  }

  // Render the landing page depending on what type of user is logged in
  function displayCurrentPage() {
    switch (currentPage) {
      case "About":
        return (
          <JobSeekerProfileFormAbout
            setCurrentPage={setCurrentPage}
            sectionSaved={sectionSaved}
            setSectionSaved={setSectionSaved}
            setAboutSchema={setAboutSchema}
            profileData={props.profileData}
          />
        );
      case "Skills":
        return (
          <JobSeekerProfileFormSkills
            setCurrentPage={setCurrentPage}
            sectionSaved={sectionSaved}
            setSectionSaved={setSectionSaved}
            setSkillsSchema={setSkillsSchema}
            profileData={props.profileData}
          />
        );
      case "Ability Differences":
        return (
          <JobSeekerProfileFormAbilityDiff
            setCurrentPage={setCurrentPage}
            sectionSaved={sectionSaved}
            setSectionSaved={setSectionSaved}
            setAbilityDifferencesSchema={setAbilityDifferencesSchema}
            profileData={props.profileData}
          />
        );
      case "Experience":
        return (
          <JobSeekerProfileFormExperience
            setCurrentPage={setCurrentPage}
            sectionSaved={sectionSaved}
            setSectionSaved={setSectionSaved}
            setExperienceSchema={setExperienceSchema}
            profileData={props.profileData}
          />
        );
      case "Education":
        return (
          <JobSeekerProfileFormEducation
            setEducationSchema={setEducationSchema}
            sectionSaved={sectionSaved}
            setSectionSaved={setSectionSaved}
            setToSaveProfile={setToSaveProfile}
            profileData={props.profileData}
          />
        );
    }
  }
  const page = displayCurrentPage();

  console.log(aboutSchema);
  console.log(skillsSchema);
  console.log(abilityDifferencesSchema);
  console.log(experienceSchema);
  console.log(educationSchema);

  console.log(`profile is completed (before):`, props.profileIsCompleted);
  console.log(`to save profile (before)`, toSaveProfile);

  ///////////////////////////////
  // For new profile creation //
  ///////////////////////////////
  useEffect(() => {
    // setProfile will only happen if profileIsComplete=false, toSaveProfile=true and all schemas have values
    if (!props.profileIsCompleted) {
      if (
        aboutSchema &&
        skillsSchema &&
        abilityDifferencesSchema &&
        experienceSchema &&
        educationSchema &&
        toSaveProfile
      ) {
        setNewProfile({
          about: aboutSchema,
          skills: skillsSchema,
          abilityDifferences: abilityDifferencesSchema,
          experience: experienceSchema,
          education: educationSchema,
        });

        console.log({ Test: aboutSchema });
        const updateProfileData = async (req, res) => {
          try {
            // const hardCodedId = "6352b602869782ec9b076cf3";

            const res = await fetch(
              "https://project-dignity-backend.onrender.com/api/jobseekers/update",
              {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  id: userCtx.userDetails.id,
                  profile: {
                    about: aboutSchema,
                    skills: skillsSchema,
                    abilityDifferences: abilityDifferencesSchema,
                    experience: experienceSchema,
                    education: educationSchema,
                  },
                }),
              }
            );
            const fetchedProfileData = await res.json();

            console.log(fetchedProfileData);
          } catch (err) {
            console.log(err);
          }
        };

        updateProfileData();
        console.log(`start`);
        props.setProfileIsCompleted(true);
        console.log(`end`);

        navigate("/profile");
        // } else {
        //   alert(`Incomplete profile`);
      }
    }
  }, [toSaveProfile]);

  ///////////////////////////////////
  // For updating existing profile //
  ///////////////////////////////////
  useEffect(() => {
    let editedProfile = {};

    if (props.profileIsCompleted && toSaveProfile) {
      if (aboutSchema) {
        editedProfile.about = aboutSchema;
      } else {
        editedProfile.about = props.profileData.about;
      }

      if (skillsSchema) {
        editedProfile.skills = skillsSchema;
      } else {
        editedProfile.skills = props.profileData.skills;
      }

      if (abilityDifferencesSchema) {
        editedProfile.abilityDifferences = abilityDifferencesSchema;
      } else {
        editedProfile.abilityDifferences = props.profileData.abilityDifferences;
      }

      if (experienceSchema) {
        editedProfile.experience = experienceSchema;
      } else {
        editedProfile.experience = props.profileData.experience;
      }

      if (educationSchema) {
        editedProfile.education = educationSchema;
      } else {
        editedProfile.education = props.profileData.education;
      }

      if (editedProfile) {
        console.log(`edited profile: `, editedProfile);
        const updateProfileData = async (req, res) => {
          try {
            // const hardCodedId = "6352b602869782ec9b076cf3";

            const res = await fetch(
              "https://project-dignity-backend.onrender.com/api/jobseekers/update",
              {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  id: userCtx.userDetails.id,
                  profile: { ...editedProfile },
                }),
              }
            );
            const fetchedProfileData = await res.json();

            console.log(fetchedProfileData);
          } catch (err) {
            console.log(err);
          }
        };

        updateProfileData();

        navigate("/profile");
      }
    }
    console.log(`edited profile: `, newProfile);
  }, [toSaveProfile]);

  // created
  console.log(`newly created:`, newProfile);
  // status
  console.log(`profile is completed (after):`, props.profileIsCompleted);
  console.log(`to save profile (after)`, toSaveProfile);
  // returned profile from api
  console.log(`returned profile from api: `, props.profileData);

  return (
    <>
      <header>
        {/* Banner */}
        <div className="container-md">
          <div className="row" id={styles.banner}>
            <div className="d-flex justify-content-md-center m-0 p-0">
              {/* <div className="col-md-2 m-3"> */}
              <div className="col-md-2 d-flex justify-content-center m-3 p-4">
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="p-3"
                  style={{ width: "130%" }}
                />
              </div>
              {/* </div> */}
              <div className="col-md-8 p-5">
                <h1 className=" mt-3 mb-3">
                  {aboutSchema?.name
                    ? aboutSchema.name
                    : props.profileData?.about?.name
                    ? props.profileData.about.name
                    : `This is my name`}
                </h1>
                <p style={{ fontSize: "1.3em" }}>
                  {aboutSchema?.aspiration
                    ? aboutSchema.aspiration
                    : props.profileData?.about?.aspiration
                    ? props.profileData.about.aspiration
                    : `This is my aspiration`}
                </p>
                <div className="text-break w-100">
                  {aboutSchema?.brand
                    ? aboutSchema.brand
                    : props.profileData?.about?.brand
                    ? props.profileData.about.brand
                    : `This is my personal brand statement`}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form section buttons */}
        <div
          className="row w-100 m-0"
          style={{
            height: 58,
            boxShadow: "4px 2px 4px 2px rgba(20, 20, 20, 0.2)",
          }}
        >
          <div className="d-flex justify-content-md-center">
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              style={{
                backgroundColor: currentPage === "About" ? "#011036" : "",
                color: currentPage === "About" ? "white" : "",
              }}
              onClick={manageCurrentPage}
            >
              About
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              style={{
                backgroundColor: currentPage === "Skills" ? "#011036" : "",
                color: currentPage === "Skills" ? "white" : "",
              }}
              onClick={manageCurrentPage}
            >
              Skills
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              style={{
                backgroundColor:
                  currentPage === "Ability Differences" ? "#011036" : "",
                color: currentPage === "Ability Differences" ? "white" : "",
              }}
              onClick={manageCurrentPage}
            >
              Ability Differences
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              style={{
                backgroundColor: currentPage === "Experience" ? "#011036" : "",
                color: currentPage === "Experience" ? "white" : "",
              }}
              onClick={manageCurrentPage}
            >
              Experience
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              style={{
                backgroundColor: currentPage === "Education" ? "#011036" : "",
                color: currentPage === "Education" ? "white" : "",
              }}
              onClick={manageCurrentPage}
            >
              Education
            </div>
          </div>
        </div>
      </header>
      <main className="mt-4">{page}</main>
    </>
  );
};

export default JobSeekerProfileForm;
