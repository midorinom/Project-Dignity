import React from "react";
import AbilityDifference from "../../components/jobListings/filters/abilityDifference/AbilityDifference";
import Card from "../../components/jobListings/jobCards/Card";
import JobEnvironment from "../../components/jobListings/filters/JobEnvironment";
import JobInteractionType from "../../components/jobListings/filters/JobInteractionType";
import SupportProvided from "../../components/jobListings/filters/SupportProvided";

const JobListings = () => {
  return (
    <div className="job-listings">
      {/* Search bar should be here */}
      <h1 className="text-left w-50 mx-4">Dignity Career</h1>
      <div className="results d-flex">
        <div className="filters w-25 p-4">
          <AbilityDifference />
          <JobEnvironment />
          <JobInteractionType />
          <SupportProvided />
        </div>
        <div className="postings w-75 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default JobListings;
