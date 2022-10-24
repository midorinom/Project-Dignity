import React from "react";

import image71 from "../jobCards/images/image 71.png";
import image72 from "../jobCards/images/image 72.png";
import image73 from "../jobCards/images/image 73.png";
import visualIcon from "../filters/abilityDifference/icons/visual.png";
import hearingIcon from "../filters/abilityDifference/icons/hearing.png";
import autismIcon from "../filters/abilityDifference/icons/autism.png";
import intellectualIcon from "../filters/abilityDifference/icons/intellectual.png";
import physicalIcon from "../filters/abilityDifference/icons/physical.png";

const JobPostDetails = (props) => {
  const about = props.selectedJobPost.about;
  const access = props.selectedJobPost.accessibility;

  //==============================
  // Map AbilityDifferencesIcons
  const abilityDifferencesIcons = access.abilityDiff.map((element, id) => {
    let iconImage = "";
    let iconDesc = "";
    switch (element) {
      case "Autism":
        iconImage = autismIcon;
        iconDesc = "Autistic";
        break;
      case "Hearing":
        iconImage = hearingIcon;
        iconDesc = "Hearing ability differences";
        break;
      case "Intellectual":
        iconImage = intellectualIcon;
        iconDesc = "Intellectual ability differences";
        break;
      case "Physical":
        iconImage = physicalIcon;
        iconDesc = "Physical ability differences";
        break;
      case "Visual":
        iconImage = visualIcon;
        iconDesc = "Visual ability differences";
        break;
    }
    return (
      <div className="row d-flex m-2">
        <div className="m-0 p-0 w-25 d-flex align-items-center justify-cotent-center">
          <img
            src={iconImage}
            alt={iconImage}
            className="m-0 p-2 w-75"
            key={"image" + id}
          />
        </div>
        <p key={"desc" + id} className="m-0 p-2 w-75 d-flex align-items-center">
          {iconDesc}
        </p>
      </div>
    );
  });
  //==============================

  //==============================
  // Map Support
  const supportProvided = access.support.map((item, id) => {
    return (
      <div>
        <h6 className="text-center mx-1">{item}</h6>
        <p className="text-center mx-1">
          {access.supportElab[item.toLowerCase()]}
        </p>
      </div>
    );
  });
  //==============================

  return (
    <div className="container">
      <div className="row d-flex">
        <h1 className="col-auto d-flex align-items-center mt-3 mr-2 display-3">
          {about.title}
        </h1>
        <p className="col-auto d-flex align-items-center mt-4 mb-2">
          {about.type}
        </p>
      </div>
      <div className="row">
        {/* about column */}
        <div className="col-8">
          <div>
            <h1 className="display-6 m-0">{about.company}</h1>
            <button className="btn btn-outline-primary btn-sm">
              Read about the company
            </button>
          </div>
          <div className="my-4">
            <h5 className="m-0">Job Description</h5>
            <p className="m-0">{about.desc}</p>
          </div>
          <div className="my-4">
            <h5 className="m-0">Job Interaction Type</h5>
            <p className="m-0">
              This is a {about.customerFacing ? "customer" : "non-customer"}{" "}
              facing role.
            </p>
          </div>
          <div className="my-4">
            <h5 className="m-0">Job Tasks</h5>
            <ul className="list-unstyled">
              {about.tasks.map((task, id) => {
                return <li key={"task" + id}>{task}</li>;
              })}
            </ul>
          </div>
          <div className="my-4">
            <h5 className="m-0">Key Skillsets and Qualities</h5>
            <ul className="list-unstyled">
              {about.skills.map((task, id) => {
                return <li key={"skill" + id}>{task}</li>;
              })}
            </ul>
          </div>
          <div className="my-4">
            <h5 className="m-0">Expected Salary</h5>
            <p className="m-0">{`S$${about.minSalary} to S$${about.maxSalary}`}</p>
          </div>
          <div className="my-4">
            <h5 className="m-0">Job Location and Accessibility</h5>
            {/* Meeting query: location needs to be pulled from useContext or jobpostschema needs to change */}
            <p className="m-0">{`${about.block}, ${about.unit}, Singapore ${about.postalCode}`}</p>
            <p className="m-0">{about.accessibility}</p>
          </div>
          <div className="my-3">
            <h5 className="m-0">Images of the Workplace</h5>
            <div className="mt-1">
              <img src={image71} alt="workplace pic" className="mr-2"></img>
              <img src={image72} alt="workplace pic" className="mx-2"></img>
              <img src={image73} alt="workplace pic" className="ml-2"></img>
            </div>
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-dark w-100">Apply Now</button>
          <div className="border border-warning border-2 my-4">
            <h5 className="text-center my-3">Suitable For</h5>
            {abilityDifferencesIcons}
          </div>

          <div className="border border-warning border-2 my-4 d-flex flex-column align-items-center">
            <h5 className="text-center my-3">Support Commitment</h5>
            {supportProvided}
          </div>

          <div className="border border-warning border-2 my-4 w-100">
            <h5 className="text-center my-3">Job Environment</h5>
            <div className="d-flex mx-4 flex-column align-items-center">
              <label htmlFor="noise" className="form-label mx-1 mb-1">
                Noise Level
              </label>
              <div className="d-flex mx-2 mb-4 align-items-center">
                <p className="w-25 text-center m-0">Quiet</p>
                <input
                  type="range"
                  className="form-range w-50 p-1"
                  min="0"
                  max="5"
                  step="1"
                  id="noise"
                  value={access.environment.noise}
                  disabled
                ></input>
                <p className="w-25 text-center m-0">Loud</p>
              </div>

              <label htmlFor="light" className="form-label mx-1 mb-1">
                Light Intensity
              </label>
              <div className="d-flex mx-2 align-items-center">
                <p className="w-25 text-center m-0">Dim</p>
                <input
                  type="range"
                  className="form-range w-50 p-1"
                  min="0"
                  max="5"
                  step="1"
                  id="light"
                  value={access.environment.light}
                  disabled
                ></input>
                <p className="w-25 text-center m-0">Bright, flashing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostDetails;
