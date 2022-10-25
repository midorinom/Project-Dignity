import React, { useContext } from "react";
import UserContext from "../../../context/userContext";
import Search from "../../../components/Search";

const JobSeekerLanding = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <>
      <Search
        setSearchInput={props.setSearchInput}
        searchInput={props.searchInput}
      />
      <div className="centered">Job Seeker Landing Page</div>;
      {userCtx.userDetails.type === "jobSeeker" && (
        <div>3 Buttons for Job Seekers only</div>
      )}
      {/* generic sections: */}
      <div>
        <h3>What would you like to do today</h3>
        <div>
          <p>I would like to look for a job</p>
        </div>
        <div>
          <p>I would like some job advice</p>
        </div>
        <div>
          <p>I want to know more about inclusive employers</p>
        </div>
      </div>
    </>
  );
};

export default JobSeekerLanding;
