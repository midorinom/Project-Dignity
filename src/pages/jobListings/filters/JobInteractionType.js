import React, { useState, useEffect } from "react";
import "./JobInteractionType.css";

const JobInteractionType = (props) => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  function handleClick(e) {
    // must store e.currentTarget.value in a variable first
    const clickedInteraction = e.currentTarget.value;
    console.log(props.interactionFilter);

    // If the interaction was clicked already
    if (props.interactionFilter === clickedInteraction) {
      props.setInteractionFilter(undefined);
    } else {
      // Otherwise, set it to the state
      props.setInteractionFilter(clickedInteraction);
    }
  }

  // useEffect to lift state up to parent component after interactionFilter is set
  useEffect(() => {
    if (firstRenderDone) {
      props.setFilter((prevState) => {
        return { ...prevState, customerFacing: props.interactionFilter };
      });
    }
  }, [props.interactionFilter]);

  // onMount
  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  return (
    <div className="mt-3 d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Job Interaction Type</h5>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center ${
          props.interactionFilter === "true" && "active"
        }`}
        type="button"
        onClick={handleClick}
        value={true}
      >
        <p className="d-flex justify-content-center m-0">Customer Facing</p>
      </button>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex justify-content-center align-items-center ${
          props.interactionFilter === "false" && "active"
        }`}
        type="button"
        onClick={handleClick}
        value={false}
      >
        <p className="d-flex justify-content-center m-0">Non-Customer Facing</p>
      </button>
    </div>
  );
};

export default JobInteractionType;
