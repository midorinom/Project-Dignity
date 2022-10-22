import React, { useState } from "react";
import JobSeekerProfileFormAbout from "./JobSeekerProfileFormAbout";
import JobSeekerProfileFormSkills from "./JobSeekerProfileFormSkills";
import JobSeekerProfileFormAbilityDiff from "./JobSeekerProfileFormAbilityDiff";
import JobSeekerProfileFormExperience from "./JobSeekerProfileFormExperience";
import JobSeekerProfileFormEducation from "./JobSeekerProfileFormEducation";

const JobSeekerProfileForm = () => {
  const [currentPage, setCurrentPage] = useState("About");
  // const [profile, setProfile] = useState()
  const [aboutSchema, setAboutSchema] = useState();
  const [skillsSchema, setSkillsSchema] = useState();
  const [abilityDifferencesSchema, setAbilityDifferencesSchema] = useState();
  const [experienceSchema, setExperienceSchema] = useState();
  const [educationSchema, setEducationSchema] = useState();

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
      <div className="centered">Banner with Profile Photo</div>
      <div className="centered">
        <div onClick={manageCurrentPage}>About</div>
        <div onClick={manageCurrentPage}>Skills</div>
        <div onClick={manageCurrentPage}>Ability Differences</div>
        <div onClick={manageCurrentPage}>Experience</div>
        <div onClick={manageCurrentPage}>Education</div>
      </div>
      {page}
    </>
  );
};

export default JobSeekerProfileForm;
