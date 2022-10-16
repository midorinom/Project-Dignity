import React from "react";

const Search = () => {
  return (
    <div className="form-inline m-4">
      <input
        type="text"
        className="form-control"
        placeholder=" 🔍 Search by Job Title or Competency"
        aria-label="Search by Job Title or Competency"
        aria-describedby="Search by Job Title or Competency"
      />
    </div>
  );
};

export default Search;
