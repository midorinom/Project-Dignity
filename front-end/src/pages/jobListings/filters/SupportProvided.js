import React from "react";

const SupportProvided = () => {
  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Support Provided</h5>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <p className="d-flex justify-content-center m-0">Training Programmes</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <p className="d-flex justify-content-center m-0">Job Shadowing</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <p className="d-flex justify-content-center m-0">Trial Period</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <p className="d-flex justify-content-center m-0">Workplace Redesign</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <p className="d-flex justify-content-center m-0">Social Integration</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <p className="d-flex justify-content-center m-0">
          Assistive Technology (AT)
        </p>
      </button>
    </div>
  );
};

export default SupportProvided;
