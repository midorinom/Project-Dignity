import React from "react";
import AbilityDifference from "../../components/jobListings/filters/abilityDifference/AbilityDifference";
import Card from "../../components/jobListings/jobCards/Card";
import JobEnvironment from "../../components/jobListings/filters/JobEnvironment";
import JobInteractionType from "../../components/jobListings/filters/JobInteractionType";
import SupportProvided from "../../components/jobListings/filters/SupportProvided";
import Search from "../../components/jobListings/Search";

const JobListings = () => {
  return (
    <div className="job-listings">
      <Search />
      <p className="px-4 text-muted font-weight-light font-italic">
        Main Page > What would you like to do today? > Job Listing
      </p>
      <h1 className="text-left w-50 mx-4 mt-4">Dignity Career</h1>
      <div className="d-flex justify-content-end mx-4">
        <p className="text-center text-light bg-dark w-25 my-0">
          Recommended For You
        </p>
      </div>
      <div className="results d-flex">
        <div className="filters w-25 px-4 mb-4">
          <AbilityDifference />
          <JobEnvironment />
          <JobInteractionType />
          <SupportProvided />
        </div>
        <div className="postings w-75 px-4 mb-4">
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
