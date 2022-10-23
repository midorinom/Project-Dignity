import React, { useState, useEffect } from "react";
import "./JobInteractionType.css";

const JobInteractionType = (props) => {
  const [interactionFilter, setInteractionFilter] = useState(undefined);
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  function handleClick(e) {
    // must store e.currentTarget.value in a variable first
    const clickedInteraction = e.currentTarget.value;
    const target = e.currentTarget;

    // If the interaction was clicked already
    if (interactionFilter === clickedInteraction) {
      setInteractionFilter(undefined);
    } else {
      // Otherwise, set it to the state
      setInteractionFilter(clickedInteraction);
    }
  }

  // useEffect to lift state up to parent component after interactionFilter is set
  useEffect(() => {
    if (firstRenderDone) {
      props.setFilter((prevState) => {
        return { ...prevState, customerFacing: interactionFilter };
      });
    }
  }, [interactionFilter]);

  // onMount
  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Job Interaction Type</h5>
      <input
        type="radio"
        class="btn-check"
        name="jobInteractions"
        id="btn-check-outlined1"
        autocomplete="off"
        onClick={handleClick}
        value={true}
      />
      <label
        class="btn btn-outline-secondary m-1 d-flex justify-content-center align-items-center"
        for="btn-check-outlined1"
      >
        Customer Facing
      </label>
      <input
        type="radio"
        class="btn-check"
        name="jobInteractions"
        id="btn-check-outlined2"
        autocomplete="off"
        onClick={handleClick}
        value={false}
      />
      <label
        class="btn btn-outline-secondary m-1 d-flex justify-content-center align-items-center"
        for="btn-check-outlined2"
      >
        Non-Customer Facing
      </label>
    </div>
  );
};

export default JobInteractionType;
