import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import AbilityDifference from "./filters/abilityDifference/AbilityDifference";
import Card from "./jobCards/Card.js";
import JobEnvironment from "./filters/JobEnvironment";
import JobInteractionType from "./filters/JobInteractionType";
import SupportProvided from "./filters/SupportProvided";
import Search from "../../components/Search";

const JobListings = () => {
  //==========
  // Variables
  // =========
  const userContext = useContext(UserContext);
  const [jobPosts, setJobPosts] = useState(undefined);
  const [jobCards, setJobCards] = useState(undefined);

  // ===========================
  // useEffect for Initial Fetch
  // ===========================
  // useEffect onMount, to get job posts data
  useEffect(() => {
    // if (userContext.userType !== "jobSeeker") {
    //   getAllJobPosts();
    // } else {
    //   getFilteredJobPosts();
    // }
    getAllJobPosts();
  }, []);

  const getAllJobPosts = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5001/api/jobposts/get", {
        method: "POST",
        headers: { "content-type": "application/json" },
      });
      const fetchedJobPosts = await res.json();
      setJobPosts(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  //  ============================== TO BE DONE =============================== //
  const getFilteredJobPosts = async () => {
    return;
  };

  // ==================================================
  // useEffect to map Cards after jobPosts has been set
  // ==================================================
  useEffect(() => {
    if (jobPosts !== undefined) {
      mapCards();
    }
  }, [jobPosts]);

  function mapCards() {
    const mappedJobCards = jobPosts.map((element) => {
      return <Card jobPost={element.jobPost} key={Math.random()} />;
    });
    setJobCards(mappedJobCards);
  }

  // ======
  // Return
  // ======
  return (
    <div className="job-listings">
      <Search />
      <p className="px-4 text-muted font-weight-light font-italic">
        Main Page &gt; What would you like to do today? &gt; Job Listing
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
        <div className="postings w-75 px-4 mb-4">{jobCards}</div>
      </div>
    </div>
  );
};

export default JobListings;
