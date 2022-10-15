import React from "react";

const JobInteractionType = () => {
  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Job Interaction Type</h5>
      <div className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center">
        <p className="d-flex justify-content-center m-0">Customer Facing</p>
      </div>
      <div className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center">
        <p className="d-flex justify-content-center m-0">Support Provided</p>
      </div>
    </div>
  );
};

export default JobInteractionType;
