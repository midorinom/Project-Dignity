import React, { useState } from "react";
import JobSeekerProfileFormAbout from "./JobSeekerProfileFormAbout";
import JobSeekerProfileFormSkills from "./JobSeekerProfileFormSkills";
import JobSeekerProfileFormAbilityDiff from "./JobSeekerProfileFormAbilityDiff";
import JobSeekerProfileFormExperience from "./JobSeekerProfileFormExperience";
import JobSeekerProfileFormEducation from "./JobSeekerProfileFormEducation";

const JobSeekerProfileForm = () => {
  const [currentPage, setCurrentPage] = useState("About");
  // Render the current page
  function manageCurrentPage(e) {
    setCurrentPage(e.target.innerText);
  }

  // Render the landing page depending on what type of user is logged in
  function displayCurrentPage() {
    switch (currentPage) {
      case "About":
        return <JobSeekerProfileFormAbout setCurrentPage={setCurrentPage}/>;
      case "Skills":
        return <JobSeekerProfileFormSkills setCurrentPage={setCurrentPage}/>;
      case "Ability Differences":
        return <JobSeekerProfileFormAbilityDiff setCurrentPage={setCurrentPage}/>;
      case "Experience":
        return <JobSeekerProfileFormExperience setCurrentPage={setCurrentPage}/>;
      case "Education":
        return <JobSeekerProfileFormEducation />;
    }
  }
  const page = displayCurrentPage();

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
