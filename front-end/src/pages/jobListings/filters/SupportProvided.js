import React, { useState, useEffect } from "react";

const SupportProvided = (props) => {
  const [supportFilters, setSupportFilters] = useState([]);
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  function handleClick(e) {
    // must store e.currentTarget.value in a variable first
    const clickedSupport = e.currentTarget.value;

    // If the Support that was clicked already exists in the supportFilters array, filter it out.
    if (supportFilters.some((element) => element === clickedSupport)) {
      const newArray = supportFilters.filter(
        (element) => element !== clickedSupport
      );
      setSupportFilters(newArray);
    } else {
      // Otherwise, push it into the supportFilters array
      setSupportFilters((prevState) => {
        return [...prevState, clickedSupport];
      });
    }
  }

  // useEffect to lift state up to parent component after supportFilters is set
  useEffect(() => {
    if (firstRenderDone) {
      props.setFilter((prevState) => {
        return { ...prevState, support: supportFilters };
      });
    }
  }, [supportFilters]);

  // onMount
  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Support Provided</h5>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
        onClick={handleClick}
        value={"Structured"}
      >
        <p className="d-flex justify-content-center m-0">Training Programmes</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
        onClick={handleClick}
        value={"Shadowing"}
      >
        <p className="d-flex justify-content-center m-0">Job Shadowing</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
        onClick={handleClick}
        value={"Trial"}
      >
        <p className="d-flex justify-content-center m-0">Trial Period</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
        onClick={handleClick}
        value={"Redesign"}
      >
        <p className="d-flex justify-content-center m-0">Workplace Redesign</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
        onClick={handleClick}
        value={"Social"}
      >
        <p className="d-flex justify-content-center m-0">Social Integration</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center"
        type="button"
        data-bs-toggle="button"
        onClick={handleClick}
        value={"Assistive"}
      >
        <p className="d-flex justify-content-center m-0">
          Assistive Technology (AT)
        </p>
      </button>
    </div>
  );
};

export default SupportProvided;
