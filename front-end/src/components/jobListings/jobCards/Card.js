import React from "react";
import save from "./saved.png";
import image71 from "./images/image 71.png";
import image72 from "./images/image 72.png";
import image73 from "./images/image 73.png";
import visual from "../filters/abilityDifference/icons/visual.png";
import hearing from "../filters/abilityDifference/icons/hearing.png";
import autism from "../filters/abilityDifference/icons/autism.png";

const Card = () => {
  return (
    <div className="container mb-3 mx-0 px-0">
      <div className="row w-100 bg-light mx-0">
        <div className="col-1 d-flex flex-column align-items-center mt-3">
          <img src={save} alt="save icon" className="w-50" />
          <p className="text-secondary text-center">Save</p>
        </div>
        <div className="col-4 mt-3">
          <p className="text-secondary">Job Title: Assitant Baker</p>
          <p className="text-secondary">Company: Le Ciel Bakery</p>
          <p className="text-secondary mb-0">Job Type: Full-Time</p>
        </div>
        <div className="col-4 mt-3 d-flex flex-column">
          <p className="text-secondary mb-1">Images of Workplace :</p>
          <div className="d-flex">
            <img
              src={image71}
              alt="workplace pic 1"
              className="w-25 h-75 mx-1"
            />
            <img
              src={image72}
              alt="workplace pic 2"
              className="w-25 h-75 mx-1"
            />
            <img
              src={image73}
              alt="workplace pic 3"
              className="w-25 h-75 mx-1"
            />
          </div>
        </div>
        <div className="col-3 border-start mt-3 d-flex flex-column">
          <p className="text-secondary text-center mb-1">Suited For</p>
          <div className="d-flex justify-content-center h-25">
            <img src={visual} alt="visual icon" className="mx-1" />
            <img src={hearing} alt="hearing icon" className="mx-1" />
            <img src={autism} alt="autism icon" className="mx-1" />
          </div>
          <p className="text-secondary text-center mb-0">
            Visual, Hearing Ability Differences, Autism
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
