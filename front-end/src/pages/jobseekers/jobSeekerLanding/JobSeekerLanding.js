import React from "react";
import Search from "../../../components/Search";

const JobSeekerLanding = (props) => {
  return (
    <>
      <Search
        setSearchInput={props.setSearchInput}
        setIsSearch={props.setIsSearch}
        searchInput={props.searchInput}
      />
      <div className="centered">Job Seeker Landing Page</div>;
      {props.userType === "jobSeekers" && (
        <div>3 Buttons for Job Seekers only</div>
      )}
    </>
  );
};

export default JobSeekerLanding;
