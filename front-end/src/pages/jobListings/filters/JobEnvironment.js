import React from "react";

const JobEnvironment = () => {
  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mt-2 text-muted">Job Environment</h5>
      <label htmlFor="noise" className="form-label mx-1">
        Noise Level
      </label>
      <div className="d-flex">
        <p className="w-25 text-center">Quiet</p>
        <input
          type="range"
          className="form-range w-50"
          min="0"
          max="5"
          step="1"
          id="noise"
        ></input>
        <p className="w-25 text-center">Loud</p>
      </div>
      <label htmlFor="light" className="form-label mx-1">
        Light Intensity
      </label>
      <div className="d-flex">
        <p className="w-25 text-center">Dim</p>
        <input
          type="range"
          className="form-range w-50"
          min="0"
          max="5"
          step="1"
          id="light"
        ></input>
        <p className="w-25 text-center">Bright, Flashing</p>
      </div>
    </div>
  );
};

export default JobEnvironment;
