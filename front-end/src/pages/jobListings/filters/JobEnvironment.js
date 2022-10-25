import React, { useState, useEffect } from "react";

const JobEnvironment = (props) => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  function handleClick(e) {
    // must store e.currentTarget.value in a variable first
    const clickedEnvironment = e.currentTarget;

    props.setEnvironmentFilters((prevState) => {
      return {
        ...prevState,
        [clickedEnvironment.id]: clickedEnvironment.value,
      };
    });
  }

  // useEffect to lift state up to parent component after environmentFilters is set
  useEffect(() => {
    if (firstRenderDone) {
      props.setFilter((prevState) => {
        return { ...prevState, environment: props.environmentFilters };
      });
    }
  }, [props.environmentFilters]);

  // onMount
  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mt-2 text-muted">Job Environment</h5>
      <label htmlFor="noise" className="form-label mx-1 fw-bold">
        Noise Level
      </label>
      <div className="d-flex">
        <p className="text-center">Min: </p>
        <p className="w-25 text-center">Quiet</p>
        <input
          type="range"
          className="form-range w-50"
          min="0"
          max="4"
          step="1"
          id="minNoise"
          value={props.environmentFilters.minNoise}
          onChange={handleClick}
        ></input>
        <p className="w-25 text-center">Loud</p>
      </div>
      <div className="d-flex">
        <p className="text-center">Max: </p>
        <p className="w-25 text-center">Quiet</p>
        <input
          type="range"
          className="form-range w-50"
          min="0"
          max="4"
          step="1"
          id="maxNoise"
          value={props.environmentFilters.maxNoise}
          onChange={handleClick}
        ></input>
        <p className="w-25 text-center">Loud</p>
      </div>
      <label htmlFor="light" className="form-label mx-1 fw-bold">
        Light Intensity
      </label>
      <div className="d-flex">
        <p className="text-center">Min: </p>
        <p className="w-25 text-center">Dim</p>
        <input
          type="range"
          className="form-range w-50"
          min="0"
          max="4"
          step="1"
          id="minLight"
          value={props.environmentFilters.minLight}
          onChange={handleClick}
        ></input>
        <p className="w-25 text-center">Bright, Flashing</p>
      </div>
      <div className="d-flex">
        <p className="text-center">Max: </p>
        <p className="w-25 text-center">Dim</p>
        <input
          type="range"
          className="form-range w-50"
          min="0"
          max="4"
          step="1"
          id="maxLight"
          value={props.environmentFilters.maxLight}
          onChange={handleClick}
        ></input>
        <p className="w-25 text-center">Bright, Flashing</p>
      </div>
    </div>
  );
};

export default JobEnvironment;
