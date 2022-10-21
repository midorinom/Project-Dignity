import React from "react";

const JobSeekerLanding = (props) => {
  return (
    <>
      <div className="centered">Job Seeker Landing Page</div>;
      {props.userType === "jobSeekers" && (
        <div>3 Buttons for Job Seekers only</div>
      )}
    </>
  );
};

export default JobSeekerLanding;
