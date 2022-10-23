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
  const [profile, setProfile] = useState({});
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

  // =================
  // onMount useEffect
  // =================
  useEffect(() => {
    // First check if the user is a job seeker. If so, fetch the user's profile data.
    if (userContext.userDetails.type === "jobSeeker") {
      getProfile();
    } else {
      // If the user navigated to this page from a search
      if (props.isSearch) {
        props.setIsSearch(false);
        getFilteredJobPosts(props.searchInput);
      } else {
        getAllJobPosts(setJobPosts, props.searchInput);
      }
      // Cleanup function resets the searchInput when the user leaves the JobListings page
      return () => {
        props.setSearchInput("");
      };
    }
  }, []);

  // ===========================================================
  // useEffect to fetch Filtered Jobs after Profile has been set
  // ===========================================================
  useEffect(() => {
    if (Object.keys(profile).length > 0) {
      // If the user navigated to this page from a search
      if (props.isSearch) {
        props.setIsSearch(false);
      }
      getFilteredJobPosts(props.searchInput);
    }
  }, [profile]);

  // ===============
  // Fetch Functions
  // ===============
  const getProfile = async () => {
    try {
      const hardCodedId = "6352b602869782ec9b076cf3";

      const res = await fetch("http://127.0.0.1:5001/api/jobseekers/get", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: hardCodedId }),
      });
      const fetchedProfileData = await res.json();
      setProfile(fetchedProfileData);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllJobPosts = async (setJobPosts, searchInput) => {
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

  const getFilteredJobPosts = async (searchInput) => {
    try {
      // If the user is a job seeker, pass the profile data into the body
      let fetchBody = { search: searchInput, ...filter };
      if (userContext.userDetails.type === "jobSeeker") {
        fetchBody.profile = profile;
      }

      const res = await fetch("http://127.0.0.1:5001/api/jobposts/get", {
        method: "POST",
        body: JSON.stringify(fetchBody),
        headers: { "content-type": "application/json" },
      });
      const fetchedJobPosts = await res.json();
      setJobPosts(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // =========================================================
  // useEffect to fetch Filtered Jobs whenever filters are set
  // =========================================================
  useEffect(() => {
    if (firstRenderDone) {
      getFilteredJobPosts(props.searchInput);
    }
  }, [filter]);

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
        setFilter={setFilter}
        getAllJobPosts={getAllJobPosts}
        getFilteredJobPosts={getFilteredJobPosts}
      />
      <p className="px-4 text-muted font-weight-light font-italic">
        Main Page &gt; What would you like to do today? &gt; Job Listing
      </p>
      <h1 className="text-left w-50 mx-4 mt-4">Dignity Careers</h1>
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
