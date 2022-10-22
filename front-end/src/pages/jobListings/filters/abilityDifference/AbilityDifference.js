import React from "react";
import physical from "./icons/physical.png";
import visual from "./icons/visual.png";
import hearing from "./icons/hearing.png";
import intellectual from "./icons/intellectual.png";
import autism from "./icons/autism.png";
import "./icons/AbilityDifferences.css";

const AbilityDifference = () => {
  return (
    <div className="d-flex flex-column w-100 bg-light align-center">
      <h5 className="mx-1 mb-1 mt-2 text-muted">Ability Difference</h5>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <div className="w-25">
          <img src={physical} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Physical</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <div className="w-25">
          <img src={visual} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Visual</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <div className="w-25">
          <img src={hearing} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Hearing</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <div className="w-25">
          <img src={intellectual} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Intellectual</p>
      </button>
      <button
        className="btn btn-outline-secondary btn-sm m-1 d-flex align-items-center"
        type="button"
        data-bs-toggle="button"
      >
        <div className="w-25">
          <img src={autism} alt="physical icon" className="w-50"></img>
        </div>
        <p className="w-50 d-flex justify-content-center m-0">Autism</p>
      </button>
    </div>
  );
};

export default AbilityDifference;
