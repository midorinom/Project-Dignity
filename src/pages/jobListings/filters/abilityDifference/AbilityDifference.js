import React, { useState, useEffect } from "react";
import physical from "./icons/physical.png";
import visual from "./icons/visual.png";
import hearing from "./icons/hearing.png";
import intellectual from "./icons/intellectual.png";
import autism from "./icons/autism.png";
import "./AbilityDifferences.css";

const AbilityDifference = (props) => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  function handleClick(e) {
    // must store e.currentTarget.value in a variable first
    const clickedAbilityDiff = e.currentTarget.value;

    // If the abilityDiff that was clicked already exists in the abilityDiffFilters array, filter it out.
    if (
      props.abilityDiffFilters.some((element) => element === clickedAbilityDiff)
    ) {
      const newArray = props.abilityDiffFilters.filter(
        (element) => element !== clickedAbilityDiff
      );
      props.setAbilityDiffFilters(newArray);
    } else {
      // Otherwise, push it into the abilityDiffFilters array
      props.setAbilityDiffFilters((prevState) => {
        return [...prevState, clickedAbilityDiff];
      });
    }
  }

  // useEffect to lift state up to parent component after abilityDiffFilters is set
  useEffect(() => {
    if (firstRenderDone) {
      props.setFilter((prevState) => {
        return { ...prevState, abilityDiff: props.abilityDiffFilters };
      });
    }
  }, [props.abilityDiffFilters]);

  // onMount
  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  return (
    <div className="d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Ability Difference</h5>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex align-items-center ${
          props.abilityDiffFilters.some((element) => element === "Autism") &&
          "active"
        }`}
        type="button"
        onClick={handleClick}
        value="Autism"
      >
        <div className="w-25">
          <img src={autism} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Autism</p>
      </button>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex align-items-center ${
          props.abilityDiffFilters.some((element) => element === "Hearing") &&
          "active"
        }`}
        type="button"
        onClick={handleClick}
        value="Hearing"
      >
        <div className="w-25">
          <img src={hearing} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Hearing</p>
      </button>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex align-items-center ${
          props.abilityDiffFilters.some(
            (element) => element === "Intellectual"
          ) && "active"
        }`}
        type="button"
        onClick={handleClick}
        value="Intellectual"
      >
        <div className="w-25">
          <img src={intellectual} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Intellectual</p>
      </button>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex align-items-center ${
          props.abilityDiffFilters.some((element) => element === "Physical") &&
          "active"
        }`}
        type="button"
        onClick={handleClick}
        value="Physical"
      >
        <div className="w-25">
          <img src={physical} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Physical</p>
      </button>
      <button
        className={`btn btn-outline-secondary btn-sm m-1 d-flex align-items-center ${
          props.abilityDiffFilters.some((element) => element === "Visual") &&
          "active"
        }`}
        type="button"
        onClick={handleClick}
        value="Visual"
      >
        <div className="w-25">
          <img src={visual} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Visual</p>
      </button>
    </div>
  );
};

export default AbilityDifference;
