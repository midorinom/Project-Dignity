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
  const [initialFilter, setInitialFilter] = useState({});
  const [abilityDiffFilters, setAbilityDiffFilters] = useState([]);
  const [interactionFilter, setInteractionFilter] = useState(undefined);
  const [environmentFilters, setEnvironmentFilters] = useState({
    minNoise: 0,
    maxNoise: 4,
    minLight: 0,
    maxLight: 4,
  });
  const [supportFilters, setSupportFilters] = useState([]);

  // =================
  // onMount useEffect
  // =================
  useEffect(() => {
    // First check if the user is a job seeker. If so, fetch the user's profile data.
    if (userContext.userDetails.type === "jobSeeker") {
      getProfile();
    } else {
      // Get initial filter
      const randomFilter = generateRandomFilter();
      // If the user navigated to this page from a search
      if (props.isSearch) {
        props.setIsSearch(false);
        getFilteredJobPosts(props.searchInput, randomFilter);
      } else {
        getAllJobPosts(randomFilter);
      }
    }
    // Cleanup function to reset searchInput when the user leaves the JobListings page
    return () => {
      props.setSearchInput("");
    };
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
      const randomFilter = generateRandomFilter();
      getFilteredJobPosts(props.searchInput, randomFilter);
    }
  }, [profile]);

  // ==============
  // Initial Filter
  // ==============
  function generateRandomFilter() {
    let randomFilter = {};

    // Is Job Seeker
    if (userContext.userDetails.type === "jobSeeker") {
      // Coin flip for whether to filter by Ability Diff or Support
      if (Math.round(Math.random()) === 0) {
        randomFilter.abilityDiff =
          profile.abilityDifferences.diff[
            Math.floor(Math.random() * profile.abilityDifferences.diff.length)
          ];
      } else {
        randomFilter.support =
          profile.abilityDifferences.support[
            Math.floor(
              Math.random() * profile.abilityDifferences.support.length
            )
          ];
      }
    }
    // Not Job Seeker
    else {
      const abilityDiffArray = [
        "Autism",
        "Hearing",
        "Intellectual",
        "Physical",
        "Visual",
      ];
      const supportArray = [
        "Assistive",
        "Redesign",
        "Shadowing",
        "Social",
        "Structured",
        "Trial",
      ];

      // Coin flip for whether to filter by Ability Diff or Support
      if (Math.round(Math.random()) === 0) {
        randomFilter.abilityDiff =
          abilityDiffArray[Math.floor(Math.random() * 5)];
      } else {
        randomFilter.support = supportArray[Math.floor(Math.random() * 6)];
      }
    }
    // Set to State and return
    setInitialFilter(randomFilter);
    return randomFilter;
  }

  // ===============
  // Fetch Functions
  // ===============
  const getProfile = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5001/api/jobseekers/get", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: userContext.userDetails.id }),
      });
      const fetchedProfileData = await res.json();
      setProfile(fetchedProfileData);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllJobPosts = async (randomFilter) => {
    try {
      const res = await fetch("http://127.0.0.1:5001/api/jobposts/get", {
        method: "POST",
        body: JSON.stringify({
          search: props.searchInput,
          ...filter,
          initialFilter: randomFilter,
        }),
        headers: { "content-type": "application/json" },
      });
      const fetchedJobPosts = await res.json();
      console.log("fetchedJobPostsGetAll", fetchedJobPosts);
      setJobPosts(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  const getFilteredJobPosts = async (searchInput, randomFilter) => {
    try {
      // If the user is a job seeker, pass the profile data into the body
      let fetchBody = {
        search: searchInput,
        ...filter,
        initialFilter: randomFilter,
      };
      if (userContext.userDetails.type === "jobSeeker") {
        fetchBody.profile = profile;
      }

      const res = await fetch("http://127.0.0.1:5001/api/jobposts/get", {
        method: "POST",
        body: JSON.stringify(fetchBody),
        headers: { "content-type": "application/json" },
      });
      const fetchedJobPosts = await res.json();
      console.log("fetchedJobPostsFiltered", fetchedJobPosts);
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
      getFilteredJobPosts(props.searchInput, initialFilter);
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
        setFilter={setFilter}
        getAllJobPosts={getAllJobPosts}
        getFilteredJobPosts={getFilteredJobPosts}
        initialFilter={initialFilter}
        setAbilityDiffFilters={setAbilityDiffFilters}
        setInteractionFilter={setInteractionFilter}
        setEnvironmentFilters={setEnvironmentFilters}
        setSupportFilters={setSupportFilters}
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
          <AbilityDifference
            setFilter={setFilter}
            abilityDiffFilters={abilityDiffFilters}
            setAbilityDiffFilters={setAbilityDiffFilters}
          />
          <JobEnvironment
            setFilter={setFilter}
            environmentFilters={environmentFilters}
            setEnvironmentFilters={setEnvironmentFilters}
          />
          <JobInteractionType
            setFilter={setFilter}
            interactionFilter={interactionFilter}
            setInteractionFilter={setInteractionFilter}
          />
          <SupportProvided
            setFilter={setFilter}
            supportFilters={supportFilters}
            setSupportFilters={setSupportFilters}
          />
        </div>
        <div className="postings w-75 px-4 mb-4">{jobCards}</div>
      </div>
    </div>
  );
};

export default JobListings;
