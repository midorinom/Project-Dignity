import React from "react";
import styles from "./JobsPosted.module.css";
import img1 from "../../jobListings/jobCards/images/image 71.png";
import img2 from "../../jobListings/jobCards/images/image 72.png";
import img3 from "../../jobListings/jobCards/images/image 73.png";

const JobsPostedCard = (props) => {
  return (
    <div className={`row m-4 p-4 ${styles.jobCard}`}>
      <div className="col-4 m-auto d-flex-column justify-content-center">
        <p>
          Job Title: <b>{props.jobPost.about.title}</b>
        </p>
        <p>Job Type: {props.jobPost.about.type}</p>
      </div>
      <div className="col-4">
        <p>Images of workplace:</p>
        <div className="d-flex justify-content-around">
          <img src={img1}></img>
          <img src={img2}></img>
          <img src={img3}></img>
        </div>
      </div>
      <div className="col-4 m-auto d-flex justify-content-around">
        <button className="btn btn-outline-secondary">View</button>
        <button className="btn btn-outline-secondary">Delete</button>
      </div>
    </div>
  );
};

export default JobsPostedCard;
