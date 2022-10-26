import React, { useContext, useEffect, useState } from "react";
import save from "./saved.png";
import image71 from "./images/image 71.png";
import image72 from "./images/image 72.png";
import image73 from "./images/image 73.png";
import visualIcon from "../filters/abilityDifference/icons/visual.png";
import hearingIcon from "../filters/abilityDifference/icons/hearing.png";
import autismIcon from "../filters/abilityDifference/icons/autism.png";
import intellectualIcon from "../filters/abilityDifference/icons/intellectual.png";
import physicalIcon from "../filters/abilityDifference/icons/physical.png";
import { Link } from "react-router-dom";
import UserContext from "../../../context/userContext";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

const Card = (props) => {
  // Sort AbilityDifferences in Alphabetical Order
  const abilityDiff = props.job.jobPost.accessibility.abilityDiff;
  abilityDiff.sort();

  // Map AbilityDifferencesIcons
  const abilityDifferencesIcons = abilityDiff.map((element, id) => {
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
    return <img src={iconImage} alt={iconImage} className="mx-1" key={id} />;
  });

  const handleJobDetails = async () => {
    await props.setSelectedJobPost(props.job);
  };

  //==============================
  //Save applied
  const userCtx = useContext(UserContext);
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (userCtx.userDetails.savedJobs !== undefined) {
      for (let item of userCtx.userDetails.savedJobs) {
        if (props.job._id === item.id) {
          setClick(true);
        }
      }
    }
  }, []);

  const handleClick = () => {
    let data = [];
    if (userCtx.userDetails.savedJobs !== undefined) {
      data = [...userCtx.userDetails.savedJobs];
    }
    setClick(true);
    saved("http://127.0.0.1:5001/api/jobseekers/update", data);
  };

  async function saved(url, data) {
    let now = new Date().toString();
    let nowRev = now.slice(4, 8) + now.slice(11, 15);
    let newSave = { id: props.job._id, date: nowRev };

    data.push(newSave);
    console.log(data);
    userCtx.setUserDetails({ ...userCtx.userDetails, savedJobs: data });
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userCtx.userDetails.id,
        savedJobs: data,
      }),
    });
    return response.json();
  }

  const handleRevert = () => {
    setClick(false);
    revert("http://127.0.0.1:5001/api/jobseekers/update", props.job_id);
  };

  async function revert(url) {
    let data = [...userCtx.userDetails.savedJobs];
    let indicator = -1;
    for (let i = 0; i < data.length; i++) {
      if (props.job_id === data[i].id) {
        indicator = i;
      }
    }
    data.splice(indicator, 1);
    console.log(data);
    userCtx.setUserDetails({ ...userCtx.userDetails, savedJobs: data });
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userCtx.userDetails.id,
        savedJobs: data,
      }),
    });
    return response.json();
  }
  //==============================

  return (
    <div className="container mb-3 mx-0 px-0">
      <div className="row w-100 bg-light mx-0" onClick={handleJobDetails}>
        <div className="col-1 d-flex flex-column align-items-center mt-3">
          {!click && (
            <>
              <img
                src={save}
                alt="save icon"
                className="w-50"
                onClick={handleClick}
              />
              <p className="text-secondary text-center" onClick={handleClick}>
                Save
              </p>
            </>
          )}
          {click && (
            <>
              <div
                style={{ transform: "scale(2)" }}
                onClick={handleRevert}
                className="mb-1"
              >
                <BookmarkAddedOutlinedIcon />
              </div>
              <p className="text-secondary text-center" onClick={handleRevert}>
                Saved
              </p>
            </>
          )}
        </div>
        <Link to="/job-post-details" className="col-4 mt-3">
          <p className="text-secondary">
            Job Title: {props.job.jobPost.about.title}
          </p>
          <p className="text-secondary">
            Company: {props.job.jobPost.about.company}
          </p>
          <p className="text-secondary mb-0">
            Job Type: {props.job.jobPost.about.type}
          </p>
        </Link>
        <Link to="/job-post-details" className="col-4 mt-3 d-flex flex-column">
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
        </Link>
        <Link
          to="/job-post-details"
          className="col-3 border-start d-flex flex-column justify-content-center gap-2"
        >
          <p className="text-secondary text-center mb-1">Suited For</p>
          <div className="d-flex justify-content-center h-25">
            {abilityDifferencesIcons}
          </div>
          <p className="text-secondary text-center mb-0">
            {[...props.job.jobPost.accessibility.abilityDiff].join(", ")}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
