import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext";
import AppliedJobsCard from "./AppliedJobsCard";

const AppliedJobs = (props) => {
  const userCtx = useContext(UserContext);
  const [jobsApplied, setJobsApplied] = useState([]);
  const [jobCards, setJobCards] = useState(undefined);

  // =======================================
  // onMount useEffect to fetch Jobs Applied
  // =======================================
  useEffect(() => {
    getJobsApplied(userCtx.userDetails.appliedJobs);
  }, []);

  const getJobsApplied = async (appliedJobs) => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5001/api/jobposts/get/multiple-ids",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ids: appliedJobs }),
        }
      );
      const fetchedJobPosts = await res.json();
      setJobsApplied(fetchedJobPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // =========================================================
  // useEffect to map cards after JobsApplied has been fetched
  // =========================================================
  useEffect(() => {
    if (jobsApplied.length > 0) {
      mapCards();
    }
  }, [jobsApplied]);

  function mapCards() {
    setJobCards(
      jobsApplied.map((element) => {
        return (
          <AppliedJobsCard
            jobPost={element}
            key={Math.random()}
            getJobsApplied={getJobsApplied}
            setSelectedJobPost={props.setSelectedJobPost}
          />
        );
      })
    );
  }

  return (
    <div>
      <div className="m-4">
        {jobCards ? (
          jobCards
        ) : (
          <p className="d-flex justify-content-center">No Jobs Applied</p>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
