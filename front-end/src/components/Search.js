import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  // Variables
  const inputRef = useRef();
  const navigate = useNavigate();

  // Event Functions
  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchInput(inputRef.current.value);

    // If the search came from outside JobListings page
    if (!props.isJobListings) {
      props.setIsSearch(true);
      navigate("/job-listings");
    } else {
      // If the search came from within the JobListings page
      const getSearchedJobPosts = async () => {
        try {
          const res = await fetch("http://127.0.0.1:5001/api/jobposts/search", {
            method: "POST",
            body: JSON.stringify({ search: inputRef.current.value }),
            headers: { "content-type": "application/json" },
          });
          const fetchedJobPosts = await res.json();
          props.setJobPosts(fetchedJobPosts);
        } catch (err) {
          console.log(err);
        }
      };
      getSearchedJobPosts();
    }
  }

  // Only availble in Job Listings page. Resets the input field and re-fetches with getAll
  function resetSearch(e) {
    props.setSearchInput("");

    const getAllJobPosts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5001/api/jobposts/get", {
          method: "POST",
          headers: { "content-type": "application/json" },
        });
        const fetchedJobPosts = await res.json();
        props.setJobPosts(fetchedJobPosts);
      } catch (err) {
        console.log(err);
      }
    };
    getAllJobPosts();
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
