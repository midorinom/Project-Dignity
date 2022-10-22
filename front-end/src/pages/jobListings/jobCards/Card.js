import React from "react";
import save from "./saved.png";
import image71 from "./images/image 71.png";
import image72 from "./images/image 72.png";
import image73 from "./images/image 73.png";
import visualIcon from "../filters/abilityDifference/icons/visual.png";
import hearingIcon from "../filters/abilityDifference/icons/hearing.png";
import autismIcon from "../filters/abilityDifference/icons/autism.png";
import intellectualIcon from "../filters/abilityDifference/icons/intellectual.png";
import physicalIcon from "../filters/abilityDifference/icons/physical.png";

const Card = (props) => {
  // Map AbilityDifferencesIcons
  const abilityDifferencesIcons = props.jobPost.accessibility.abilityDiff.map(
    (element) => {
      let iconImage = "";

      switch (element) {
        case "Autism":
          iconImage = autismIcon;
          break;
        case "Hearing":
          iconImage = hearingIcon;
          break;
        case "Intellectual":
          iconImage = intellectualIcon;
          break;
        case "Physical":
          iconImage = physicalIcon;
          break;
        case "Visual":
          iconImage = visualIcon;
          break;
      }

      return (
        <img
          src={iconImage}
          alt={iconImage}
          className="mx-1"
          key={Math.random()}
        />
      );
    }
  );

  return (
    <div className="container mb-3 mx-0 px-0">
      <div className="row w-100 bg-light mx-0">
        <div className="col-1 d-flex flex-column align-items-center mt-3">
          <img src={save} alt="save icon" className="w-50" />
          <p className="text-secondary text-center">Save</p>
        </div>
        <div className="col-4 mt-3">
          <p className="text-secondary">
            Job Title: {props.jobPost.about.title}
          </p>
          <p className="text-secondary">
            Company: {props.jobPost.about.company}
          </p>
          <p className="text-secondary mb-0">
            Job Type: {props.jobPost.about.type}
          </p>
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
        <div className="col-3 border-start d-flex flex-column justify-content-center gap-2">
          <p className="text-secondary text-center mb-1">Suited For</p>
          <div className="d-flex justify-content-center h-25">
            {abilityDifferencesIcons}
          </div>
          <p className="text-secondary text-center mb-0">
            {[...props.jobPost.accessibility.abilityDiff].join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
