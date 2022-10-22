import React from "react";
import Search from "../../../components/Search";

const EmployerLanding = (props) => {
  return (
    <>
      <Search
        setSearchInput={props.setSearchInput}
        setIsSearch={props.setIsSearch}
        searchInput={props.searchInput}
      />
      <div className="centered">Employer Landing Page</div>;
      {props.userType === "jobSeekers" && (
        <div>3 Buttons for Employers only</div>
      )}
    </>
  );
};

export default EmployerLanding;
