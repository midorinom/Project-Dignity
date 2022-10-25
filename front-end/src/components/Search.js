import React, { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

const Search = (props) => {
  // Variables
  const inputRef = useRef();
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  // Event Functions
  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchInput(inputRef.current.value);

    // If the search came from outside JobListings page
    if (!props.isJobListings) {
      navigate("/job-listings");
    } else {
      // If the search came from within the JobListings page
      props.getJobPosts(inputRef.current.value, props.initialFilter);
    }
  }

  // Only available in Job Listings page. Resets the input field and re-fetches
  function resetSearch() {
    props.setAbilityDiffFilters([]);
    props.setEnvironmentFilters({
      minNoise: 0,
      maxNoise: 4,
      minLight: 0,
      maxLight: 4,
    });
    props.setInteractionFilter(undefined);
    props.setSupportFilters([]);
    props.setSearchInput("");
    props.setFilter({
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

    props.getJobPosts(inputRef.current.value, props.initialFilter);
  }

  // Make the Input text stay through renders
  useEffect(() => {
    inputRef.current.value = props.searchInput;
  });

  // Return
  return (
    <form onSubmit={handleSubmit} className="form-inline m-4 d-flex">
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder=" 🔍 Search by Job Title or Competency"
        aria-label="Search by Job Title or Competency"
        aria-describedby="Search by Job Title or Competency"
      />
      {props.isJobListings && (
        <button type="button" onClick={resetSearch}>
          X
        </button>
      )}
    </form>
  );
};

export default Search;
