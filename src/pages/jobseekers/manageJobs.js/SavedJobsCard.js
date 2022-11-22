import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./manageJobs.module.css";
import img1 from "../../jobListings/jobCards/images/image 71.png";
import img2 from "../../jobListings/jobCards/images/image 72.png";
import img3 from "../../jobListings/jobCards/images/image 73.png";
import UserContext from "../../../context/userContext";

const AppliedJobsCard = (props) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const handleWithdraw = async () => {
    try {
      const newSavedJobs = userCtx.userDetails.savedJobs.filter(
        (element) => element.id !== props.jobPost._id
      );
      userCtx.setUserDetails((prevState) => {
        return { ...prevState, savedJobs: newSavedJobs };
      });

      const res = await fetch("http://127.0.0.1:5001/api/jobseekers/update", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: userCtx.userDetails.id,
          savedJobs: newSavedJobs,
        }),
      });
      console.log(await res.json());
      props.getJobsSaved(newSavedJobs);
    } catch (err) {
      console.log(err);
    }
  };

  function handleView() {
    props.setSelectedJobPost(props.jobPost);
    navigate("/job-post-details");
  }

  function getTimeStamp() {
    for (const jobSaved of userCtx.userDetails.savedJobs) {
      if (jobSaved.id === props.jobPost._id) {
        return jobSaved.date;
      }
    }
  }

  const timestamp = getTimeStamp();

  return (
    <div className={`row m-4 p-4 ${styles.jobCard}`}>
      <div className="col-4 m-auto d-flex-column justify-content-center">
        <p>
          Job Title: <b>{props.jobPost.jobPost.about.title}</b>
        </p>
        <p>Company: {props.jobPost.jobPost.about.company}</p>
        <p>Job Type: {props.jobPost.jobPost.about.type}</p>
      </div>
      <div className="col-4">
        <p>Images of workplace:</p>
        <div className="d-flex justify-content-around">
          <img src={img1} alt="placeholder"></img>
          <img src={img2} alt="placeholder"></img>
          <img src={img3} alt="placeholder"></img>
        </div>
      </div>
      <div className="col-4 m-auto d-flex justify-content-around">
        <div className="d-flex justify-content-center">
          Saved on: {timestamp}
        </div>
        <button onClick={handleView} className="btn btn-outline-secondary">
          View
        </button>
        <button onClick={handleWithdraw} className="btn btn-outline-secondary">
          Remove
        </button>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
