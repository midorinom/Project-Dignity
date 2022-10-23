import React, { useState } from "react";
import styles from "./jobSeekerProfileFormHeader.module.css";
import JobSeekerProfileFormAbout from "./JobSeekerProfileFormAbout";
import JobSeekerProfileFormSkills from "./JobSeekerProfileFormSkills";
import JobSeekerProfileFormAbilityDiff from "./JobSeekerProfileFormAbilityDiff";
import JobSeekerProfileFormExperience from "./JobSeekerProfileFormExperience";
import JobSeekerProfileFormEducation from "./JobSeekerProfileFormEducation";
import EmployerProfileForm from "../../employers/employerProfileForm/EmployerProfileForm";

const JobSeekerProfileForm = () => {
  const [currentPage, setCurrentPage] = useState("About");
  const [aboutSchema, setAboutSchema] = useState();
  const [skillsSchema, setSkillsSchema] = useState();
  const [abilityDifferencesSchema, setAbilityDifferencesSchema] = useState();
  const [experienceSchema, setExperienceSchema] = useState();
  const [educationSchema, setEducationSchema] = useState();
  // const [profile, setProfile] = useState()

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
            setAboutSchema={setAboutSchema}
          />
        );
      case "Skills":
        return (
          <JobSeekerProfileFormSkills
            setCurrentPage={setCurrentPage}
            setSkillsSchema={setSkillsSchema}
          />
        );
      case "Ability Differences":
        return (
          <JobSeekerProfileFormAbilityDiff
            setCurrentPage={setCurrentPage}
            setAbilityDifferencesSchema={setAbilityDifferencesSchema}
          />
        );
      case "Experience":
        return (
          <JobSeekerProfileFormExperience
            setCurrentPage={setCurrentPage}
            setExperienceSchema={setExperienceSchema}
          />
        );
      case "Education":
        return (
          <JobSeekerProfileFormEducation
            setEducationSchema={setEducationSchema}
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

  return (
    <>
      <header>
        {/* Banner */}
        <div className="container-md">
          <div className="row" id={styles.banner}>
            <div className="d-flex justify-content-md-center m-0 p-0">
              <div className="col-md-2 m-3">
                <embed />
              </div>
              <div className="col-md-8 p-4">
                <h1 className=" mt-4 mb-3">{`This is my name`}</h1>
                <p style={{ fontSize: "1.3em" }}>{`This is my aspiration`}</p>
                <p>{`This is my personal brand statement`}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form section buttons */}
        <div
          className="row w-100 m-0"
          style={{
            height: 58,
            boxShadow: "1px 2px 3px 4px rgba(20, 20, 20, 0.2)",
          }}
        >
          <div className="d-flex justify-content-md-center">
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              onClick={manageCurrentPage}
            >
              About
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              onClick={manageCurrentPage}
            >
              Skills
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              onClick={manageCurrentPage}
            >
              Ability Differences
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              onClick={manageCurrentPage}
            >
              Experience
            </div>
            <div
              className={`${styles.sectionButtons} p-3`}
              type="button"
              onClick={manageCurrentPage}
            >
              Education
            </div>
          </div>
        </div>
      </header>
      <main className="mt-5">{page}</main>
    </>
  );
};

export default JobSeekerProfileForm;
