import React from "react";
import JobAbout from "../jobPostForm/JobAbout";
import EmployerAccessibility from "../jobPostForm/EmployerAccessibility";
import JobSeekerProfile from "../jobSeekerProfile/JobSeekerProfile";
const EmployerLanding = (props) => {
  return (
    <>
      <div className="centered">Employer Landing Page</div>;
      {props.userType === "jobSeekers" && (
        <div>3 Buttons for Employers only</div>
      )}
    </>
  );
};

export default EmployerLanding;
