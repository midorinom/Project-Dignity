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
      const newAppliedJobs = userCtx.userDetails.appliedJobs.filter(
        (element) => element !== props.jobPost._id
      );

      userCtx.setUserDetails((prevState) => {
        return { ...prevState, appliedJobs: newAppliedJobs };
      });

      const res = await fetch(
        "https://project-dignity-backend.onrender.com/api/jobseekers/update",
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            id: userCtx.userDetails.id,
            appliedJobs: newAppliedJobs,
          }),
        }
      );
      console.log(await res.json());
      props.getJobsApplied(newAppliedJobs);
    } catch (err) {
      console.log(err);
    }
  };

  function handleView() {
    props.setSelectedJobPost(props.jobPost);
    navigate("/job-post-details");
  }

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
      <div className="col-4 d-flex-column justify-content-between m-auto align-items-center">
        <div className="m-auto d-flex justify-content-around">
          <button onClick={handleView} className="btn btn-outline-secondary">
            View
          </button>
          <button
            onClick={handleWithdraw}
            className="btn btn-outline-secondary"
          >
            Withdraw Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
