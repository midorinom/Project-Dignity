import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import AbilityDifference from "./filters/abilityDifference/AbilityDifference";
import Card from "./jobCards/Card.js";
import JobEnvironment from "./filters/JobEnvironment";
import JobInteractionType from "./filters/JobInteractionType";
import SupportProvided from "./filters/SupportProvided";
import Search from "../../components/Search";

const JobListings = (props) => {
  //==========
  // Variables
  // =========
  const userContext = useContext(UserContext);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [jobCards, setJobCards] = useState(undefined);
  const [filter, setFilter] = useState({
    abilityDiff: [],
    environment: {
      minNoise: 0,
      maxNoise: 4,
      minLight: 0,
      maxLight: 4,
    },
    customerFacing: undefined,
    support: [],
  });

  // ===========================
  // useEffect for Initial Fetch
  // ===========================
  // useEffect onMount gets the initial job posts data.
  useEffect(() => {
    // if (userContext.userType !== "jobSeeker") {
    //   getAllJobPosts();
    // } else {
    //   getFilteredJobPosts();
    // }
    // If the user navigated to this page from a search
    if (props.isSearch) {
      props.setIsSearch(false);
      getSearchedJobPosts(props.searchInput);
    } else {
      // If the user navigated to this page normally, not from a search
      getAllJobPosts();
    }
    // Cleanup function resets the searchInput when the user leaves the JobListings page
    return () => {
      props.setSearchInput("");
    };
  }, []);

  // ===============
  // Fetch Functions
  // ===============
  const getAllJobPosts = async () => {
    try {
      props.setIsSearch(false);

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

  // getSearched
  const getSearchedJobPosts = async (search) => {
    try {
      const res = await fetch("http://127.0.0.1:5001/api/jobposts/search", {
        method: "POST",
        body: JSON.stringify({ search: search }),
        headers: { "content-type": "application/json" },
      });
      const fetchedJobPosts = await res.json();
      setJobPosts(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // ==================================================
  // useEffect to map Cards after jobPosts has been set
  // ==================================================
  useEffect(() => {
    if (jobPosts !== undefined) {
      mapCards();
    }
    if (!firstRenderDone) {
      setFirstRenderDone(true);
    }
  }, [jobPosts]);

  function mapCards() {
    const mappedJobCards = jobPosts.map((element) => {
      return (
        <Card
          jobPost={element.jobPost}
          key={Math.random()}
          setSelectedJobPost={props.setSelectedJobPost}
        />
      );
    });
    setJobCards(mappedJobCards);
  }

  // =========================================================
  // useEffect to fetch Filtered Jobs whenever filters are set
  // =========================================================
  useEffect(() => {
    if (firstRenderDone) {
      getFilteredJobPosts();
    }
  }, [filter]);

  const getFilteredJobPosts = async () => {
    try {
      console.log(filter);
      const res = await fetch("http://127.0.0.1:5001/api/jobposts/get", {
        method: "POST",
        body: JSON.stringify(filter),
        headers: { "content-type": "application/json" },
      });
      const fetchedJobPosts = await res.json();
      setJobPosts(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // ======
  // Return
  // ======
  return (
    <div className="job-listings">
      <Search
        setSearchInput={props.setSearchInput}
        setIsSearch={props.setIsSearch}
        searchInput={props.searchInput}
        isJobListings={true}
        setJobPosts={setJobPosts}
      />
      <p className="px-4 text-muted font-weight-light font-italic">
        Main Page &gt; What would you like to do today? &gt; Job Listing
      </p>
      <h1 className="text-left w-50 mx-4 mt-4">Dignity Career</h1>
      {userContext.userType === "jobSeeker" && jobPosts.length > 0 && (
        <div className="d-flex justify-content-end mx-4">
          <p className="text-center text-light bg-dark w-25 my-0">
            Recommended For You
          </p>
        </div>
      )}
      <div className="results d-flex">
        <div className="filters w-25 px-4 mb-4">
          <AbilityDifference setFilter={setFilter} />
          <JobEnvironment setFilter={setFilter} />
          <JobInteractionType setFilter={setFilter} />
          <SupportProvided setFilter={setFilter} />
        </div>
        <div className="postings w-75 px-4 mb-4">{jobCards}</div>
      </div>
    </div>
  );
};

export default JobListings;
