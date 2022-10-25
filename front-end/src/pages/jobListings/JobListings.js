import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./jobListings.module.css";
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
  const [startPage, setStartPage] = useState(1);
  const [totalPages, setTotalPages] = useState(13);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(false);
  const pageInputRef = useRef();

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
      getJobPosts(props.searchInput, randomFilter);
    }
    // Cleanup function for when the user leaves the JobListings page. Reset searchInput and currentPage
    return () => {
      props.setSearchInput("");
    };
  }, []);

  // ===========================================================
  // useEffect to fetch Filtered Jobs after Profile has been set
  // ===========================================================
  useEffect(() => {
    if (Object.keys(profile).length > 0) {
      const randomFilter = generateRandomFilter();
      getJobPosts(props.searchInput, randomFilter);
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

  const getJobPosts = async (searchInput, randomFilter) => {
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
      getJobPosts(props.searchInput, initialFilter);
    }
  }, [filter]);

  // ======================
  // useEffect to map Cards
  // ======================
  // Initial map, after jobPosts has been set
  useEffect(() => {
    if (jobPosts !== undefined) {
      mapCards();
    }
    if (!firstRenderDone) {
      setFirstRenderDone(true);
    }
  }, [jobPosts]);

  function mapCards() {
    const jobsOnCurrentPage = jobPosts.slice(
      (startPage + currentPage - 1) * 6 - 6,
      (startPage + currentPage - 1) * 6
    );
    const mappedJobCards = jobsOnCurrentPage.map((element) => {
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

  // Subsequent maps, whenever currentPage or startPage changes
  useEffect(() => {
    if (jobPosts !== undefined) {
      mapCards();
    }
  }, [currentPage, startPage]);

  // ====================
  // Pages Event Handlers
  // ====================
  function handlePrev() {
    setPageInput(false);
    if (currentPage === 1) {
      if (startPage < 6) {
        setCurrentPage(startPage - 1);
        setStartPage(1);
      } else {
        setCurrentPage(5);
        setStartPage((prevState) => (prevState -= 5));
      }
    } else {
      setCurrentPage((prevState) => (prevState -= 1));
    }
  }

  function handleNext() {
    setPageInput(false);
    if (currentPage === 5) {
      setCurrentPage(1);
      setStartPage((prevState) => (prevState += 5));
    } else {
      if (startPage + currentPage - 1 < totalPages) {
        setCurrentPage((prevState) => (prevState += 1));
      }
    }
  }

  function handlePageSkip(e) {
    setPageInput(false);
    const target = e.currentTarget.value;
    if (target < 6) {
      setCurrentPage(parseInt(target));
    } else {
      if (startPage + 9 <= totalPages) {
        setCurrentPage(1);
        setStartPage((prevState) => (prevState += 9));
      } else {
        setStartPage(totalPages - 4);
        setCurrentPage(5);
      }
    }
  }

  function togglePageInput() {
    if (pageInput) {
      setPageInput(false);
    } else {
      setPageInput(true);
    }
  }

  function pageInputSubmit(e) {
    e.preventDefault();
    if (
      pageInputRef.current.value > 0 &&
      pageInputRef.current.value <= totalPages
    ) {
      setPageInput(false);
      setStartPage(parseInt(pageInputRef.current.value));
      setCurrentPage(1);
    }
  }

  // ======
  // Return
  // ======
  return (
    <div className="job-listings">
      <Search
        setSearchInput={props.setSearchInput}
        searchInput={props.searchInput}
        isJobListings={true}
        setFilter={setFilter}
        getJobPosts={getJobPosts}
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
      {userContext.userDetails.type === "jobSeeker" && jobPosts.length > 0 && (
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
        <div className="postings flex-column w-75 px-4 mb-4">
          {jobCards}
          <div className="w-100 mt-4">
            <button
              className={`${styles.prevBtn} ${
                startPage === 1 && currentPage === 1
                  ? "btn-outline-secondary disabled"
                  : "btn-outline-primary"
              } btn`}
              onClick={handlePrev}
            >
              {"< Previous"}
            </button>
            <button
              className={`${styles.pageNumber} ${
                currentPage === 1 && styles.currentPage
              } btn btn-outline-primary`}
              value="1"
              onClick={handlePageSkip}
            >
              {startPage}
            </button>
            {startPage + 1 <= totalPages && (
              <button
                className={`${styles.pageNumber} ${
                  currentPage === 2 && styles.currentPage
                } btn btn-outline-primary`}
                value="2"
                onClick={handlePageSkip}
              >
                {startPage + 1}
              </button>
            )}
            {startPage + 2 <= totalPages && (
              <button
                className={`${styles.pageNumber} ${
                  currentPage === 3 && styles.currentPage
                } btn btn-outline-primary`}
                value="3"
                onClick={handlePageSkip}
              >
                {startPage + 2}
              </button>
            )}
            {startPage + 3 <= totalPages && (
              <button
                className={`${styles.pageNumber} ${
                  currentPage === 4 && styles.currentPage
                } btn btn-outline-primary`}
                value="4"
                onClick={handlePageSkip}
              >
                {startPage + 3}
              </button>
            )}
            {startPage + 4 <= totalPages && (
              <button
                className={`${styles.pageNumber} ${
                  currentPage === 5 && styles.currentPage
                } btn btn-outline-primary`}
                value="5"
                onClick={handlePageSkip}
              >
                {startPage + 4}
              </button>
            )}
            {totalPages > 5 && !pageInput && (
              <button
                className={`${styles.pageNumber} btn btn-outline-primary`}
                onClick={togglePageInput}
              >
                ...
              </button>
            )}
            {pageInput && (
              <form onSubmit={pageInputSubmit}>
                <input
                  className={styles.pageInput}
                  ref={pageInputRef}
                  type="number"
                  defaultValue={1}
                  min={1}
                  max={totalPages}
                ></input>
              </form>
            )}
            {startPage + 5 <= totalPages && (
              <button
                className={`${styles.pageNumber} ${
                  currentPage === 6 && styles.currentPage
                } btn btn-outline-primary`}
                value="6"
                onClick={handlePageSkip}
              >
                {startPage + 9 > totalPages ? totalPages : startPage + 9}
              </button>
            )}
            <button
              className={`${styles.nextBtn} ${
                startPage + currentPage - 1 === totalPages
                  ? "btn-outline-secondary disabled"
                  : "btn-outline-primary"
              } btn`}
              onClick={handleNext}
            >
              {"Next >"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
